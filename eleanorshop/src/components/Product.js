// components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Product.css'; // Create this CSS file as needed

function Product({ id, image, name, cost }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2 className="product-name">{name}</h2>
      <p className="product-cost">${cost}</p>
      <Link to={`/product/${id}`} className="product-details-link">View Details</Link> {/* Ensure the link is correctly formed */}
    </div>
  );
}

export default Product;
