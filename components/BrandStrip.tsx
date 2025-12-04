import React from 'react';
import { BRANDS_STRIP } from '../constants';

export const BrandStrip: React.FC = () => {
  return (
    <div className="bg-white py-6 border-b">
      <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8 opacity-50 grayscale text-xl md:text-2xl font-bold">
        {BRANDS_STRIP.map((brand, index) => (
          <span key={index} className="whitespace-nowrap">
            {brand.name}
          </span>
        ))}
      </div>
    </div>
  );
};