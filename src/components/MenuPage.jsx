import React, { useState, useContext } from 'react';
import { useParams} from 'react-router-dom';
import './Menu.css';
import { CartContext } from '../context/CartContext';

function MenuPage() {
    const { addToCart } = useContext(CartContext);
    const { restaurantId } = useParams();
  let menus = [
    {
        'id': 1,
        'restaurant_id': 1,
        'item_name': 'Pepperoni Pizza',
        'category': 'Non-Veg',
        'image': 'https://imgs.search.brave.com/SN-RITruawYcSxNRVw0oya-9gcx2KtbLq40vi4kpQ8k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE1LzQ0LzM1/LzM2MF9GXzgxNTQ0/MzU2OF9zMGI2eTB1/RE1aZnA4Rlk3R3dj/b1NsVDhQZVpwc0JX/Mi5qcGc',
        'price': '159',
    },
    {
        'id': 2,
        'restaurant_id': 1,
        'item_name': 'Margherita Pizza',
        'category': 'Veg',
        'image': '',
        'price': '160',
    },
    {
        'id': 3,
        'restaurant_id': 1,
        'item_name': 'Garlic Bread',
        'category': 'Others',
        'image': 'https://imgs.search.brave.com/xDI_2xIaR9DCNV21HIKvcharZ86rgrK6XZK5Qrj2n0g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTQ3/MDQ2MzkwL3Bob3Rv/L2dhcmxpYy1icmVh/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b0FyTmdrYmpq/UEtsVG9EbkJoTDd4/TndVNF9lSkxQVGFM/YkFsSXV1bkhEWT0',
        'price': '200',
    },
    {
        'id': 4,
        'restaurant_id': 1,
        'item_name': 'Chicken Wings',
        'category': 'Non-Veg',
        'image': 'https://imgs.search.brave.com/r-v5TfDy3pbHbYDnmUu_RyDFL4iXU2YjmAvkjRKwHXg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc4Lzk4/L2RkLzc4OThkZDZk/M2E3NzlkNzhhY2Yz/ZGNhNzRmZThjYjY4/LmpwZw',
        'price': '260',
    },

    // Restaurant 2
    {
        'id': 5,
        'restaurant_id': 2,
        'item_name': 'Cheese Pizza',
        'category': 'Veg',
        'image': 'https://example.com/cheese.jpg',
        'price': '9.99',
    },
    {
        'id': 6,
        'restaurant_id': 2,
        'item_name': 'Pepperoni Pizza',
        'category': 'Non-Veg',
        'image': 'https://example.com/pepperoni_pizza.jpg',
        'price': '10.99',
    },
    {
        'id': 7,
        'restaurant_id': 2,
        'item_name': 'Garlic Knots',
        'category': 'Others',
        'image': 'https://example.com/garlic_knots.jpg',
        'price': '5.99',
    },
    {
        'id': 8,
        'restaurant_id': 2,
        'item_name': 'Chicken Parmigiana',
        'category': 'Non-Veg',
        'image': 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
        'price': '12.99',
    },

    // Restaurant 3
    {
        'id': 9,
        'restaurant_id': 3,
        'item_name': 'Cheeseburger',
        'category': 'Non-Veg',
        'image': 'https://example.com/cheeseburger.jpg',
        'price': '8.99',
    },
    {
        'id': 10,
        'restaurant_id': 3,
        'item_name': 'Veggie Burger',
        'category': 'Veg',
        'image': 'https://example.com/veggie_burger.jpg',
        'price': '7.99',
    },
    {
        'id': 11,
        'restaurant_id': 3,
        'item_name': 'French Fries',
        'category': 'Others',
        'image': 'https://example.com/french_fries.jpg',
        'price': '3.99',
    },
    {
        'id': 12,
        'restaurant_id': 3,
        'item_name': 'Chicken Nuggets',
        'category': 'Non-Veg',
        'image': 'https://example.com/chicken_nuggets.jpg',
        'price': '6.99',
    },

    // Restaurant 4
    {
        'id': 13,
        'restaurant_id': 4,
        'item_name': 'Veggie Burger',
        'category': 'Veg',
        'image': 'https://example.com/veggie_burger.jpg',
        'price': '7.99',
    },
    {
        'id': 14,
        'restaurant_id': 4,
        'item_name': 'BBQ Chicken Pizza',
        'category': 'Non-Veg',
        'image': 'https://example.com/bbq_chicken_pizza.jpg',
        'price': '11.99',
    },
    {
        'id': 15,
        'restaurant_id': 4,
        'item_name': 'Onion Rings',
        'category': 'Others',
        'image': 'https://example.com/onion_rings.jpg',
        'price': '5.49',
    },
    {
        'id': 16,
        'restaurant_id': 4,
        'item_name': 'Chicken Caesar Salad',
        'category': 'Non-Veg',
        'image': 'https://example.com/chicken_caesar_salad.jpg',
        'price': '9.49',
    },

    // Restaurant 5
    {
        'id': 17,
        'restaurant_id': 5,
        'item_name': 'California Roll',
        'category': 'Others',
        'image': 'https://example.com/california_roll.jpg',
        'price': '12.99',
    },
    {
        'id': 18,
        'restaurant_id': 5,
        'item_name': 'Spicy Tuna Roll',
        'category': 'Non-Veg',
        'image': 'https://example.com/spicy_tuna_roll.jpg',
        'price': '13.99',
    },
    {
        'id': 19,
        'restaurant_id': 5,
        'item_name': 'Vegetable Tempura',
        'category': 'Veg',
        'image': 'https://example.com/vegetable_tempura.jpg',
        'price': '8.49',
    },
    {
        'id': 20,
        'restaurant_id': 5,
        'item_name': 'Miso Soup',
        'category': 'Others',
        'image': 'https://example.com/miso_soup.jpg',
        'price': '3.99',
    },

    // Restaurant 6
    {
        'id': 21,
        'restaurant_id': 6,
        'item_name': 'Spicy Tuna Roll',
        'category': 'Non-Veg',
        'image': 'https://example.com/spicy_tuna_roll.jpg',
        'price': '13.99',
    },
    {
        'id': 22,
        'restaurant_id': 6,
        'item_name': 'Dragon Roll',
        'category': 'Non-Veg',
        'image': 'https://example.com/dragon_roll.jpg',
        'price': '14.99',
    },
    {
        'id': 23,
        'restaurant_id': 6,
        'item_name': 'Edamame',
        'category': 'Veg',
        'image': 'https://example.com/edamame.jpg',
        'price': '4.99',
    },
    {
        'id': 24,
        'restaurant_id': 6,
        'item_name': 'Seaweed Salad',
        'category': 'Others',
        'image': 'https://example.com/seaweed_salad.jpg',
        'price': '5.99',
    },

    // Restaurant 7
    {
        'id': 25,
        'restaurant_id': 7,
        'item_name': 'Chicken Taco',
        'category': 'Non-Veg',
        'image': 'https://example.com/chicken_taco.jpg',
        'price': '3.99',
    },
    {
        'id': 26,
        'restaurant_id': 7,
        'item_name': 'Beef Taco',
        'category': 'Non-Veg',
        'image': 'https://example.com/beef_taco.jpg',
        'price': '4.99',
    },
    {
        'id': 27,
        'restaurant_id': 7,
        'item_name': 'Veggie Burrito',
        'category': 'Veg',
        'image': 'https://example.com/veggie_burrito.jpg',
        'price': '5.99',
    },];
    const filteredMenuItems = menus.filter(
        (menu) => menu.restaurant_id === parseInt(restaurantId)
      );
      return (
        <div>
          <div className="menu-container">
            {filteredMenuItems.map((menu) => (
              <div key={menu.id} className="menu-item">
                <img src={menu.image} alt={menu.item_name} />
                <h3>{menu.item_name}</h3>
                <p>र {menu.price}</p>
                <button onClick={() => addToCart(menu)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <br />
        </div>
      );
    }
    
export default MenuPage;
