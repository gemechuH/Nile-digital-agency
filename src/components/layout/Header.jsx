import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const navLinkStyle =
    "text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium relative group transition-colors duration-300";
  const underlineStyle =
    "absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300";
  const dropdownStyle =
    "absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2";
  const dropdownItemStyle =
    "block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200";

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="https://niletech.co/wp-content/uploads/2024/09/niles-logo.png"
              alt="Nile Digital Agency"
              className="h-10"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div
            className={`lg:flex lg:items-center lg:space-x-8 ${isMenuOpen ? "block absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-6" : "hidden"}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-4 lg:space-y-0">
              <Link to="/" className={navLinkStyle}>
                Home
                <span className={underlineStyle}></span>
              </Link>
              <Link to="/services" className={navLinkStyle}>
                Services
                <span className={underlineStyle}></span>
              </Link>
              <Link to="/projects" className={navLinkStyle}>
                Projects
                <span className={underlineStyle}></span>
              </Link>

              <div className="relative group">
                <button className={`${navLinkStyle} flex items-center`}>
                  Pages
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className={dropdownStyle}>
                  <Link to="/about" className={dropdownItemStyle}>
                    About Us
                  </Link>
                  <Link to="/clients" className={dropdownItemStyle}>
                    Our Clients
                  </Link>
                  <Link to="/testimonials" className={dropdownItemStyle}>
                    Testimonials
                  </Link>
                </div>
              </div>

              <div className="relative group">
                <button className={`${navLinkStyle} flex items-center`}>
                  Blog
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className={dropdownStyle}>
                  <Link to="/blog/standard" className={dropdownItemStyle}>
                    Standard Post
                  </Link>
                  <Link to="/blog/gallery" className={dropdownItemStyle}>
                    Gallery Post
                  </Link>
                </div>
              </div>

              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>

              <Link
                to="/contact"
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
