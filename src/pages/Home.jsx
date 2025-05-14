import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarouselEffect from "../components/carousel/CarouselEffect";
import styles from "./Home.module.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Full-stack web solutions with modern technologies like React, Node.js, and Python",
      features: ["Custom Web Apps", "E-commerce Solutions", "API Development"],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets",
      features: [
        "Penetration Testing",
        "Security Audits",
        "Vulnerability Assessment",
      ],
    },
    {
      icon: "fas fa-robot",
      title: "AI Solutions",
      description:
        "Cutting-edge AI and machine learning solutions for business automation",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Apps", "React Native Solutions"],
    },
  ];

  const team = [
    {
      name: "Anwar Mohammed",
      role: "CEO & Founder",
      image: "/assets/team/anwar.jpg",
      quote: "Innovating for Ethiopia's digital future",
    },
    {
      name: "Abdulmenan Ahmed",
      role: "Technical Director",
      image: "/assets/team/abdulmenan.jpg",
      quote: "Building tomorrow's technology today",
    },
  ];

  return (
    <div className={styles.homePage}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      <CarouselEffect />

      <section ref={ref} className="py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text ">
            Our Digital Excellence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <i
                    className={`${service.icon} text-blue-400 text-2xl group-hover:text-blue-300`}
                  ></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-24 relative z-10 bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl font-bold text-blue-400 mb-4"
              >
                200+
              </motion.h3>
              <p className="text-gray-400 text-lg">Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl font-bold text-purple-400 mb-4"
              >
                50+
              </motion.h3>
              <p className="text-gray-400 text-lg">Expert Team Members</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
            >
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl font-bold text-green-400 mb-4"
              >
                98%
              </motion.h3>
              <p className="text-gray-400 text-lg">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 relative z-10 bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text ">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl font-bold text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                01
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Discovery
              </h3>
              <p className="text-gray-400">
                Understanding your vision and goals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl font-bold text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                02
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Strategy
              </h3>
              <p className="text-gray-400">
                Crafting the perfect digital solution
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl font-bold text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                03
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Implementation
              </h3>
              <p className="text-gray-400">
                Bringing ideas to life with precision
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 group"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                04
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Launch</h3>
              <p className="text-gray-400">
                Delivering excellence with ongoing support
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30 group-hover:border-blue-500 transition-colors duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 mb-2">{member.role}</p>
                    <p className="text-gray-400 italic">"{member.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className={`${styles.cta} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.container}>
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's create something extraordinary together</p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      <section className={styles.youtubeSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Latest from Our Channel</h2>
          <div className={styles.videoWrapper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
