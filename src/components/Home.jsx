import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import { itemImages } from '../items';
import '../stylesheets/Home.css';
import ItemType from '../types/item';

function Home({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          key={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
          itemId={item.itemId}
        />
      ))}
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Home;
