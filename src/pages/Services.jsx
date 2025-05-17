import React from "react";
import "../styles/Service.css";
import { motion } from "framer-motion";

const Service = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: "💻",
      title: "App Development",
      description:
        "Transform your ideas into powerful mobile applications. We develop custom iOS and Android apps that are intuitive, feature-rich, and designed to engage your target audience while delivering real business value.",
    },
    {
      icon: "🚀",
      title: "Web Development",
      description:
        "We specialize in creating modern, responsive websites using the latest technologies and best practices. Our development team ensures your site is fast, secure, and built to scale, providing an exceptional user experience across all devices.",
    },
    {
      icon: "🧠",
      title: "AI Integrations",
      description:
        "Enhance your applications with cutting-edge AI capabilities. We integrate machine learning, natural language processing, and other AI technologies to automate processes, gain insights, and create intelligent features that set your solution apart.",
    },
    {
      icon: "⚡",
      title: "Database Design",
      description:
        "We architect robust database solutions that efficiently manage your data. Our expertise includes designing scalable schemas, optimizing queries, and implementing secure data storage systems that power your applications effectively.",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="service-container flex ">
      <motion.div
        className="service-header mt-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 >Our Services</h1>
        <h2>Transforming Visions into Digital Reality</h2>
        <p>
          Empowering businesses with innovative digital solutions, leveraging
          state-of-the-art technology to accelerate growth and maximize
          potential.
        </p>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item mt-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <div className="service-content">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.button
                className="learn-more-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
