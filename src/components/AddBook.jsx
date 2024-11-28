import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: Date.now(), title, author }));
    navigate('/');
  };

  return (
    <>
    <div>
    {/* <h2 className='m-5'>Add Book</h2> */}
    <div className="container mt-4" style={{marginLeft:"400px"}}>
      <form onSubmit={handleSubmit} className="shadow p-4 bg-white rounded w-50 ">
        <div className="mb-3">
          <label className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author Name</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Add Book</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddBook;
