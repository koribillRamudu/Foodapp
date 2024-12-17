import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Menu.css';
import { CartContext } from '../context/CartContext';

function MenuPage() {
  const { addToCart } = useContext(CartContext);
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [updatedItem, setUpdatedItem] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/menu/menuitems');
        const filteredMenuItems = response.data.filter(item => item.restaurant_id === String(restaurantId));
        setMenuItems(filteredMenuItems);
        setLoading(false);
      } catch (error) {
        setError('Error fetching menu data');
        setLoading(false);
      }
    };

    fetchMenuItems();

    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, [restaurantId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleEditClick = (menuItem) => {
    setEditingItem(menuItem);
    setUpdatedItem(menuItem);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateClick = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/menu/${editingItem._id}`, updatedItem);
      setMenuItems((prev) =>
        prev.map((item) => (item._id === editingItem._id ? { ...item, ...updatedItem } : item))
      );
      setEditingItem(null);
    } catch (error) {
      setError('Error updating menu item');
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      setMenuItems((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      setError('Error deleting menu item');
    }
  };

  const renderEditForm = () => {
    if (!editingItem) return null;

    return (
      <>
        <div className="modal-overlay" onClick={() => setEditingItem(null)} />
        <div className="edit-form">
          <h3>Edit Menu Item</h3>
          <label>
            Item Name:
            <input
              type="text"
              name="item_name"
              value={updatedItem.item_name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={updatedItem.category}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={updatedItem.image}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={updatedItem.price}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleUpdateClick}>Update Item</button>
          <button onClick={() => setEditingItem(null)}>Cancel</button>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="menu-container">
        {menuItems.map((menu) => (
          <div key={menu._id} className="menu-item">
            <img src={menu.image} alt={menu.item_name} />
            <h3>{menu.item_name}</h3>
            <p>₹ {menu.price}</p>
            <button onClick={() => addToCart(menu)}>Add to Cart</button>
            {user && user.role === 'admin' && (
              <>
                <button onClick={() => handleEditClick(menu)}>Edit</button>
                <button onClick={() => handleDeleteClick(menu._id)} id="delete">Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
      {renderEditForm()}
    </div>
  );
}

export default MenuPage;
