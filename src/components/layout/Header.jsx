import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPhone, FaTelegram } from "react-icons/fa";
import "../../styles/Header.css"


const Header = () => {
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  
   const navLinkStyle = `nav-link text-white hover:text-blue-200 font-medium transition-colors duration-300`;
   const mobileDropdownStyle = "pl-4 py-1 text-white hover:text-blue-200 block";

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
      className={`bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 shadow-lg fixed w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar with Contact Info */}

      <nav className="container mx-auto px-4 py-3 ">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="
              //niletech.co/wp-content/uploads/2024/09/niles-logo.png"
              className="h-12"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-blue-200"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div
            className={`lg:flex lg:items-center lg:space-x-6 ${
              isMenuOpen
                ? "absolute top-full left-0 w-full bg-blue-900 shadow-lg"
                : "hidden"
            } lg:relative lg:bg-transparent lg:shadow-none`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
              {/* Mobile Menu */}
              <div
                className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} py-2 px-4`}
              >
                <Link to="/" className="block py-2" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link
                  to="/services"
                  className="block py-2"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  className="block py-2"
                  onClick={handleLinkClick}
                >
                  Projects
                </Link>

                {/* Pages Dropdown Mobile */}
                <button
                  onClick={() => toggleDropdown("pages")}
                  className="w-full text-left py-2 flex justify-between items-center "
                >
                  Pages
                  <span
                    className={`transform transition-transform ${activeDropdown === "pages" ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
                {activeDropdown === "pages" && (
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
                )}

                {/* Blog Dropdown Mobile */}
                <button
                  onClick={() => toggleDropdown("blog")}
                  className="w-full text-left py-2 flex justify-between items-center"
                >
                  Blog
                  <span
                    className={`transform transition-transform ${activeDropdown === "blog" ? "rotate-180" : ""}`}
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
                )}
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                <Link to="/" className={navLinkStyle}>
                  Home
                </Link>
                <Link to="/services" className={navLinkStyle}>
                  Services
                </Link>
                <Link to="/projects" className={navLinkStyle}>
                  Projects
                </Link>

                {/* Pages Dropdown Desktop */}
                <div className="hidden lg:flex lg:items-center lg:space-x-6">
                  <Link to="/" className={`nav-link ${navLinkStyle}`}>
                    Home
                  </Link>
                  <Link to="/services" className={`nav-link ${navLinkStyle}`}>
                    Services
                  </Link>
                  <Link to="/projects" className={`nav-link ${navLinkStyle}`}>
                    Projects
                  </Link>

                  {/* Update dropdown menus */}
                  <div className="relative group">
                    <button
                      className={`nav-link ${navLinkStyle} flex items-center`}
                    >
                      Pages
                      <span className="ml-1">▼</span>
                    </button>
                    <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 rounded-lg shadow-xl py-2 invisible group-hover:visible transition-all duration-300">
                      <Link
                        to="/about"
                        className="dropdown-item block px-4 py-2"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/clients"
                        className="dropdown-item block px-4 py-2"
                      >
                        Our Clients
                      </Link>
                      <Link
                        to="/testimonials"
                        className="dropdown-item block px-4 py-2"
                      >
                        Testimonials
                      </Link>
                    </div>
                  </div>

                  {/* Update Blog dropdown similarly */}
                  <div className="relative group">
                    <button
                      className={`nav-link ${navLinkStyle} flex items-center`}
                    >
                      Blog
                      <span className="ml-1">▼</span>
                    </button>
                    <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 rounded-lg shadow-xl py-2 invisible group-hover:visible transition-all duration-300">
                      <Link
                        to="/blog/standard"
                        className="dropdown-item block px-4 py-2"
                      >
                        Standard Post
                      </Link>
                      <Link
                        to="/blog/gallery"
                        className="dropdown-item block px-4 py-2"
                      >
                        Gallery Post
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Blog Dropdown Desktop */}
                <div className="relative group">
                  <button className={`${navLinkStyle} flex items-center`}>
                    Blog
                    <span className="ml-1">▼</span>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 invisible group-hover:visible transition-all duration-300">
                    <Link
                      to="/blog/standard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Standard Post
                    </Link>
                    <Link
                      to="/blog/gallery"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Gallery Post
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-center mt-4 lg:mt-0"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <div className="bg-blue-800/50 text-white px-6 py-2 rounded-full transition-all duration-300 mt-4 lg:mt-0">
                <a
                  href="tel:+251915137219"
                  className="flex items-center space-x-2 hover:text-blue-200"
                >
                  <FaPhone className="text-sm" />
                  <span className="text-sm">+251915137219</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
