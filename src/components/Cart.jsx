import React from 'react';
import './Cart.css';

function Cart() {
    const cartItems = [
        {
            id: 1,
            item_name: 'Pepperoni Pizza',
            quantity: 2,
            price: 250,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEB07PyepH39LJhRbqV7VvsX7YDWarf3F3g&s',
        },
        {
            id: 2,
            item_name: 'Cheeseburger',
            quantity: 1,
            price: 150,
            image: 'https://image.similarpng.com/very-thumbnail/2022/02/Delicious-cheese-burger-on-transparent-background-PNG.png',
        },
        {
            id: 3,
            item_name: 'Veggie Burrito',
            quantity: 3,
            price: 180,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FJoKWOceaVVrIs0xwR_e5sqTUAfwE64Xlg&s',
        },
    ];

    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        totalPrice += cartItems[i].price * cartItems[i].quantity;
    }


    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            <div className="cart-items-container">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.item_name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h2>{item.item_name}</h2>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price:  ₹{item.price.toFixed(2)}</p>
                        </div>
                        <div className="cart-item-total">
                            <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h2>Total Price: ₹{totalPrice.toFixed(2)}</h2>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
