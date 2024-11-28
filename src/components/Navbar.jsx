import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/">Book Management System</Link>
      <div>
        <Link to="/books" className="btn btn-warning me-2">View Books</Link>
        {/* <Link to="/add" className="btn btn-primary">Add Book</Link> */}
      </div>
    </div>
  </nav>
);

export default Navbar;
