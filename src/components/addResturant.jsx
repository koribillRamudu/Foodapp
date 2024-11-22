import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function AddRestaurant() {
  const navigate = useNavigate();
  const location = useLocation();

  const [newRestaurant, setNewRestaurant] = useState({
    title: '',
    image: '',
    location: '',
    rating: '',
  });

  useEffect(() => {
    // If editing, set the restaurant data from the location state
    if (location.state?.restaurant) {
      setNewRestaurant(location.state.restaurant);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRestaurant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass restaurant data to Home via navigate state
    navigate('/', { state: { newRestaurant, isEdit: !!location.state?.restaurant } });
  };

  return (
    <div>
      <h2>{location.state?.restaurant ? 'Edit Restaurant' : 'Add New Restaurant'}</h2>
      <form onSubmit={handleSubmit}>
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
          Rating:
          <input
            type="text"
            name="rating"
            value={newRestaurant.rating}
            onChange={handleChange}
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
