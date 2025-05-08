import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const OurClient = () => {
  return (
    <div className="main-wrapper">
    
      <header className="header axil-header header-style-1">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <a href="/">
                <img
                  className="light-version-logo"
                  src="assets/media/logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <nav className="mainmenu-nav">
              <ul className="mainmenu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/service">Service</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="axil-submenu">
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/case-study">Case Study</a>
                    </li>
                    <li>
                      <a href="/our-clients">Our Clients</a>
                    </li>
                    <li>
                      <a href="/testimonial">Testimonial</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

     
      <div className="breadcrum-area breadcrumb-banner">
        <div className="container">
          <div className="section-heading heading-left">
            <h1 className="title h2">Our Clients</h1>
            <p>We work closely with our clients to deliver the best results</p>
          </div>
        </div>
      </div>

    
      <div className="section brand-wrap-area bg-color-dark">
        <div className="container">
          <div className="row">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="col-lg-3 col-6"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay={index * 100}
              >
                <div className="brand-grid">
                  <img
                    src={`assets/media/brand/brand-${(index % 8) + 1}.png`}
                    alt="Brand"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   
      <section className="section call-to-action-area">
        <div className="container">
          <div className="call-to-action">
            <div className="section-heading heading-light">
              <span className="subtitle">Let's Work Together</span>
              <h2 className="title">Need a successful project?</h2>
              <a href="/contact" className="btn btn-primary btn-lg">
                Estimate Project
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="footer-area">
        <div className="container">
          <div className="footer-top">
            <div className="footer-social-link">
              <ul className="list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © 2025. All rights reserved by{" "}
              <a href="https://axilthemes.com/">Axilthemes</a>.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurClient;
