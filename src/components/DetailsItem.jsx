import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { itemImages } from '../items';
import ItemType from '../types/item';
import '../stylesheets/DetailItem.css';

// eslint-disable-next-line react/prop-types
function DetailsItem({ addToCart, items }) {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const detailItem = items?.find((item) => item.itemId === id);

  const addItemToCart = () => {
    addToCart(detailItem.itemId);
  };

  return (
    <div className="detail-item-component">
      {detailItem
        ? (
          <>
            <img src={itemImages[detailItem.imageId]} alt={detailItem.title} />
            <h2>{detailItem.title}</h2>
            {detailItem.description && <h6>{detailItem.description}</h6>}
            <div>
              {`$${(detailItem.salePrice || detailItem.price).toFixed(2)}`}
            </div>
            <button
              type="button"
              onClick={addItemToCart}
            >
              Add to Cart
            </button>
          </>
        )
        : <h2>Unknown Item</h2>}
    </div>
  );
}

DetailsItem.propTypes = {
  addToCart: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(ItemType).isRequired,
};
export default DetailsItem;
