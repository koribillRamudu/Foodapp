import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './RegisterPage.css'; // Import your custom styles

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission refresh

    // Basic validation
    if (!username || !email || !password || !phoneNumber || !address) {
      setError('Please fill in all fields.');
      return;
    }

    // Basic phone number validation (this can be more specific based on your use case)
    const phonePattern = /^[0-9]{10}$/; // Example for 10-digit phone number
    if (!phonePattern.test(phoneNumber)) {
      setError('Please enter a valid phone number.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
        phoneNumber,
        address,
      });

      // On success, show success message
      setSuccess(response.data.message);
      setError(''); // Clear error message on success

      // Optionally, clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setAddress('');

      // Redirect to the login page after successful registration
      setTimeout(() => {
        navigate('/login'); // Redirect to the login page
      }, 2000); // Redirect after 2 seconds to show success message
    } catch (err) {
      console.error('Error during registration:', err);
      setError('Error during registration. Please try again.');
      setSuccess(''); // Clear success message on error
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register for Yummy Tummy</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <textarea
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
