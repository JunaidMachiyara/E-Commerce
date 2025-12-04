import React, { useState, useEffect } from 'react';
import { HighlightedProduct, PageIdentifier } from '../../types'; // Import PageIdentifier

interface ProductHighlightCardProps {
  product: HighlightedProduct;
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const ProductHighlightCard: React.FC<ProductHighlightCardProps> = ({ product, onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
            {product.images.map((_, index) => (
              <span
                key={index}
                className={`block w-2 h-2 rounded-full ${
                  currentImageIndex === index ? 'bg-bfl-yellow' : 'bg-white opacity-50'
                }`}
                aria-label={`Image ${index + 1}`}
              ></span>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-bfl-black mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-bfl-black text-xl font-bold mb-4">{product.price}</p>
        <button
          onClick={() => onNavigate('underConstruction')} // Navigate to Under Construction
          className="bg-bfl-black text-white px-4 py-2 text-sm uppercase font-bold rounded-md hover:bg-gray-800 transition-colors w-full"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};