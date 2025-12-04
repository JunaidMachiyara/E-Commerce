import React from 'react';
import { PageIdentifier } from '../../types'; // Import PageIdentifier

interface TopUtilityBarProps {
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onNavigate }) => {
  return (
    <div className="bg-gray-100 border-b text-xs py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-gray-600">
        <div className="flex gap-4">
          <span>
            <i className="fa-solid fa-location-dot mr-1"></i> Deliver to:{' '}
            <strong>UAE</strong>
          </span>
          <span className="border-l border-gray-300 pl-4">
            Call us: +971 56 7955979
          </span>
        </div>
        <div className="flex gap-4">
          <a href="#" onClick={() => onNavigate('underConstruction')} className="hover:text-bfl-black">
            Download App
          </a>
          <a href="#" onClick={() => onNavigate('underConstruction')} className="hover:text-bfl-black">
            Store Locator
          </a>
          <a href="#" onClick={() => onNavigate('underConstruction')} className="hover:text-bfl-black">
            English / Arabic
          </a>
        </div>
      </div>
    </div>
  );
};