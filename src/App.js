import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cartpage';
import MenuPage from './components/MenuPage';
import AddRestaurant from './components/addResturant';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/addrestaurant' element={<AddRestaurant/>}/>
        <Route path="/menu/:restaurantId" element={<MenuPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
