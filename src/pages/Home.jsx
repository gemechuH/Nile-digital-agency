import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CarouselEffect from "../components/carousel/CarouselEffect";
import styles from "./Home.module.css";
import { useSpring, animated } from "@react-spring/web";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaRobot,
  FaMobile,
  FaShieldAlt,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";


const Home = () => {
  const AnimatedCounter = ({ value, duration = 2000, isVisible }) => {
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: isVisible ? value : 0 },
     
      delay: 200,
      config: { duration },
      
    });

    return <animated.span>{number.to((n) => Math.floor(n))}</animated.span>;
  };
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Update the services array
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      techIcons: [
        <FaReact />,
        <FaNodeJs />,
        <SiJavascript />,
        <SiTailwindcss />,
      ],
      title: "Web Development",
      description:
        "Full-stack web solutions with modern technologies like React, Node.js, and Python",
      features: ["Custom Web Apps", "E-commerce Solutions", "API Development"],
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      techIcons: [<FaReact />, <SiFirebase />, <FaPython />, <SiJavascript />],
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Apps", "React Native Solutions"],
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      techIcons: [<FaPython />, <FaBrain />, <FaNodeJs />, <SiFirebase />],
      title: "Chatbot Development",
      description: "Intelligent chatbot solutions for business automation",
      features: ["AI-Powered Chatbots", "NLP Integration", "Custom Bot Logic"],
    },
    {
      icon: <MdDesignServices className="w-8 h-8" />,
      techIcons: [<SiFigma />, <FaCode />, <SiTailwindcss />],
      title: "UI AND UX design",
      description: "Creating intuitive and engaging user experiences",
      features: ["User Research", "Wireframing", "Prototype Development"],
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      techIcons: [<FaPython />, <FaCode />, <BiCodeAlt />, <FaShieldAlt />],
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
      icon: <FaBrain className="w-8 h-8" />,
      techIcons: [<FaPython />, <FaNodeJs />, <FaBrain />, <FaRobot />],
      title: "AI Solutions",
      description:
        "Cutting-edge AI and machine learning solutions for business automation",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/50 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Front Content */}
                <div className="relative z-10 transform group-hover:-translate-y-[200%] transition-transform duration-500">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                </div>

                {/* Back Content (Revealed on Hover) */}
                <div className="absolute inset-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-blue-400 mb-4">
                        Technologies We Use
                      </h4>
                      <div className="flex gap-4 mb-6">
                        {service.techIcons.map((icon, idx) => (
                          <div
                            key={idx}
                            className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                          >
                            {icon}
                          </div>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 flex items-center"
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-6 w-full py-3 px-6 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-xl transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50">
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        ref={statsRef}
        className="py-20 relative z-10 bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-blue-400 mb-4 flex items-center justify-center">
                <AnimatedCounter value={200} isVisible={statsInView} />
                <span className="text-blue-400">+</span>
              </div>
              <h4 className="text-xl font-semibold text-blue-300 mb-2">
                Successful Projects
              </h4>
              <p className="text-gray-400 text-base">
                Delivering innovative digital solutions across industries
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-purple-400 mb-4 flex items-center justify-center">
                <AnimatedCounter value={50} isVisible={statsInView} />
                <span className="text-purple-400">+</span>
              </div>
              <h4 className="text-xl font-semibold text-purple-300 mb-2">
                Tech Experts
              </h4>
              <p className="text-gray-400 text-base">
                Skilled professionals dedicated to your success
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl font-bold text-green-400 mb-4 flex items-center justify-center">
                <AnimatedCounter value={98} isVisible={statsInView} />
                <span className="text-green-400">%</span>
              </div>
              <h4 className="text-xl font-semibold text-green-300 mb-2">
                Client Success Rate
              </h4>
              <p className="text-gray-400 text-base">
                Maintaining excellence in client satisfaction
              </p>
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
