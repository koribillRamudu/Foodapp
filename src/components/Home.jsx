import RestaurantsContainer from "./RestaurantsList";
import MenuList from "./Menu";
import './Home.css';
import React, { useState } from 'react';
import FoodList from "./FoodList";
function Home(){
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
    let restaurants=[{'id':1,'title':'Bidri',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=600&h=-1&s=1',
        'location':'Hyderabad',
        'rating':'4.5'
    },
    {'id':2,'title':'YiJing',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/0e/c2/e7/yi-jing.jpg?w=600&h=400&s=1',
        'location':'Hyderabad',
        'rating':'4.7'
    },
    {'id':3,'title':'Mekong',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5d/c3/c6/ambiance.jpg?w=600&h=-1&s=1',
        'location':'Hyderabad',
        'rating':'4.3'
    },
    {'id':4,'title':'Hard Rock',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/44/91/ed/hrc-stage.jpg?w=600&h=400&s=1',
        'location':'Hyderabad',
        'rating':'4.4'
    },
    {'id':5,'title':'Deccan Pavilion',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/09/b5/d7/caption.jpg?w=600&h=400&s=1',
        'location':'Hyderabad',
        'rating':'4.3'
    },
    {'id':6,'title':'Altitude-Lounge&Bar',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/57/59/altitude-rooftop-outside.jpg?w=600&h=-1&s=1',
        'location':'Hyderabad',
        'rating':'4.9'
    },
    {'id':7,'title':'Mist The Poolside Kitchen',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/57/59/altitude-rooftop-outside.jpg?w=600&h=-1&s=1',
        'location':'Hyderabad',
        'rating':'4.5'
    },
    {'id':8,'title':'Kebabs & Kurries',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ec/15/76/k-k.jpg?w=600&h=400&s=1',
        'location':'Hyderabad',
        'rating':'4.1'
    },
    {'id':9,'title':' Jewel of Nizam – The Minar',
        'image':'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/30/8d/8c/jewel-of-nizam-the-minar.jpg?w=600&h=400&s=1',
        'location':'Hyderabad',
        'rating':'5.0'
    },
    ];
    let menus = [
        // Restaurant 1
        {
            'id': 1,
            'restaurant_id': 1,
            'item_name': 'Pepperoni Pizza',
            'category': 'Non-Veg',
            'image': 'https://example.com/pepperoni_pizza.jpg',
            'price': '8.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 2,
            'restaurant_id': 1,
            'item_name': 'Margherita Pizza',
            'category': 'Veg',
            'image': 'https://example.com/margherita.jpg',
            'price': '7.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 3,
            'restaurant_id': 1,
            'item_name': 'Garlic Bread',
            'category': 'Others',
            'image': 'https://example.com/garlic_bread.jpg',
            'price': '4.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 4,
            'restaurant_id': 1,
            'item_name': 'Chicken Wings',
            'category': 'Non-Veg',
            'image': 'https://example.com/chicken_wings.jpg',
            'price': '9.99',
            'add_to_cart': 'Add to Cart'
        },
    
        // Restaurant 2
        {
            'id': 5,
            'restaurant_id': 2,
            'item_name': 'Cheese Pizza',
            'category': 'Veg',
            'image': 'https://example.com/cheese.jpg',
            'price': '9.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 6,
            'restaurant_id': 2,
            'item_name': 'Pepperoni Pizza',
            'category': 'Non-Veg',
            'image': 'https://example.com/pepperoni_pizza.jpg',
            'price': '10.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 7,
            'restaurant_id': 2,
            'item_name': 'Garlic Knots',
            'category': 'Others',
            'image': 'https://example.com/garlic_knots.jpg',
            'price': '5.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 8,
            'restaurant_id': 2,
            'item_name': 'Chicken Parmigiana',
            'category': 'Non-Veg',
            'image': 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
            'price': '12.99',
            'add_to_cart': 'Add to Cart'
        },
    
        // Restaurant 3
        {
            'id': 9,
            'restaurant_id': 3,
            'item_name': 'Cheeseburger',
            'category': 'Non-Veg',
            'image': 'https://example.com/cheeseburger.jpg',
            'price': '8.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 10,
            'restaurant_id': 3,
            'item_name': 'Veggie Burger',
            'category': 'Veg',
            'image': 'https://example.com/veggie_burger.jpg',
            'price': '7.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 11,
            'restaurant_id': 3,
            'item_name': 'French Fries',
            'category': 'Others',
            'image': 'https://example.com/french_fries.jpg',
            'price': '3.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 12,
            'restaurant_id': 3,
            'item_name': 'Chicken Nuggets',
            'category': 'Non-Veg',
            'image': 'https://example.com/chicken_nuggets.jpg',
            'price': '6.99',
            'add_to_cart': 'Add to Cart'
        },
    
        // Restaurant 4
        {
            'id': 13,
            'restaurant_id': 4,
            'item_name': 'Veggie Burger',
            'category': 'Veg',
            'image': 'https://example.com/veggie_burger.jpg',
            'price': '7.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 14,
            'restaurant_id': 4,
            'item_name': 'BBQ Chicken Pizza',
            'category': 'Non-Veg',
            'image': 'https://example.com/bbq_chicken_pizza.jpg',
            'price': '11.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 15,
            'restaurant_id': 4,
            'item_name': 'Onion Rings',
            'category': 'Others',
            'image': 'https://example.com/onion_rings.jpg',
            'price': '5.49',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 16,
            'restaurant_id': 4,
            'item_name': 'Chicken Caesar Salad',
            'category': 'Non-Veg',
            'image': 'https://example.com/chicken_caesar_salad.jpg',
            'price': '9.49',
            'add_to_cart': 'Add to Cart'
        },
    
        // Restaurant 5
        {
            'id': 17,
            'restaurant_id': 5,
            'item_name': 'California Roll',
            'category': 'Others',
            'image': 'https://example.com/california_roll.jpg',
            'price': '12.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 18,
            'restaurant_id': 5,
            'item_name': 'Spicy Tuna Roll',
            'category': 'Non-Veg',
            'image': 'https://example.com/spicy_tuna_roll.jpg',
            'price': '13.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 19,
            'restaurant_id': 5,
            'item_name': 'Vegetable Tempura',
            'category': 'Veg',
            'image': 'https://example.com/vegetable_tempura.jpg',
            'price': '8.49',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 20,
            'restaurant_id': 5,
            'item_name': 'Miso Soup',
            'category': 'Others',
            'image': 'https://example.com/miso_soup.jpg',
            'price': '3.99',
            'add_to_cart': 'Add to Cart'
        },
    
        // Restaurant 6
        {
            'id': 21,
            'restaurant_id': 6,
            'item_name': 'Spicy Tuna Roll',
            'category': 'Non-Veg',
            'image': 'https://example.com/spicy_tuna_roll.jpg',
            'price': '13.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 22,
            'restaurant_id': 6,
            'item_name': 'Dragon Roll',
            'category': 'Non-Veg',
            'image': 'https://example.com/dragon_roll.jpg',
            'price': '14.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 23,
            'restaurant_id': 6,
            'item_name': 'Edamame',
            'category': 'Veg',
            'image': 'https://example.com/edamame.jpg',
            'price': '4.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 24,
            'restaurant_id': 6,
            'item_name': 'Seaweed Salad',
            'category': 'Others',
            'image': 'https://example.com/seaweed_salad.jpg',
            'price': '5.99',
            'add_to_cart': 'Add to Cart'
        },
    
        // Restaurant 7
        {
            'id': 25,
            'restaurant_id': 7,
            'item_name': 'Chicken Taco',
            'category': 'Non-Veg',
            'image': 'https://example.com/chicken_taco.jpg',
            'price': '3.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 26,
            'restaurant_id': 7,
            'item_name': 'Beef Taco',
            'category': 'Non-Veg',
            'image': 'https://example.com/beef_taco.jpg',
            'price': '4.99',
            'add_to_cart': 'Add to Cart'
        },
        {
            'id': 27,
            'restaurant_id': 7,
            'item_name': 'Veggie Burrito',
            'category': 'Veg',
            'image': 'https://example.com/veggie_burrito.jpg',
            'price': '5.99',
            'add_to_cart': 'Add to Cart'
        },];
    
    
    const selectedMenu = menus.filter(menu => menu.restaurant_id === selectedRestaurantId);
    return (
        <div>
            <FoodList/>
            <br></br>
            <br></br>
            <br></br>
            <h1>Restaurants Below</h1>
            <br></br>
            <div className="restaurant-container">
                {restaurants.map((restaurant) => (
                    <RestaurantsContainer
                        key={restaurant.id}
                        title={restaurant.title}
                        image={restaurant.image}
                        location={restaurant.location}
                        rating={restaurant.rating}
                        onClick={() => setSelectedRestaurantId(restaurant.id)}
                    />
                ))}
            </div>
            {selectedRestaurantId && (
                <div className="menu-container">
                    <h2>Menu</h2>
                {selectedMenu.map((menu) => (
                <MenuList
                    key={menu.id}
                    item_name={menu.item_name}
                    image={menu.image}
                    price={menu.price}
                />
            ))}
    </div>
)}
    </div>
    );
}
export default Home