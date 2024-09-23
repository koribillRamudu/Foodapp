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
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Cart</a>
                    <p>Hi,user</p>
                </div>
            </nav>
            </header> 
        </div>
    );
}
export default Header;