import React from 'react';
import { ProductCard, PageIdentifier } from '../../types'; // Import PageIdentifier

interface HorizontalScrollProductsProps {
  products: ProductCard[];
  title: string;
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const HorizontalScrollProducts: React.FC<HorizontalScrollProductsProps> = ({ products, title, onNavigate }) => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-bfl-black mb-6">{title}</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-56 bg-gray-50 rounded-lg shadow-sm overflow-hidden border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onNavigate('underConstruction')} // Navigate to Under Construction
            >
              <div className="relative h-64">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                {product.offer && (
                  <span className="absolute top-2 left-2 bg-bfl-yellow text-bfl-black text-xs font-bold px-2 py-1 rounded">
                    {product.offer}
                  </span>
                )}
              </div>
              <div className="p-3 text-center">
                <h3 className="text-md font-semibold text-bfl-black truncate">{product.name}</h3>
                <p className="text-lg font-bold text-bfl-black mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};