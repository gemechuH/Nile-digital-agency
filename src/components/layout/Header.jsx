import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="Nile Digital Agency" className="h-12" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 mr-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 relative group"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {/* Similar styling for other nav links */}
            <Link
              to="/services"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 relative group"
            >
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 relative group"
            >
              <span>Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 flex items-center"
                onMouseEnter={() => setIsPageDropdownOpen(true)}
                onMouseLeave={() => setIsPageDropdownOpen(false)}
              >
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
              {isPageDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 transition-all duration-300"
                  onMouseEnter={() => setIsPageDropdownOpen(true)}
                  onMouseLeave={() => setIsPageDropdownOpen(false)}
                >
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/case-study"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    Case Study
                  </Link>
                  <Link
                    to="/clients"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    Our Clients
                  </Link>
                  <Link
                    to="/testimonials"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    Testimonials
                  </Link>
                </div>
              )}
            </div>

            {/* Blog Dropdown - Similar styling as Pages Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 flex items-center"
                onMouseEnter={() => setIsBlogDropdownOpen(true)}
              >
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
              {isBlogDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2"
                  onMouseEnter={() => setIsBlogDropdownOpen(true)}
                  onMouseLeave={() => setIsBlogDropdownOpen(false)}
                >
                  <Link
                    to="/blog/standard"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    Standard Post
                  </Link>
                  <Link
                    to="/blog/gallery"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    Gallery Post
                  </Link>
                </div>
                
              )}
             
            </div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <Link
              to="/contact"
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Portfolio
              </Link>
              <button
                onClick={() => setIsPageDropdownOpen(!isPageDropdownOpen)}
                className="text-left text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Pages
              </button>
              {isPageDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    to="/about"
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/case-study"
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Case Study
                  </Link>
                  <Link
                    to="/clients"
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Our Clients
                  </Link>
                  <Link
                    to="/testimonials"
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Testimonials
                  </Link>
                </div>
              )}
              <button
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                className="text-left text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Blog
              </button>
              {isBlogDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    to="/blog/standard"
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Standard Post
                  </Link>
                  <Link
                    to="/blog/gallery"
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Gallery Post
                  </Link>
                </div>
              )}
              <Link
                to="/contact"
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
