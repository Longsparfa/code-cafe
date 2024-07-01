import React, { useEffect, useReducer, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Details from './components/Details';
import DetailsItem from './components/DetailsItem';
import { cartReducer, CartTypes, initialCartState } from './reducers/cartReducers';
import CartPage from './components/CartPage';

function App() {
  const [items, setItems] = useState([]);
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (itemId) => {
    dispatch({
      type: CartTypes.ADD,
      itemId,
    });
    console.log(itemId);
  };

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await axios.get('/api/items');
        setItems(data);
      } catch (error) {
        console.error('Not reachable try again piease', error);
      }
    }
    loadData();
  }, []);

  return (
    <Router>
      <Header cart={cart} />
      {items.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/details" element={<Details items={items} />}>
            <Route path=":id" element={<DetailsItem items={items} addToCart={addToCart} />} />
            <Route index element={<div>No Item Selected</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
