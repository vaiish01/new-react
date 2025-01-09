import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, cake) => sum + cake.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cart.map((item, index) => (
            <li key={index} style={{ margin: '5px 0' }}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
