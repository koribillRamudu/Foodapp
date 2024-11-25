import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Menu.css';
import { CartContext } from '../context/CartContext';

function MenuPage() {
  const { addToCart } = useContext(CartContext);
  const { restaurantId } = useParams(); // Extract restaurantId from the URL
  const [menuItems, setMenuItems] = useState([]); // Store menu items
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle error state

  // Fetch menu items for the specific restaurant
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true); // Set loading state before fetching
        const response = await axios.get('http://localhost:5000/api/menu/menuitems'); // API to get all menu items
        
        console.log('API Response:', response.data); // Log the response from the API
        
        // Filter the menu items based on restaurantId
        const filteredMenuItems = response.data.filter(item => item.restaurant_id === String(restaurantId));
        
        console.log('Filtered Menu Items:', filteredMenuItems); // Log filtered items
        
        setMenuItems(filteredMenuItems); // Set filtered menu items to state
        setLoading(false); // Stop loading
      } catch (error) {
        setError('Error fetching menu data'); // Handle error
        setLoading(false); // Stop loading
      }
    };

    fetchMenuItems(); // Fetch the menu items when component mounts

  }, [restaurantId]); // Re-fetch if restaurantId changes

  // Show loading message while fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if an error occurs
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="menu-container">
        {menuItems.map((menu) => (
          <div key={menu.id} className="menu-item">
            <img src={menu.image} alt={menu.item_name} />
            <h3>{menu.item_name}</h3>
            <p>₹ {menu.price}</p>
            <button onClick={() => addToCart(menu)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
