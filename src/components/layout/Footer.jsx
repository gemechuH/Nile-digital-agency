import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Get in touch!</h3>
            <p className="text-gray-400 mb-4">
              Fusce varius, dolor tempor interdum tristique, dui urna bibendum
              magna, ut ullamcorper purus
            </p>
            <form className="flex flex-col sm:flex-row gap-2 items-center">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 sm:h-12 w-full sm:w-auto"
              />
              <button
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors h-10 sm:h-12"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Services Section */}
          <div className="mb-8 ml-8">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/branding"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Logo & Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ppc"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pay-Per-Click
                </Link>
              </li>
              <li>
                <Link
                  to="/services/social"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
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
            </ul>
          </div>

          {/* Support Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Social Icons */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Nile Digital Agency. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
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
