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
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <a
                  href="tel:+251915137219"
                  className="hover:text-blue-400 transition"
                >
                  +251915137219
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:info@niletech.co"
                  className="hover:text-blue-400 transition"
                >
                  info@niletech.co
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Bole - Atlas, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://wa.me/251912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="https://t.me/niletech1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTelegram size={20} />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 ">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Logo & Branding
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-blue-400">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-blue-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-3">
              Subscribe to our newsletter for updates and insights
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Nile Digital Agency. All rights
            reserved.
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a
              href="https://facebook.com/niletechnology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/niletechnology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/niletechnology"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/niletech1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
