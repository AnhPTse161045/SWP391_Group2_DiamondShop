// contexts/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    setCart([...cart, product]);
  };
  

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.cost, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalCost }}>
      {children}
    </CartContext.Provider>
  );
};
