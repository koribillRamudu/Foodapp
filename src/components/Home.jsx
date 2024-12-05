import React, { useState, useEffect } from 'react';
import RestaurantsContainer from './RestaurantsList';
import FoodList from './FoodList';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedLocation, setUpdatedLocation] = useState('');
  const [updatedRating, setUpdatedRating] = useState('');
  const [updatedImage, setUpdatedImage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/restaurants?page=${page}`);
        const newRestaurants = response.data;

        if (newRestaurants.length === 0) {
          setHasMore(false);
        } else {
          setRestaurants((prevRestaurants) => [
            ...new Map([...prevRestaurants, ...newRestaurants].map((item) => [item._id, item])).values(),
          ]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurants:', error.message);
        setError('Failed to fetch restaurants. Please try again later.');
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [page]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleViewMenu = (restaurantId) => {
    navigate(`/menu/${restaurantId}`);
  };

  const handleEditClick = (restaurant) => {
    setIsEditing(true);
    setCurrentRestaurant(restaurant);
    setUpdatedTitle(restaurant.title);
    setUpdatedLocation(restaurant.location);
    setUpdatedRating(restaurant.rating);
    setUpdatedImage(restaurant.image);
  };

  const handleUpdateRestaurant = async (e) => {
    e.preventDefault();
    try {
      const updatedRestaurant = {
        title: updatedTitle,
        location: updatedLocation,
        rating: updatedRating,
        image: updatedImage,
      };

      await axios.put(`http://localhost:5000/api/restaurants/${currentRestaurant._id}`, updatedRestaurant);

      setRestaurants((restaurants.map((restaurant) =>
        restaurant._id === currentRestaurant._id ? { ...restaurant, ...updatedRestaurant } : restaurant
      )));
      setIsEditing(false);
      setCurrentRestaurant(null);
    } catch (error) {
      console.error('Error updating restaurant:', error);
      setError('Failed to update restaurant. Please try again later.');
    }
  };

  const handleDeleteRestaurant = async (restaurantId) => {
    try {
      await axios.delete(`http://localhost:5000/api/restaurant/delete/${restaurantId}`);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((restaurant) => restaurant._id !== restaurantId)
      );
    } catch (error) {
      console.error('Error deleting restaurant:', error);
      setError('Failed to delete restaurant. Please try again later.');
    }
  };

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollHeight - scrollTop === clientHeight && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="home-container" onScroll={handleScroll}>
      <br />
      <FoodList />
      <br />
      <br />
      <h1>Restaurants Below</h1>
      <br />
      <div className="restaurant-container">
        {loading && page === 1 ? (
          <p>Loading restaurants...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          restaurants.map((restaurant) => (
            <div key={restaurant._id} className="restaurant-card">
              <RestaurantsContainer
                title={restaurant.title}
                image={restaurant.image}
                location={restaurant.location}
                rating={restaurant.rating}
                onClick={() => handleViewMenu(restaurant._id)}
              />
              {user && user.role === 'admin' && (
                <>
                  <button onClick={() => handleEditClick(restaurant)} className="edit-button">Edit</button>
                  <button onClick={() => handleDeleteRestaurant(restaurant._id)} className="delete-button">Delete</button>
                </>
              )}
            </div>
          ))
        )}
      </div>
      {loading && page > 1 && <p>Loading more restaurants...</p>}
      {!hasMore && <p>No more restaurants to load.</p>}

      {isEditing && currentRestaurant && (
        <div className="modal-overlay">
          <div className="edit-form">
            <h2>Edit Restaurant</h2>
            <form onSubmit={handleUpdateRestaurant}>
              <label>Title</label>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <label>Location</label>
              <input
                type="text"
                value={updatedLocation}
                onChange={(e) => setUpdatedLocation(e.target.value)}
              />
              <label>Rating</label>
              <input
                type="text"
                value={updatedRating}
                onChange={(e) => setUpdatedRating(e.target.value)}
              />
              <label>Image URL</label>
              <input
                type="text"
                value={updatedImage}
                onChange={(e) => setUpdatedImage(e.target.value)}
              />
              <button type="submit" className="update-btn">Update</button>
              <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
