import React from 'react';

const CakeList = ({ cakes, addToCart }) => {
  return (
    <div>
      <h2>Available Cakes</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cakes.map((cake) => (
          <li key={cake.id} style={{ margin: '10px 0' }}>
            <strong>{cake.name}</strong> - ${cake.price}
            <button
              onClick={() => addToCart(cake)}
              style={{
                marginLeft: '10px',
                padding: '5px 10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CakeList;
