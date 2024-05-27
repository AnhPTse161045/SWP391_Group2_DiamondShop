import React, { useState } from 'react';
import Product from '../Product'; // Adjust the import path if necessary
import '../styles/WeddingRingsPage.css'; // Adjust the import path if necessary

const weddingRings = [
  { id: 1, image: './assets/ring1.jpg', name: 'Diamond Wedding Ring', cost: 1200, description: 'A beautiful diamond wedding ring.', material: 'Diamond', chiefOfficer: 'John Doe', additionalPills: 'N/A', productCode: 'DR001' },
  { id: 2, image: './assets/ring2.jpg', name: 'Gold Wedding Band', cost: 800, description: 'A classic gold wedding band.', material: 'Gold', chiefOfficer: 'Jane Smith', additionalPills: 'N/A', productCode: 'GW002' },
  { id: 3, image: './assets/ring3.jpg', name: 'Silver Wedding Ring', cost: 900, description: 'An elegant silver wedding ring.', material: 'Silver', chiefOfficer: 'Alice Johnson', additionalPills: 'N/A', productCode: 'SR003' },
  { id: 4, image: './assets/ring4.jpg', name: 'Platinum Wedding Ring', cost: 1500, description: 'A premium platinum wedding ring.', material: 'Platinum', chiefOfficer: 'Bob Brown', additionalPills: 'N/A', productCode: 'PR004' },
  { id: 5, image: './assets/ring5.jpg', name: 'Rose Gold Wedding Ring', cost: 1100, description: 'A charming rose gold wedding ring.', material: 'Rose Gold', chiefOfficer: 'Carol White', additionalPills: 'N/A', productCode: 'RGR005' },
  { id: 6, image: './assets/ring6.jpg', name: 'Custom Wedding Ring', cost: 2000, description: 'A custom wedding ring designed to your preference.', material: 'Custom', chiefOfficer: 'David Black', additionalPills: 'N/A', productCode: 'CWR006' },
  { id: 7, image: './assets/ring1.jpg', name: 'Diamond Wedding Ring', cost: 1200, description: 'A beautiful diamond wedding ring.', material: 'Diamond', chiefOfficer: 'John Doe', additionalPills: 'N/A', productCode: 'DR001' },
  { id: 8, image: './assets/ring2.jpg', name: 'Gold Wedding Band', cost: 800, description: 'A classic gold wedding band.', material: 'Gold', chiefOfficer: 'Jane Smith', additionalPills: 'N/A', productCode: 'GW002' },
  { id: 9, image: './assets/ring3.jpg', name: 'Silver Wedding Ring', cost: 900, description: 'An elegant silver wedding ring.', material: 'Silver', chiefOfficer: 'Alice Johnson', additionalPills: 'N/A', productCode: 'SR003' },
  { id: 10, image: './assets/ring4.jpg', name: 'Platinum Wedding Ring', cost: 1500, description: 'A premium platinum wedding ring.', material: 'Platinum', chiefOfficer: 'Bob Brown', additionalPills: 'N/A', productCode: 'PR004' },
  { id: 11, image: './assets/ring5.jpg', name: 'Rose Gold Wedding Ring', cost: 1100, description: 'A charming rose gold wedding ring.', material: 'Rose Gold', chiefOfficer: 'Carol White', additionalPills: 'N/A', productCode: 'RGR005' },
  { id: 12, image: './assets/ring6.jpg', name: 'Custom Wedding Ring', cost: 2000, description: 'A custom wedding ring designed to your preference.', material: 'Custom', chiefOfficer: 'David Black', additionalPills: 'N/A', productCode: 'CWR006' },
  // Add more wedding rings as needed
];

const PRODUCTS_PER_PAGE = 5;

function BracelesPage() {
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
      <h1>Braceles</h1>
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

export default BracelesPage;
