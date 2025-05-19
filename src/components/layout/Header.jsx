import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
  ];

  const dropdownItems = {
    Pages: [
      { label: "About Us", to: "/about" },
      { label: "Our Clients", to: "/clients" },
      { label: "Testimonials", to: "/testimonials" },
    ],
    Blog: [
      { label: "Standard Post", to: "/blog/standard" },
      { label: "Gallery Post", to: "/blog/gallery" },
    ],
  };

  const navLinkClass =
    "text-white hover:text-gray-300 font-medium transition duration-300";

  const renderDropdown = (title) => (
    <div className="relative group">
      <button className={`${navLinkClass} flex items-center gap-1`}>
        {title} ▼
      </button>
      <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-md py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {dropdownItems[title].map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={handleLinkClick}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-300 shadow-lg bg-gradient-to-r from-black via-indigo-700 to-blue-900 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img
            src="https://niletech.co/wp-content/uploads/2024/09/niles-logo.png"
            alt="Logo"
            className="h-12 rounded-full"
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 bg-white lg:bg-transparent text-black lg:text-white absolute lg:static top-full left-0 w-full lg:w-auto p-4 lg:p-0 shadow-lg lg:shadow-none z-40`}
        >
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={navLinkClass}
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          ))}

          {Object.keys(dropdownItems).map((title) =>
            isMenuOpen ? (
              <div key={title}>
                <button
                  className="flex justify-between items-center w-full py-2"
                  onClick={() => toggleDropdown(title)}
                >
                  {title} <span>{activeDropdown === title ? "▲" : "▼"}</span>
                </button>
                {activeDropdown === title && (
                  <div className="pl-4">
                    {dropdownItems[title].map(({ label, to }) => (
                      <Link
                        key={to}
                        to={to}
                        className="block py-1 hover:text-blue-500"
                        onClick={handleLinkClick}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <React.Fragment key={title}>
                {renderDropdown(title)}
              </React.Fragment>
            )
          )}

          <Link
            to="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
            onClick={handleLinkClick}
          >
            Contact
          </Link>

          <a
            href="tel:+251915137219"
            className="flex items-center gap-2 text-white hover:text-blue-300 text-sm"
          >
            <FaPhone /> +251915137219
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
