import React, { useEffect, useState } from "react";
import axios from "axios";
import './Cart.css'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCartItems = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      try {
        const response = await axios.get(`http://localhost:5000/api/cart/${user._id}`);
        setCartItems(response.data);
        const total = response.data.reduce((sum, item) => sum + item.price, 0);
        setTotalAmount(total);
      } catch (err) {
        console.error("Error fetching cart items:", err);
      }
    };
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    try {
      await axios.delete(`http://localhost:5000/api/cart/${user._id}/${itemId}`);
      setCartItems(cartItems.filter((item) => item._id !== itemId));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const handleProceedToPay = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setMessage("Please log in to proceed.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/orders`, {
        userId: user._id,
        items: cartItems,
        totalAmount,
      });

      if (response.data.success) {
        setMessage("Order placed successfully!");
        setCartItems([]);
        setTotalAmount(0);
      }
    } catch (err) {
      console.error("Error placing order:", err);
      setMessage("Failed to place order. Please try again.");
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {message && <p>{message}</p>}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <img src={item.image} alt={item.item_name} />
              <h3>{item.item_name}</h3>
              <p>₹ {item.price}</p>
              <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total Amount: ₹ {totalAmount}</h2>
      {cartItems.length > 0 && (
        <button onClick={handleProceedToPay}>Proceed to Pay</button>
      )}
    </div>
  );
};

export default CartPage;
