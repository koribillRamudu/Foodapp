import React, { useState, useEffect } from 'react';
import RestaurantsContainer from './RestaurantsList';
import FoodList from './FoodList';
import './Home.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [restaurants, setRestaurants] = useState([]);  // Initialize restaurants state
  const [loading, setLoading] = useState(true);  // Track loading state

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/restaurants'); // Adjust the URL if needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse the JSON data
        console.log('Fetched restaurants:', data); // Check the fetched data in console
        setRestaurants(data); // Store the data in state
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchRestaurants();

    // Check if there is a new restaurant passed through location state
    if (location.state && location.state.newRestaurant) {
      setRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        { ...location.state.newRestaurant, id: prevRestaurants.length + 1 },
      ]);
    }
  }, [location.state]);

  const handleViewMenu = (restaurantId) => {
    navigate(`/menu/${restaurantId}`);
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
          <p>Loading restaurants...</p>  // Show loading message while fetching data
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantsContainer
              key={restaurant.id}
              title={restaurant.title}
              image={restaurant.image}
              location={restaurant.location}
              rating={restaurant.rating}
              onClick={() => handleViewMenu(restaurant.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
