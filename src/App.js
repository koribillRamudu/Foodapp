import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import CartPage from './components/Cartpage';
import MenuPage from './components/MenuPage';
import AddRestaurant from './components/AddResturant';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext'; // Import CartProvider

function App() {
  const [username, setUsername] = useState('');
  const location = useLocation(); // Get current location

  return (
    <CartProvider> {/* Wrap your app in CartProvider */}
      <div>
        {location.pathname !== '/login' && <Header username={username} />}
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
          <Route path="/menu/:restaurantId" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage setUsername={setUsername} />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
