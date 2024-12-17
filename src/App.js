import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import CartPage from './components/Cartpage';
import MenuPage from './components/MenuPage';
import AddRestaurant from './components/AddResturant';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/register';
import Header from './components/Header';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import AddMenu from './components/addmenupage';
import OrderHistoryPage from './components/orderhistory';

function App() {
  const [username, setUsername] = useState('');
  const location = useLocation(); // You can use this if you need to track the current page or location.

  return (
    <CartProvider>
      <div>
        {/* Pass username to Header */}
        <Header username={username} />

        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
          <Route path="/menu/:restaurantId" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage setUsername={setUsername} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/addmenu" element={<AddMenu />} />
          <Route path='/ordershistory' element={<OrderHistoryPage/>}/>
       </Routes>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
