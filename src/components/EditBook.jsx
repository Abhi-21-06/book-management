import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editBook } from '../features/booksSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const bookToEdit = books.find((book) => book.id === parseInt(id));

  const [title, setTitle] = useState(bookToEdit.title);
  const [author, setAuthor] = useState(bookToEdit.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id: parseInt(id), updatedBook: { id: parseInt(id), title, author } }));
    navigate('/');
  };

  return (
    <div className="container mt-4" style={{marginLeft:"400px"}}>
      {/* <h2>Edit Book</h2> */}
      <form onSubmit={handleSubmit} className="shadow p-4 bg-white rounded w-50">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBook;
