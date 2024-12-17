// CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create CartContext
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap around your app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  // Retrieve user data from localStorage when the app loads
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  // Function to add items to the cart
  const addToCart = async (item) => {
    if (!user) {
      console.log("User not logged in");
      return; // Prevent adding to cart if user is not logged in
    }

    try {
      const response = await axios.post("http://localhost:5000/api/cart", {
        userId: user._id, // Use the user's ObjectId from localStorage
        item_name: item.item_name,
        price: item.price,
        image: item.image,
      });

      setCartItems((prevItems) => [...prevItems, response.data]);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Export the CartContext itself for direct access
export { CartContext };
