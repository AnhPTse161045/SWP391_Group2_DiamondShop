import React, { useState } from 'react';
import Product from '../Product'; // Adjust the import path if necessary
import '../styles/WeddingRingsPage.css'; // Adjust the import path if necessary

import necklace from '../assets/necklace2.jpg';
import diamond1 from '../assets/diamond1.png';
import diamond2 from '../assets/diamond2.png';
import diamond3 from '../assets/diamond3.png';
import diamond4 from '../assets/diamond4.jpg';
import diamond5 from '../assets/diamond5.jpg';
import diamond6 from '../assets/diamond6.jpeg';
import diamond7 from '../assets/diamond7.jpg';
import diamond8 from '../assets/diamond8.jpg';
import diamond9 from '../assets/diamond9.jpg';
import diamond10 from '../assets/diamond10.jpg';
import diamond11 from '../assets/diamond12.jpg';


const weddingRings = [
  { id: 1, image : diamond11, name: 'Diamond Wedding Ring', cost: 1200, description: 'A beautiful diamond wedding ring.', material: 'Diamond', chiefOfficer: 'John Doe', additionalPills: 'N/A', productCode: 'DR001' },
  { id: 2, image: diamond10, name: 'Gold Wedding Band', cost: 800, description: 'A classic gold wedding band.', material: 'Gold', chiefOfficer: 'Jane Smith', additionalPills: 'N/A', productCode: 'GW002' },
  { id: 3, image:diamond9, name: 'Silver Wedding Ring', cost: 900, description: 'An elegant silver wedding ring.', material: 'Silver', chiefOfficer: 'Alice Johnson', additionalPills: 'N/A', productCode: 'SR003' },
  { id: 4, image: diamond8 , name: 'Platinum Wedding Ring', cost: 1500, description: 'A premium platinum wedding ring.', material: 'Platinum', chiefOfficer: 'Bob Brown', additionalPills: 'N/A', productCode: 'PR004' },
  { id: 5, image: diamond7, name: 'Rose Gold Wedding Ring', cost: 1100, description: 'A charming rose gold wedding ring.', material: 'Rose Gold', chiefOfficer: 'Carol White', additionalPills: 'N/A', productCode: 'RGR005' },
  { id: 6, image: diamond6, name: 'Custom Wedding Ring', cost: 2000, description: 'A custom wedding ring designed to your preference.', material: 'Custom', chiefOfficer: 'David Black', additionalPills: 'N/A', productCode: 'CWR006' },
  { id: 7, image: diamond5, name: 'Diamond Wedding Ring', cost: 1200, description: 'A beautiful diamond wedding ring.', material: 'Diamond', chiefOfficer: 'John Doe', additionalPills: 'N/A', productCode: 'DR001' },
  { id: 8, image: diamond4, name: 'Gold Wedding Band', cost: 800, description: 'A classic gold wedding band.', material: 'Gold', chiefOfficer: 'Jane Smith', additionalPills: 'N/A', productCode: 'GW002' },
  { id: 9, image: diamond3, name: 'Silver Wedding Ring', cost: 900, description: 'An elegant silver wedding ring.', material: 'Silver', chiefOfficer: 'Alice Johnson', additionalPills: 'N/A', productCode: 'SR003' },
  { id: 10, image: diamond2 , name: 'Platinum Wedding Ring', cost: 1500, description: 'A premium platinum wedding ring.', material: 'Platinum', chiefOfficer: 'Bob Brown', additionalPills: 'N/A', productCode: 'PR004' },
  { id: 11, image: diamond1, name: 'Rose Gold Wedding Ring', cost: 1100, description: 'A charming rose gold wedding ring.', material: 'Rose Gold', chiefOfficer: 'Carol White', additionalPills: 'N/A', productCode: 'RGR005' },
  { id: 12, image:diamond1, name: 'Custom Wedding Ring', cost: 2000, description: 'A custom wedding ring designed to your preference.', material: 'Custom', chiefOfficer: 'David Black', additionalPills: 'N/A', productCode: 'CWR006' },
  // Add more wedding rings as needed
];

const PRODUCTS_PER_PAGE = 5;

function Ring() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(weddingRings.length / PRODUCTS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const selectedRings = weddingRings.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="wedding-rings-page">
      <h1> Rings</h1>
      <div className="product-grid">
        {selectedRings.map((ring) => (
          <Product key={ring.id} {...ring} />
        ))}
      </div>
      <div className="pagination-buttons">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage} className="pagination-button">
            &laquo; Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={handleNextPage} className="pagination-button">
            View More &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default Ring;
