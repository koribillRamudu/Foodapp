import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUserRole = () => {} }) => { // Default fallback for setUserRole
  const [username, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!username || !password) {
        setError('Please fill in all fields.');
        return;
      }

      const response = await axios.get('http://localhost:5000/api/auth/user');
      const users = response.data;

      const user = users.find((u) => u.username === username && u.password === password);

      if (!user) {
        setError('Invalid username or password.');
        return;
      }

      setUserRole(user.role);
      localStorage.setItem('user', JSON.stringify(user));

      if (user.role === 'admin') {
        navigate('/'); // Navigate to homepage for admin
      } else if (user.role === 'user') {
        navigate('/'); // Navigate elsewhere for user
      } else {
        setError('Access denied.');
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Yummy Tummy</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setLocalUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href="/register" className="linkcontainer">Register</a>
          {error && <p className="error-message">{error}</p>}
          <br />
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
