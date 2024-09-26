import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import MenuList from './components/Menu';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/menu:id' element={<MenuList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
