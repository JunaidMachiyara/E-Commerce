import React from 'react';
import { NAV_MENU_ITEMS } from '../../constants';
import { SimpleMenuItemData, MegaMenuItemData, LinkItem, PageIdentifier } from '../../types'; // Import PageIdentifier

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, pageIdentifier?: PageIdentifier) => {
    e.preventDefault();
    toggleMenu(); // Close mobile menu
    onNavigate(pageIdentifier || 'underConstruction'); // Trigger navigation
  };

  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="absolute inset-0 bg-bfl-black/80" onClick={toggleMenu}></div>
      <div className="relative w-72 bg-white h-full shadow-lg flex flex-col overflow-y-auto">
        {/* Header for mobile menu */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg font-bold text-bfl-black">Menu</h2>
          <button onClick={toggleMenu} className="text-gray-500 hover:text-bfl-black">
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col p-4 space-y-2">
          {NAV_MENU_ITEMS.map((item, index) => (
            <li key={index} className="border-b border-gray-100 pb-2 last:border-b-0">
              {item.type === 'simple-link' ? (
                <a
                  href="#"
                  className={`block py-2 text-bfl-black hover:text-bfl-yellow ${
                    (item as SimpleMenuItemData).isHighlight ? 'font-bold' : ''
                  }`}
                  onClick={(e) => handleLinkClick(e, (item as SimpleMenuItemData).pageIdentifier)}
                >
                  {item.label}
                </a>
              ) : (
                <MobileMegaMenuItem item={item as MegaMenuItemData} onNavigate={onNavigate} toggleMenu={toggleMenu} />
              )}
            </li>
          ))}
        </ul>

        {/* Utility links for mobile */}
        <div className="mt-auto p-4 border-t border-gray-200 text-sm">
            <ul className="space-y-2 text-gray-600">
                <li><a href="#" onClick={(e) => handleLinkClick(e, 'underConstruction')} className="hover:text-bfl-black">Download App</a></li>
                <li><a href="#" onClick={(e) => handleLinkClick(e, 'underConstruction')} className="hover:text-bfl-black">Store Locator</a></li>
                <li><a href="#" onClick={(e) => handleLinkClick(e, 'underConstruction')} className="hover:text-bfl-black">English / Arabic</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

interface MobileMegaMenuItemProps {
    item: MegaMenuItemData;
    onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
    toggleMenu: () => void; // Prop to close mobile menu
}

const MobileMegaMenuItem: React.FC<MobileMegaMenuItemProps> = ({ item, onNavigate, toggleMenu }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleInternalLinkClick = (e: React.MouseEvent, pageIdentifier?: PageIdentifier) => {
      e.preventDefault();
      toggleMenu(); // Close the mobile menu first
      onNavigate(pageIdentifier || 'underConstruction'); // Then navigate
    };

    return (
        <div>
            <button
                className="flex justify-between items-center w-full py-2 text-bfl-black font-semibold hover:text-bfl-yellow"
                onClick={handleToggle}
            >
                {item.label}
                <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs ml-1`}></i>
            </button>
            {isOpen && (
                <div className="pl-4 pt-2 pb-2 bg-gray-50">
                    {item.columns.map((column, colIndex) => (
                        <div key={colIndex} className="mb-4">
                            <h3 className="font-bold text-bfl-black mb-2">{column.title}</h3>
                            <ul className="space-y-1 text-gray-600 text-sm">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" onClick={(e) => handleInternalLinkClick(e, link.pageIdentifier)} className="hover:text-bfl-yellow">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {item.promotion && (
                        <div className={`p-4 rounded text-center mt-4 ${item.promotion.bgColorClass} ${item.promotion.textColorClass}`}>
                            {item.promotion.icon && (
                                <span className="text-bfl-yellow text-2xl mb-2 block">
                                    <i className={item.promotion.icon}></i>
                                </span>
                            )}
                            <h4 className="font-bold text-lg mb-1">{item.promotion.title}</h4>
                            <p className="text-xs opacity-80 mb-3">{item.promotion.description}</p>
                            <button
                                onClick={(e) => handleInternalLinkClick(e, item.promotion?.pageIdentifier)}
                                className={`${item.promotion.buttonBgClass} ${item.promotion.textColorClass} px-4 py-2 text-xs uppercase font-bold rounded ${item.promotion.buttonHoverClass}`}
                            >
                                {item.promotion.buttonText}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};