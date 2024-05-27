// components/TestComponent.js
import React, { useContext } from 'react';
import { CartContext } from  './context/CartContext' ;

function TestComponent() {
  const { addToCart, cart } = useContext(CartContext);

  const testProduct = { id: 99, name: 'Test Product', cost: 100 };

  const handleTestAddToCart = () => {
    addToCart(testProduct, 1);
  };

  return (
    <div>
      <button onClick={handleTestAddToCart}>Add Test Product to Cart</button>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}

export default TestComponent;
