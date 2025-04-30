import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import sal from 'sal.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Projects.css';

// Placeholder images
const logo = "../assets/media/logo.svg";
// const logoDark = "https://via.placeholder.com/150x50?text=Logo+Dark";
const project1 = "../assets/media/logo-2.svg";
const project2 = "../assets/media/logo-2.svg";
const project3 = "../assets/media/logo-2.svg";
const bannerImage = "../assets/media/logo-2.svg";

const Projects = () => {
  const isotope = useRef();

  useEffect(() => {
    // Initialize animations and Isotope
    sal({ threshold: 0.1, once: false });
    
    const iso = new Isotope('.isotope-list', {
      itemSelector: '.project',
      layoutMode: 'fitRows',
      percentPosition: true
    });

    imagesLoaded('.isotope-list').on('progress', () => iso.layout());

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.dataset.filter;
        iso.arrange({ filter: filterValue });
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });

    return () => {
      if (isotope.current) isotope.current.destroy();
    };
  }, []);

  const projects = [
    { id: 1, title: "Creative Agency", category: "branding", image: project1, description: "Full Branding, Website, App" },
    { id: 2, title: "Mobile App", category: "mobile", image: project2, description: "iOS & Android Development" },
    { id: 3, title: "E-commerce Site", category: "branding", image: project3, description: "Online Store Development" }
  ];

  return (
    <div className="projects-container">
      <Helmet>
        <title>Alphorn | Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Company Logo" />
            </Link>
          </div>
          
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li className="has-submenu">
                <span>Pages <i className="fas fa-chevron-down"></i></span>
                <ul className="submenu">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <button className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <section className="hero-banner">
        <div className="hero-content">
          <h1>Our Projects</h1>
          <p>View our portfolio of successful projects</p>
        </div>
        <div className="hero-image">
          <img src={bannerImage} alt="Projects Banner" />
        </div>
      </section>

      <main className="projects-main">
        <div className="projects-header">
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="project-filters">
            <button data-filter="*" className="filter-button active">All Works</button>
            <button data-filter=".branding" className="filter-button">Branding</button>
            <button data-filter=".mobile" className="filter-button">Mobile</button>
          </div>
        </div>
        
        <div className="projects-grid isotope-list">
          {projects.map(project => (
            <div key={project.id} className={`project-item ${project.category}`}>
              <div className="project-card">
                <div className="project-image">
                  <Link to={`/projects/${project.id}`}>
                    <img src={project.image} alt={project.title} />
                  </Link>
                </div>
                <div className="project-info">
                  <h3><Link to={`/projects/${project.id}`}>{project.title}</Link></h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;