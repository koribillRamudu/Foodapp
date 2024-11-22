import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginPage.css'; // Importing the CSS
import { useNavigate } from 'react-router-dom';

const sampleUsers = [
  { username: 'sekhar', password: '123456' },
  { username: 'jane_doe', password: 'abcdef' },
  // Add more sample users as needed
];

const LoginPage = ({ setUsername }) => { // Accept setUsername as a prop
  const [username, setLocalUsername] = useState(''); // Change to setLocalUsername
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = sampleUsers.find((u) => u.username === username && u.password === password);

    if (user) {
      setUsername(username); // Set the username in the parent component
      navigate('/'); // Navigate to home page after successful login
    } else {
      setError('Invalid username or password');
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
              onChange={(e) => setLocalUsername(e.target.value)} // Use local state here
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
