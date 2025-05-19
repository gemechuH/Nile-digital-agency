// ... imports remain the same ...
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaTelegram,
  FaMapMarkerAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text  text-white rounded-xl">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <a
                  href="tel:+251915137219"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +251915137219
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:info@niletech.co"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  info@niletech.co
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-300">
                  Bole - Atlas, Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a
                  href="https://wa.me/251912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://t.me/niletech1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaTelegram size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text rounded-xl text-white text-center">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Logo & Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text rounded-xl text-white text-center">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text rounded-xl text-white text-center">
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700/50"
              />
              <button
                className="bg-gradient-to-r font-bold text-2xl text-red-200 from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Nile Digital Agency. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com/niletechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com/niletechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com/niletechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/niletechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
