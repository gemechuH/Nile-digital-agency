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
                className={`lg:hidden ${
                  isMenuOpen ? "block" : "hidden"
                } py-2 px-4`}
              >
                <Link
                  to="/"
                  className={`block py-2 ${isActive("/") ? "active-link" : ""}`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className={`block py-2 ${isActive("/services") ? "active-link" : ""}`}
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  className={`block py-2 ${isActive("/services") ? "active-link" : ""}`}
                  onClick={handleLinkClick}
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className={`block py-2 ${isActive("/services") ? "active-link" : ""}`}
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
                <Link
                  to="/clients"
                  className={`block py-2 ${isActive("/services") ? "active-link" : ""}`}
                  onClick={handleLinkClick}
                >
                  Our clients
                </Link>
                <Link
                  to="/testimonials"
                  className={`block py-2 ${isActive("/services") ? "active-link" : ""}`}
                  onClick={handleLinkClick}
                >
                  Testimonials
                </Link>

                {/* Pages Dropdown Mobile */}
                {/* <button
                  onClick={() => toggleDropdown("pages")}
                  className="w-full text-left py-2 flex justify-between items-center"
                >
                  Pages
                  <span
                    className={`transform transition-transform ${
                      activeDropdown === "pages" ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button> */}
                {/* {activeDropdown === "pages" && (
                  <div className="pl-4">
                    <Link
                      to="/about"
                      className={mobileDropdownStyle}
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/clients"
                      className={mobileDropdownStyle}
                      onClick={handleLinkClick}
                    >
                      Our Clients
                    </Link>
                    <Link
                      to="/testimonials"
                      className={mobileDropdownStyle}
                      onClick={handleLinkClick}
                    >
                      Testimonials
                    </Link>
                  </div>
                )} */}

                {/* Blog Dropdown Mobile */}
                {/* <button
                  onClick={() => toggleDropdown("blog")}
                  className="w-full text-left py-2 flex justify-between items-center"
                >
                  Blog
                  <span
                    className={`transform transition-transform ${
                      activeDropdown === "blog" ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {activeDropdown === "blog" && (
                  <div className="pl-4">
                    <Link
                      to="/blog/standard"
                      className={mobileDropdownStyle}
                      onClick={handleLinkClick}
                    >
                      Standard Post
                    </Link>
                    <Link
                      to="/blog/gallery"
                      className={mobileDropdownStyle}
                      onClick={handleLinkClick}
                    >
                      Gallery Post
                    </Link>
                  </div>
                )} */}
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

                {/* Pages Dropdown Desktop */}
                <div className="relative group">
                <button className={`${navLinkStyle} flex items-center`}>
                    Pages
                    <span className="ml-1">▼</span>
                  </button>

                <div className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg shadow-xl py-2 invisible group-hover:visible transition-all duration-300">
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:text-blue-600"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/clients"
                      className="block px-4 py-2 hover:text-blue-600"
                    >
                      Our Clients
                    </Link>
                    <Link
                      to="/testimonials"
                      className="block px-4 py-2 hover:text-blue-60"
                    >
                      Testimonials
                    </Link>
                  </div>
                </div>
                {/* Blog Dropdown Desktop */}
                {/* <div className="relative group">
                  <button className={`${navLinkStyle} flex items-center`}>
                    Blog
                    <span className="ml-1">▼</span>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg shadow-xl py-2 invisible group-hover:visible transition-all duration-300">
                    <Link
                      to="/blog/standard"
                      className="block px-4 py-2 hover:text-blue-60"
                    >
                      Standard Post
                    </Link>
                    <Link
                      to="/blog/gallery"
                      className="block px-4 py-2 text-red hover:text-blue-60"
                    >
                      Gallery Post
                    </Link>
                  </div>
                </div> */}
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
