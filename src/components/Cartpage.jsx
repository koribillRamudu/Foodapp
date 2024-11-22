import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate the total price, ensure price is a number
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price);
    return !isNaN(price) ? acc + price : acc;
  }, 0);

  if (cartItems.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.item_name} className="cart-item-image" />
          <div className="cart-item-details">
            <h2>{item.item_name}</h2>
            <p>Price: ${item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <p className="total-price">Total: र {totalPrice.toFixed(2)}</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
