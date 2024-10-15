import React from 'react';
import './Cart.css';

function CartList({ item_name, image, price }) {
  return (
    <div className="cart-card">
      <img src={image} alt={item_name} className="card-image" />
      <h1>{item_name}</h1>
      <h2>{price}</h2>
    </div>
  );
}

export default CartList;
