// components/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import     './styles/Cart.css'   ; // Create this CSS file as needed

function Cart() {
  const { cart, removeFromCart, getTotalCost } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="cart-page"><h1>Your cart is empty</h1></div>;
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>Cost: ${item.cost}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total Cost: ${getTotalCost()}</h2>
      </div>
    </div>
  );
}

export default Cart;
