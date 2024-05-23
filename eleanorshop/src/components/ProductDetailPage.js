// components/ProductDetailPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './context/CartContext.js';
import  './styles/ProductDetailPage.css';

const products = [
  { id: 1, image: './assets/ring1.jpg', name: 'Diamond Wedding Ring', cost: 1200, description: 'A beautiful diamond wedding ring.', material: 'Diamond', chiefOfficer: 'John Doe', additionalPills: 'N/A', productCode: 'DR001' },
  { id: 2, image: './assets/ring2.jpg', name: 'Gold Wedding Band', cost: 800, description: 'A classic gold wedding band.', material: 'Gold', chiefOfficer: 'Jane Smith', additionalPills: 'N/A', productCode: 'GW002' },
  // Add more products as needed
];

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Cost: ${product.cost}</p>
      <p>{product.description}</p>
      <p>Material: {product.material}</p>
      <p>Chief Officer: {product.chiefOfficer}</p>
      <p>Additional Pills: {product.additionalPills}</p>
      <p>Product Code: {product.productCode}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
      

    </div>
  );
}

export default ProductDetailPage;
