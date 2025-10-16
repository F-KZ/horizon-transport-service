import React from "react";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, setShowMenu, navLinks }) => {
  const hideMenu = () => {
    setShowMenu(false);
  };

  const renderLink = (item) => {
    if (item.type === "hash") {
      return (
        <a 
          href={item.link}
          className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
          onClick={hideMenu}
        >
          {item.name}
        </a>
      );
    }
    
    return (
      <Link 
        to={item.link}
        className="block py-3 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300"
        onClick={hideMenu}
      >
        {item.name}
      </Link>
    );
  };
  
  if (!navLinks) {
    return null;
  }
  
  return (
    <>
      {/* Overlay */}
      {showMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={hideMenu}
        />
      )}
      
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-white z-30 flex flex-col p-8 shadow-2xl transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <FaUserCircle size={40} className="text-blue-600" />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Horizon Transports</h1>
              <p className="text-sm text-gray-500">Formation VTC & Taxi</p>
            </div>
          </div>
          <button
            onClick={hideMenu}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fermer le menu"
          >
            <FaTimes size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.id}>
                {renderLink(item)}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="text-center pt-4 border-t border-gray-200">
          <button 
            onClick={hideMenu}
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            Fermer le menu
          </button>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;