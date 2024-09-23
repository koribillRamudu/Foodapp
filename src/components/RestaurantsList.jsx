import './RestaurantsList.css';

function RestaurantsContainer({ title, image, location, rating,onClick }) {
    return (
        <div className="restaurant-card">
            <img src={image} alt={title} className="restaurant-image" />
            <h1>{title}</h1>
            <h2>{location}</h2>
            <h3>Rating: {rating}</h3>
            <button onClick={onClick}>View Menu</button>
        </div>
    );
}

export default RestaurantsContainer;
