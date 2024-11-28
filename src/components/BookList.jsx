import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../features/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="container mt-4" style={{marginLeft:"350px"}}>
      {/* <h2>Book List</h2> */}
      {books.length === 0 ? (
        <p>No books added yet!</p>
      ) : (
        <table className="table table-hover shadow table-dark w-50">
          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link to={`/edit/${book.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <button onClick={() => handleDelete(book.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookList;
