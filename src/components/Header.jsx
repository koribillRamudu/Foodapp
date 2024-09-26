import './Header.css';
import logo from './logo1-removebg-preview.png';
function Header(){
    return (
        <div>
           <header>
           <nav>
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/cart">Cart</a>
                    <p id='user'>Hi,user</p>
                </div>
            </nav>
            </header> 
            <br></br>
            <br></br>
        </div>
    );
}
export default Header;