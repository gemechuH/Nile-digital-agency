import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPhone, FaTelegram, FaEnvelope } from "react-icons/fa";
import '../../styles/header.css'

const Header = () => {
    const location = useLocation();
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // setActiveDropdown(null);
  };
  const isActive = (path) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // const toggleDropdown = (dropdown) => {
  //   setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  // };

  const navLinkStyle = (path) => `
    text-white hover:text-blue-300 font-medium transition-colors duration-300 relative
    ${isActive(path) ? "active-link" : ""}
  `;
  // const mobileDropdownStyle = "pl-4 py-1 text-white hover:text-purple block";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg fixed w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 ">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="//niletech.co/wp-content/uploads/2024/09/niles-logo.png"
              className="h-12 text-white bg-white rounded-full p-1 border-2 border-white"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-gray-400"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div
            className={`${
              isMenuOpen
                ? "absolute top-full left-0 w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white"
                : "hidden"
            } lg:flex lg:items-center lg:space-x-6 text-red lg:relative lg:bg-transparent lg:shadow-none`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
              {/* Mobile Menu */}
              <div
                className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} py-2 px-4`}
              >
                <Link
                  to="/"
                  className={`block py-2 ${
                    isActive("/")
                      ? "text-blue-400 border-l-4 border-blue-400 pl-2"
                      : "text-white pl-3"
                  } hover:text-blue-300 transition-colors duration-300`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className={`block py-2 ${
                    isActive("/services")
                      ? "text-blue-400 border-l-4 border-blue-400 pl-2"
                      : "text-white pl-3"
                  } hover:text-blue-300 transition-colors duration-300`}
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  className={`block py-2 ${
                    isActive("/projects")
                      ? "text-blue-400 border-l-4 border-blue-400 pl-2"
                      : "text-white pl-3"
                  } hover:text-blue-300 transition-colors duration-300`}
                  onClick={handleLinkClick}
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className={`block py-2 ${
                    isActive("/about")
                      ? "text-blue-400 border-l-4 border-blue-400 pl-2"
                      : "text-white pl-3"
                  } hover:text-blue-300 transition-colors duration-300`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <Link
                  to="/clients"
                  className={`block py-2 ${
                    isActive("/clients")
                      ? "text-blue-400 border-l-4 border-blue-400 pl-2"
                      : "text-white pl-3"
                  } hover:text-blue-300 transition-colors duration-300`}
                  onClick={handleLinkClick}
                >
                  Our clients
                </Link>
                <Link
                  to="/testimonials"
                  className={`block py-2 ${
                    isActive("/testimonials")
                      ? "text-blue-400 border-l-4 border-blue-400 pl-2"
                      : "text-white pl-3"
                  } hover:text-blue-300 transition-colors duration-300`}
                  onClick={handleLinkClick}
                >
                  Testimonials
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                <Link to="/" className={navLinkStyle("/")}>
                  Home
                </Link>
                <Link to="/services" className={navLinkStyle("/services")}>
                  Services
                </Link>
                <Link to="/projects" className={navLinkStyle("/projects")}>
                  Projects
                </Link>
                <Link to="/about" className={navLinkStyle("/about")}>
                  About Us
                </Link>
                <Link to="/clients" className={navLinkStyle("/clients")}>
                  Our clients
                </Link>
                <Link
                  to="/testimonials"
                  className={navLinkStyle("/testimonials")}
                >
                  Testimonials
                </Link>
              </div>

              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@niletech.co"
                  className="group flex items-center   py-2 bg-gray-800/50 hover:bg-blue-600/20 rounded-full transition-all duration-300"
                >
                  <FaEnvelope className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <span className="text-sm text-gray-200 group-hover:text-white">
                    info@niletech.co
                  </span>
                </a>
              </div>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-center mt-4 lg:mt-0"
                onClick={handleLinkClick}
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
