import './About.css';
import logo from './logo1-removebg-preview.png';

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Yummy Tummy</h1>
                <p>
                    Welcome to Yummy Tummy! We are dedicated to delivering delicious food from your favorite restaurants right to your doorstep.
                    Whether you're craving a quick snack or a full-course meal, Yummy Tummy ensures fast and reliable service.
                </p>
                <p>
                    Our mission is to make food delivery easy, convenient, and accessible to everyone, anytime, anywhere.
                    Experience a world of flavors with just a few clicks!
                </p>
            </div>
            <div className="about-image">
                <img src={logo} alt="Yummy Tummy Delivery" />
            </div>
        </div>
    );
}

export default About;
