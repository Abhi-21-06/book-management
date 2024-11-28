import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
  <div className="container mt-5 text-center">
    <h1 className="fw-bold">Book Management App</h1>
    <p className="fw-bold mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi iste tempora qui beatae rerum dolores dicta perferendis soluta ex, neque molestiae, sint eius et quibusdam! Neque possimus delectus voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi iste tempora qui beatae rerum dolores dicta </p>
    <Link to="/add" className="btn btn-danger btn-lg mt-3">Add Book</Link>
  </div>
  </>
);

export default Home;
