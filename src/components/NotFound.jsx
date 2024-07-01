import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import '../stylesheets/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-component">
      <h1>Page Not Found</h1>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
