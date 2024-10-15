import React from 'react';
import CartList from './CartList';

function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((menu) => (
          <CartList
            key={menu.id}
            item_name={menu.item_name}
            image={menu.image}
            price={menu.price}
          />
        ))
      )}
    </div>
  );
}

export default Cart;
