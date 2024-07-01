import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import { itemImages } from '../items';
import '../stylesheets/Details.css';
import ItemType from '../types/item';
// eslint-disable-next-line import/order
import { Outlet } from 'react-router-dom';

function Details({ items }) {
  return (
    <div className="details-component">
      <Outlet />
      <div className="details-component-sidebar">
        {items.map((item) => (
          <Thumbnail
            key={item.itemId}
            image={itemImages[item.imageId]}
            title={item.title}
            itemId={item.itemId}
          />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Details;
