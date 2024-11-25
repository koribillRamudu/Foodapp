import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginPage.css'; // Import CSS for styling
import axios from 'axios'; // Axios for API calls
import bcrypt from 'bcryptjs'; // For password hashing
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUsername }) => {
  const [username, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission refresh

    try {
      // Validate inputs
      if (!username || !password) {
        setError('Please fill in all fields.');
        return;
      }

      // Fetch users from the backend
      const response = await axios.get('http://localhost:5000/api/auth/login'); // Adjust endpoint if needed
      const users = response.data;

      // Find the user by username
      const user = users.find((u) => u.username === username);

      if (!user) {
        setError('Invalid username or password');
        return;
      }

      // Ensure user has a password field
      if (!user.password) {
        setError('Invalid user data: missing password.');
        console.error('Error: User object does not have a password field.');
        return;
      }

      // Compare the entered password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        console.log(user.password)
        setError('Invalid username or password');
        return;
      }

      // Successful login: Set the username in the parent and navigate to home
      setUsername(user.username);
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
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
            <a href='/register' className='linkcontainer'>Register</a>
          {error && <p className="error-message">{error}</p>}
          <br></br>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
