import './Header.css';
import logo from './logo1-removebg-preview.png';
import { Link } from 'react-router-dom'; // Import Link for routing
import { useContext } from 'react'; // Import useContext for accessing CartContext
import { useCart } from '../context/CartContext';
import OrderHistoryPage from './orderhistory';

function Header({ username }) {
    const { cartItems } = useCart(); // Access cart items from the context

    return (
        <div>
            <header>
                <nav>
                    <div className="logo-container">
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/cart">Go to Cart</Link>
                        <Link to="/ordershistory">Your orders</Link>
                        {username && <p id="user">Welcome, {username}!</p>}
                        <a href="/login">Logout</a>
                    </div>
                </nav>
            </header>

            <br />
            <br />
        </div>
    );
}

export default Header;
