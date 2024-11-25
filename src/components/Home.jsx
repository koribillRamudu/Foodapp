import React, { useState, useEffect } from 'react';
import RestaurantsContainer from './RestaurantsList'; // Adjust this import based on your folder structure
import FoodList from './FoodList'; // Adjust this import based on your folder structure
import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]); // Initialize restaurants state
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/restaurants'); // Fetch using Axios
        console.log('Fetched restaurants:', response.data); // Log fetched data
        setRestaurants(response.data); // Store fetched restaurants in state
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error('Error fetching restaurants:', error.message); // Log error message
        setError('Failed to fetch restaurants. Please try again later.');
        setLoading(false); // Set loading to false
      }
    };

    fetchRestaurants();
  }, []); // Only fetch restaurants on initial render

  const handleViewMenu = (restaurantId) => {
    navigate(`/menu/${restaurantId}`); // Navigate to menu page with the restaurant ID
  };

  return (
    <div>
      <br />
      <FoodList />
      <br />
      <br />
      <h1>Restaurants Below</h1>
      <br />
      <div className="restaurant-container">
        {loading ? (
          <p>Loading restaurants...</p> // Show loading message
        ) : error ? (
          <p className="error">{error}</p> // Show error message if there's an error
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantsContainer
              key={restaurant._id} // Use MongoDB _id as the key
              title={restaurant.title}
              image={restaurant.image}
              location={restaurant.location}
              rating={restaurant.rating}
              onClick={() => handleViewMenu(restaurant._id)} // Pass restaurant ID to handleViewMenu
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
