import React, { useState } from "react";
//import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import Transit from "../Transit/Transit";
import borcel from "../../assets/logo2.webp"


export const Navlinks = [
  {
    id: 1,
    name: "Pourquoi nous ?",
    link: "#Services",
    type: "hash"
  },
  {
    id: 2,
    name: "Pré-Requis",
    link: "#Requis",
    type: "hash"
  },
  {
    id: 3, 
    name: "Contactez-nous",
    link: "#Info",
    type: "hash"
  },
  {
    id: 4,
    name: "E.Learning",
    link: "/adokent",
    type: "route"
  },
  {
    id: 5,
    name: "Formules",
    link: "/formules",
    type: "route"
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  const renderLink = (item) => {
    if (item.type === "hash") {
      return (
        <a 
          href={item.link}
          className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
          onClick={() => setShowMenu(false)}
        >
          {item.name}
        </a>
      );
    }
    
    return (
      <Link 
        to={item.link}
        className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
        onClick={() => setShowMenu(false)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={borcel}
                alt="logo"
                className="w-1/2 md:w-[70%] lg:w-full max-h-16 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map((item) => (
                <li key={item.id} className="py-4">
                  {renderLink(item)}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden relative z-40">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {showMenu ? (
                <HiMenuAlt1 size={30} className="text-gray-800" />
              ) : (
                <HiMenuAlt3 size={30} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu 
        showMenu={showMenu} 
        setShowMenu={setShowMenu} 
        navLinks={Navlinks}
      />
    </header>
  );
};

export default Navbar;