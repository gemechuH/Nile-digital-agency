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
      </Routes>

      <Footer />
    </>
  );
}

export default AppRoutes
