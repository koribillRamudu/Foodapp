import React, { useState, useEffect } from 'react';
import RestaurantsContainer from './RestaurantsList';
import FoodList from './FoodList';
import './Home.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [restaurants, setRestaurants] = useState([
    { id: 1, title: 'Bidri', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=600&h=-1&s=1', location: 'Hyderabad', rating: '4.5' },
    { id: 2, title: 'YiJing', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/0e/c2/e7/yi-jing.jpg?w=600&h=400&s=1', location: 'Hyderabad', rating: '4.7' },
    { id: 3, title: 'Mekong', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5d/c3/c6/ambiance.jpg?w=600&h=-1&s=1', location: 'Hyderabad', rating: '4.3' },
    { id: 4, title: 'Hard Rock', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/44/91/ed/hrc-stage.jpg?w=600&h=400&s=1', location: 'Hyderabad', rating: '4.4' },
    { id: 5, title: 'Deccan Pavilion', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/09/b5/d7/caption.jpg?w=600&h=400&s=1', location: 'Hyderabad', rating: '4.3' },
    { id: 6, title: 'Altitude-Lounge&Bar', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/57/59/altitude-rooftop-outside.jpg?w=600&h=-1&s=1', location: 'Hyderabad', rating: '4.9' },
    { id: 7, title: 'Mist The Poolside Kitchen', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/57/59/altitude-rooftop-outside.jpg?w=600&h=-1&s=1', location: 'Hyderabad', rating: '4.5' },
    { id: 8, title: 'Kebabs & Kurries', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ec/15/76/k-k.jpg?w=600&h=400&s=1', location: 'Hyderabad', rating: '4.1' },
    { id: 9, title: 'Jewel of Nizam – The Minar', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/30/8d/8c/jewel-of-nizam-the-minar.jpg?w=600&h=400&s=1', location: 'Hyderabad', rating: '5.0' }
    //... other restaurants
  ]);

  
  useEffect(() => {
    if (location.state && location.state.newRestaurant) {
      setRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        { ...location.state.newRestaurant, id: prevRestaurants.length + 1 },
      ]);
    }
  }, [location.state]);

  const handleViewMenu = (restaurantId) => {
    navigate(`/menu/${restaurantId}`);
  };

  return (
    <div>
      <br></br>
        <FoodList/>
        <br/>
        <br/>
      <h1>Restaurants Below</h1>
      <br />
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantsContainer
            key={restaurant.id}
            title={restaurant.title}
            image={restaurant.image}
            location={restaurant.location}
            rating={restaurant.rating}
            onClick={() => handleViewMenu(restaurant.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;