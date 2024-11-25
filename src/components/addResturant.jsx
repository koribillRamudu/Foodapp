import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function AddRestaurant() {
  const navigate = useNavigate();
  const location = useLocation();

  const [newRestaurant, setNewRestaurant] = useState({
    id: '', // Include 'id' for the Restaurant model
    title: '',
    image: '',
    location: '',
    rating: '',
  });

  useEffect(() => {
    // If editing, populate the restaurant details from location state
    if (location.state?.restaurant) {
      setNewRestaurant(location.state.restaurant);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Parse and restrict the rating
    setNewRestaurant((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Math.min(Math.max(Number(value), 0), 5) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (location.state?.restaurant) {
        // Update restaurant if editing
        await axios.put(`http://localhost:5000/api/add/${newRestaurant._id}`, newRestaurant);
      } else {
        // Add new restaurant
        await axios.post('http://localhost:5000/api/add', newRestaurant);
      }

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('Error saving restaurant:', error.message);
    }
  };

  return (
    <div>
      <h2>{location.state?.restaurant ? 'Edit Restaurant' : 'Add New Restaurant'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={newRestaurant.id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Restaurant Name:
          <input
            type="text"
            name="title"
            value={newRestaurant.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={newRestaurant.image}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={newRestaurant.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Rating (0-5):
          <input
            type="number"
            name="rating"
            value={newRestaurant.rating}
            onChange={handleChange}
            min="0"
            max="5"
            required
          />
        </label>
        <br />
        <button type="submit">{location.state?.restaurant ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default AddRestaurant;
