// components/WeddingRingsPage.js
import React from 'react';
import Product from '../Product'; // Adjust the import path if necessary
import '../styles/WeddingRingsPage.css'; // Adjust the import path if necessary

const weddingRings = [
  { id: 1, image: './assets/ring1.jpg', name: 'Diamond Wedding Ring', cost: 1200, description: 'A beautiful diamond wedding ring.', material: 'Diamond', chiefOfficer: 'John Doe', additionalPills: 'N/A', productCode: 'DR001' },
  { id: 2, image: './assets/ring2.jpg', name: 'Gold Wedding Band', cost: 800, description: 'A classic gold wedding band.', material: 'Gold', chiefOfficer: 'Jane Smith', additionalPills: 'N/A', productCode: 'GW002' },
  // Add more wedding rings as needed
];

function WeddingRingsPage() {
  return (
    <div className="wedding-rings-page">
      <h1>Wedding Rings</h1>
      <div className="product-grid">
        {weddingRings.map((ring) => (
          <Product key={ring.id} {...ring} />
        ))}
      </div>
    </div>
  );
}

export default WeddingRingsPage;
