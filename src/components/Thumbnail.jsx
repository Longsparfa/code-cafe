import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import '../stylesheets/Thumbnail.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Thumbnail({ itemId, image, title }) {
  return (
    <Link to={`/details/${itemId}`} className="thumbnail-component">
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  );
}

Thumbnail.propTypes = {
  itemId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
