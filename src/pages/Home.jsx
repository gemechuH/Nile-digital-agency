import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles-engine";

import {
  FaBrain,
  FaLock,
  FaPencilRuler,
  FaGraduationCap,
  FaShoppingCart,
  FaRocket,
  FaMapMarkerAlt,
  FaGlobe,
  FaMobile,
  FaCode,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const CarouselEffect = React.lazy(
  () => import("../components/carousel/CarouselEffect")
);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const serviceImages = {
  "AI-Driven Solutions":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  "Website Penetration Testing":
    "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  "Graphic Design":
    "https://images.unsplash.com/photo-1626785774625-0b1c2c4efd7c",
  "School Management System":
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
  "E-Commerce Website":
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
  "Bot Development":
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
};

const services = [
  {
    icon: <FaBrain className="text-4xl text-blue-600" />,
    title: "AI-Driven Solutions",
    description:
      "Intelligent automation and smart solutions powered by cutting-edge AI technology.",
  },
  {
    icon: <FaLock className="text-4xl text-blue-600" />,
    title: "Website Penetration Testing",
    description:
      "Comprehensive security assessment and vulnerability testing for your web applications.",
  },
  {
    icon: <FaPencilRuler className="text-4xl text-blue-600" />,
    title: "Graphic Design",
    description:
      "Creative and professional design solutions for your brand identity and marketing materials.",
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: "School Management System",
    description:
      "Complete digital solution for educational institutions to manage operations efficiently.",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-blue-600" />,
    title: "E-Commerce Website",
    description:
      "Custom online stores with secure payment integration and inventory management.",
  },
  {
    icon: <FaRocket className="text-4xl text-blue-600" />,
    title: "Bot Development",
    description:
      "Automated solutions and chatbots for enhanced customer service and business processes.",
  },
];

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "40+", label: "Happy Clients" },
  { number: "10+", label: "Team Experts" },
];

const Home = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <Particles
          id="hero-particles"
          init={async (engine) => await loadFull(engine)}
          options={{
            particles: {
              number: { value: 40 },
              size: { value: { min: 2, max: 6 } },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                straight: false,
                outModes: { default: "bounce" },
              },
              opacity: { value: 0.8 },
              shape: { type: "circle" },
              color: { value: "#ffffff" },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
            },
          }}
          className="absolute inset-0 z-0"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <CarouselEffect />
        </Suspense>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Transform Your Digital Vision
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Innovative Solutions for Tomorrow's Challenges
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Pioneering digital transformation in East Africa, we're your trusted
            partner for innovative technology solutions from Harar, Ethiopia.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-400 mr-2" /> Harar, Ethiopia
            </div>
            <div className="flex items-center">
              <FaGlobe className="text-blue-400 mr-2" /> Serving Globally
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            What We Can Do For You
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Services we can help you with
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-[350px] rounded-xl overflow-hidden bg-gray-800/50"
                  style={{
                    backgroundImage: `url(${serviceImages[service.title]}?w=800&auto=format)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-white text-4xl mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-white text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Impact Since 2022
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Track Record of Excellence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaMobile, title: "Mobile Apps", count: "20+" },
              { icon: FaCode, title: "Web Applications", count: "35+" },
              { icon: FaRobot, title: "AI Solutions", count: "15+" },
              { icon: FaShieldAlt, title: "Security Solutions", count: "25+" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                className="p-6 bg-white rounded-xl text-center shadow-md"
              >
                <div className="text-blue-600 text-4xl mb-4 mx-auto">
                  <item.icon />
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.count} Delivered</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
