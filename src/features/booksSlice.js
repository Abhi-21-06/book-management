import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, updatedBook } = action.payload;
      const index = state.books.findIndex((book) => book.id === id);
      if (index !== -1) {
        state.books[index] = updatedBook;
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
