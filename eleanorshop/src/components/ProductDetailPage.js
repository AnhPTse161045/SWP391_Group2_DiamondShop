import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import './styles/ProductDetailPage.css';

import necklace from './assets/necklace2.jpg';
import diamond1 from './assets/diamond1.png';
import diamond2 from './assets/diamond2.png';
import diamond3 from './assets/diamond3.png';
import diamond4 from './assets/diamond4.jpg';
import diamond5 from './assets/diamond5.jpg';
import diamond6 from './assets/diamond6.jpeg';
import diamond7 from './assets/diamond7.jpg';
import diamond8 from './assets/diamond8.jpg';
import diamond9 from './assets/diamond9.jpg';
import diamond10 from './assets/diamond10.jpg';
import diamond11 from './assets/diamond12.jpg';


const products = [
  { id: 1, image : necklace, name: 'Diamond Wedding Ring', cost: 1200, description: 'A beautiful diamond wedding ring.', material: 'Diamond', chiefOfficer: 'John Doe', additionalPills: 'N/A', productCode: 'DR001' },
  { id: 2, image: diamond1, name: 'Gold Wedding Band', cost: 800, description: 'A classic gold wedding band.', material: 'Gold', chiefOfficer: 'Jane Smith', additionalPills: 'N/A', productCode: 'GW002' },
  { id: 3, image:diamond2, name: 'Silver Wedding Ring', cost: 900, description: 'An elegant silver wedding ring.', material: 'Silver', chiefOfficer: 'Alice Johnson', additionalPills: 'N/A', productCode: 'SR003' },
  { id: 4, image: diamond3 , name: 'Platinum Wedding Ring', cost: 1500, description: 'A premium platinum wedding ring.', material: 'Platinum', chiefOfficer: 'Bob Brown', additionalPills: 'N/A', productCode: 'PR004' },
  { id: 5, image: diamond4, name: 'Rose Gold Wedding Ring', cost: 1100, description: 'A charming rose gold wedding ring.', material: 'Rose Gold', chiefOfficer: 'Carol White', additionalPills: 'N/A', productCode: 'RGR005' },
  { id: 6, image: diamond5, name: 'Custom Wedding Ring', cost: 2000, description: 'A custom wedding ring designed to your preference.', material: 'Custom', chiefOfficer: 'David Black', additionalPills: 'N/A', productCode: 'CWR006' },
  { id: 7, image: diamond6, name: 'Diamond Wedding Ring', cost: 1200, description: 'A beautiful diamond wedding ring.', material: 'Diamond', chiefOfficer: 'John Doe', additionalPills: 'N/A', productCode: 'DR001' },
  { id: 8, image: diamond7, name: 'Gold Wedding Band', cost: 800, description: 'A classic gold wedding band.', material: 'Gold', chiefOfficer: 'Jane Smith', additionalPills: 'N/A', productCode: 'GW002' },
  { id: 9, image: diamond8, name: 'Silver Wedding Ring', cost: 900, description: 'An elegant silver wedding ring.', material: 'Silver', chiefOfficer: 'Alice Johnson', additionalPills: 'N/A', productCode: 'SR003' },
  { id: 10, image: diamond9 , name: 'Platinum Wedding Ring', cost: 1500, description: 'A premium platinum wedding ring.', material: 'Platinum', chiefOfficer: 'Bob Brown', additionalPills: 'N/A', productCode: 'PR004' },
  { id: 11, image: diamond10, name: 'Rose Gold Wedding Ring', cost: 1100, description: 'A charming rose gold wedding ring.', material: 'Rose Gold', chiefOfficer: 'Carol White', additionalPills: 'N/A', productCode: 'RGR005' },
  { id: 12, image:diamond11, name: 'Custom Wedding Ring', cost: 2000, description: 'A custom wedding ring designed to your preference.', material: 'Custom', chiefOfficer: 'David Black', additionalPills: 'N/A', productCode: 'CWR006' },
  // Add more wedding rings as needed
];

const materials = ['White Gold', 'Yellow Gold', 'Rose Gold', 'Platinum'];
const mainStones = ['Diamond', 'Sapphire', 'Emerald', 'Ruby'];
const subStones = ['None', 'Diamond', 'Sapphire', 'Emerald', 'Ruby'];

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [selectedMainStone, setSelectedMainStone] = useState(mainStones[0]);
  const [selectedSubStone, setSelectedSubStone] = useState(subStones[0]);
  const product = products.find(p => p.id === parseInt(id));

  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  const [giaReportOpen, setGiaReportOpen] = useState(false);
  const [upgradeProgramOpen, setUpgradeProgramOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log('Add to Cart button clicked');
    const selectedProduct = {
      ...product,
      material: selectedMaterial,
      mainStone: selectedMainStone,
      subStone: selectedSubStone,
    };
    console.log('Adding to cart:', selectedProduct, quantity);
    addToCart(selectedProduct, quantity);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <div className="product-rating">
          {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)} ({product.rating} customer reviews)
        </div>
        <p className="product-cost">{product.cost.toLocaleString()} ₫</p>
        <ul className="product-info">
          <li>
            Material: 
            <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
              {materials.map(material => (
                <option key={material} value={material}>{material}</option>
              ))}
            </select>
          </li>
          <li>
            Main Stone: 
            <select value={selectedMainStone} onChange={(e) => setSelectedMainStone(e.target.value)}>
              {mainStones.map(stone => (
                <option key={stone} value={stone}>{stone}</option>
              ))}
            </select>
          </li>
          <li>
            Sub Stone: 
            <select value={selectedSubStone} onChange={(e) => setSelectedSubStone(e.target.value)}>
              {subStones.map(stone => (
                <option key={stone} value={stone}>{stone}</option>
              ))}
            </select>
          </li>
          <li>Product Code: {product.productCode}</li>
        </ul>
        <div className="product-quantity center" >
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <div className="product-actions">
          <button className="btn buy-now">Buy Now</button>
          <button className="btn add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className="collapsible-section">
          <button className="collapsible-header" onClick={() => setProductDetailsOpen(!productDetailsOpen)}>
            Product Details
            <span className="toggle-icon">{productDetailsOpen ? '−' : '+'}</span>
          </button>
          {productDetailsOpen && (
            <div className="collapsible-content">
              <p>{product.description}</p>
            </div>
          )}
        </div>

        <div className="collapsible-section">
          <button className="collapsible-header" onClick={() => setGiaReportOpen(!giaReportOpen)}>
            GIA Grading Report
            <span className="toggle-icon">{giaReportOpen ? '−' : '+'}</span>
          </button>
          {giaReportOpen && (
            <div className="collapsible-content">
              <p>Details about GIA grading will go here.</p>
            </div>
          )}
        </div>

        <div className="collapsible-section">
          <button className="collapsible-header" onClick={() => setUpgradeProgramOpen(!upgradeProgramOpen)}>
            Lifetime Diamond Upgrade Program
            <span className="toggle-icon">{upgradeProgramOpen ? '−' : '+'}</span>
          </button>
          {upgradeProgramOpen && (
            <div className="collapsible-content">
              <p>Blue Nile is pleased to offer a lifetime diamond upgrade program on all certified diamonds. Simply call a Diamond & Jewelry Consultant at 1-888-565-7641 to learn more about our upgrade program and to select your new diamond.</p>
            </div>
          )}
        </div>

        <div className="product-order-includes">
          <h2>Your Order Includes:</h2>
          <p><strong>Free Shipping:</strong> We're committed to making your entire experience a pleasant one, from shopping to shipping.</p>
          {/* <p><strong>Free Returns:</strong> Our commitment to you does not end at delivery. We offer free returns (U.S. and Canada) to make your experience as easy as possible.</p> */}
        </div>

        <div className="product-contact">
          <p>Contact: 0933.1977.55 (toll-free) for detailed advice</p>
         
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
