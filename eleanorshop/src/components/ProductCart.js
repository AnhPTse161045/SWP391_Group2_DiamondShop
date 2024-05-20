import React from 'react';
import './styles/ShopPage.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <div className="product-info">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  </div>
);

export default ProductCard;
