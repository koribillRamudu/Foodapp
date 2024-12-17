import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        setMessage("Please log in to view your orders.");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/api/orders/${user._id}`);
        if (response.data.success) {
          setOrders(response.data.orders);
        } else {
          setMessage(response.data.message);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setMessage("Failed to fetch orders. Please try again.");
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      {message && <p>{message}</p>}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id}>
            <h2>Order ID: {order._id}</h2>
            <p>Total Amount: ₹ {order.totalAmount.toFixed(2)}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.item_name} />
                  <h3>{item.item_name}</h3>
                  <p>₹ {item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPage;
