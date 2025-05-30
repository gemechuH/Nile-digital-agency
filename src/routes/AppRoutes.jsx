import React from 'react'
import Header from '../components/layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import PostGallery from '../pages/blogs/PostGallery'
import StandardPost from '../pages/blogs/StandardPost'
import Services from '../pages/Services'
import Projects from '../pages/Projects'
// import AboutUs from '../pages/pages/AboutUs'
import About from '../pages/About'
import TestimonialsSection from '../pages/pages/testimonials/TestimonialsSection'
import OurClient from '../pages/pages/OurClient'

// import '../styles/App.css'  
const AppRoutes = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/gallery" element={<PostGallery />} />
        <Route path="/blog/standard" element={<StandardPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path='/clients' element = {<OurClient/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default AppRoutes
