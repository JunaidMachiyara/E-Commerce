import React, { useState } from 'react';
import { MegaMenuItemData, PageIdentifier } from '../../types'; // Import PageIdentifier

interface MegaMenuProps {
  item: MegaMenuItemData;
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ item, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated handleLinkClick to use PageIdentifier
  const handleLinkClick = (e: React.MouseEvent, pageIdentifier?: PageIdentifier) => {
    e.preventDefault();
    onNavigate(pageIdentifier || 'underConstruction'); // Navigate to provided page or fallback
  };

  return (
    <li
      className="group mega-menu-group py-3 hover:text-bfl-yellow cursor-pointer transition-colors"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span>
        {item.label} <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
      </span>

      <div
        className={`mega-menu absolute left-0 top-full w-full bg-white text-gray-800 shadow-xl border-t-4 border-bfl-yellow z-40 cursor-default ${
          isOpen ? 'open' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-8">
            {item.columns.map((column, colIndex) => (
              <div key={colIndex}>
                <h3 className="font-bold text-bfl-black mb-4 border-b pb-2">
                  {column.title}
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm capitalize">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        onClick={(e) => handleLinkClick(e, link.pageIdentifier)} // Pass pageIdentifier
                        className="hover:text-bfl-yellow hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {item.promotion && (
              <div
                className={`${item.promotion.bgColorClass} p-4 text-center rounded flex flex-col justify-center items-center`}
              >
                {item.promotion.icon && (
                  <span className="text-bfl-yellow text-4xl mb-2">
                    <i className={item.promotion.icon}></i>
                  </span>
                )}
                <h4 className={`font-bold text-lg mb-2 ${item.promotion.textColorClass}`}>
                  {item.promotion.title}
                </h4>
                <p className={`text-xs ${item.promotion.textColorClass} opacity-80 mb-4`}>
                  {item.promotion.description}
                </p>
                <button
                  onClick={(e) => handleLinkClick(e, item.promotion?.pageIdentifier)} // Pass pageIdentifier
                  className={`${item.promotion.buttonBgClass} ${item.promotion.textColorClass} px-4 py-2 text-xs uppercase font-bold rounded ${item.promotion.buttonHoverClass}`}
                >
                  {item.promotion.buttonText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};