import './RestaurantsList.css';

function RestaurantsContainer({ title, image, location, rating, onClick }) {
  return (
    <div className="restaurant-card">
      <img src={image} alt={title} className="restaurant-image" />
      <div className="restaurant-info">
        <h1 className="restaurant-title">{title}</h1>
        <h2 className="restaurant-location">{location}</h2>
        <h3 className="restaurant-rating">Rating: {rating}</h3>
        <button onClick={onClick} className="view-menu-button">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default RestaurantsContainer;
