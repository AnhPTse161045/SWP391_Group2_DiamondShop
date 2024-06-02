import React from 'react';

const Gallery = ({ images, onImageClick }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="thumbnail"
          alt={`Thumbnail ${index}`}
          onClick={() => onImageClick(index)}
        />
      ))}
    </div>
  );
};

export default Gallery;
