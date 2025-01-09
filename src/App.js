import React, { useState } from 'react';
import CakeList from './components/CakeList';
import Cart from './components/Cart';


const App = () => {
  const [cart, setCart] = useState([]);

  const cakes = [
    { id: 1, name: 'Chocolate Cake', price: 10 },
    { id: 2, name: 'Vanilla Cake', price: 8 },
    { id: 3, name: 'Red Velvet Cake', price: 12 },
  ];

  const addToCart = (cake) => {
    setCart([...cart, cake]);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Cake Shop</h1>
      <CakeList cakes={cakes} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
