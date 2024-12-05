import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function AddMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const [newMenuItem, setNewMenuItem] = useState({
    id: '', // Include 'id' for the Menu model
    restaurant_id: '',
    item_name: '',
    category: '',
    image: '',
    price: '',
  });

  useEffect(() => {
    // If editing, populate the menu item details from location state
    if (location.state?.menuItem) {
      setNewMenuItem(location.state.menuItem);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewMenuItem((prev) => ({
      ...prev,
      [name]: name === 'price' ? Math.max(Number(value), 0) : value, // Ensure price is not negative
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (location.state?.menuItem) {
        // Update menu item if editing
        await axios.put(`http://localhost:5000/api/menu/${newMenuItem._id}`, newMenuItem);
      } else {
        // Add new menu item
        await axios.post('http://localhost:5000/api/menu/itemsadd', newMenuItem);
      }

      // Redirect to the menu page
      navigate('/');
    } catch (error) {
      console.error('Error saving menu item:', error.message);
    }
  };

  return (
    <div>
      <h2>{location.state?.menuItem ? 'Edit Menu Item' : 'Add New Menu Item'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={newMenuItem.id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Restaurant ID:
          <input
            type="text"
            name="restaurant_id"
            value={newMenuItem.restaurant_id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Item Name:
          <input
            type="text"
            name="item_name"
            value={newMenuItem.item_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={newMenuItem.category}
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
            value={newMenuItem.image}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={newMenuItem.price}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
        <br />
        <button type="submit">{location.state?.menuItem ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default AddMenu;
