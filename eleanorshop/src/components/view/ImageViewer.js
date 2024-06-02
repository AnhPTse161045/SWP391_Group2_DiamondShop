import React from 'react';

const ImageViewer = ({ currentIndex, images, onClose, onPrev, onNext }) => {
  if (currentIndex === null) return null;

  return (
    <div className="image-viewer">
      <span className="close" onClick={onClose}>&times;</span>
      <img src={images[currentIndex]} alt={`Full Size ${currentIndex}`} className="full-image" />
      <div className="nav-buttons">
        <button onClick={onPrev}>&#10094;</button>
        <button onClick={onNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageViewer;
