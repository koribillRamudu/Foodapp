import React from 'react';
import { useParams } from 'react-router-dom';
import MenuList from './Menu';

function MenuPage(){
    const { restaurantId } = useParams();
    let menus = [
        {
            'id': 1,
            'restaurant_id': 1,
            'item_name': 'Pepperoni Pizza',
            'category': 'Non-Veg',
            'image': 'https://example.com/pepperoni_pizza.jpg',
            'price': '8.99',
        },
        {
            'id': 2,
            'restaurant_id': 1,
            'item_name': 'Margherita Pizza',
            'category': 'Veg',
            'image': 'https://example.com/margherita.jpg',
            'price': '7.99',
        },
        {
            'id': 3,
            'restaurant_id': 1,
            'item_name': 'Garlic Bread',
            'category': 'Others',
            'image': 'https://example.com/garlic_bread.jpg',
            'price': '4.99',
        },
        {
            'id': 4,
            'restaurant_id': 1,
            'item_name': 'Chicken Wings',
            'category': 'Non-Veg',
            'image': 'https://example.com/chicken_wings.jpg',
            'price': '9.99',
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
        const selectedMenu=menus.filter(menu=>menu.restaurant_id===parseInt(restaurantId))
    return (
        <div>
      <div className="menu-container">
        {selectedMenu.map((menu) => (
          <MenuList
            key={menu.id}
            item_name={menu.item_name}
            image={menu.image}
            price={menu.price}
          />
        ))}
      </div>
        </div>
    );
}

export default MenuPage;