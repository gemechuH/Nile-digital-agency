import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/assets/images/team/member1.jpg",
      description:
        "Visionary leader with 10+ years of digital innovation experience.",
    },
    {
      name: "Jane Smith",
      role: "Creative Director",
      image: "/assets/images/team/member2.jpg",
      description:
        "Award-winning designer with a passion for user-centric solutions.",
    },
    {
      name: "Mike Johnson",
      role: "Technical Lead",
      image: "/assets/images/team/member3.jpg",
      description:
        "Expert in cutting-edge web technologies and development practices.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with creative digital solutions",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description: "Delivering outstanding quality in every project",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      description: "Working together to achieve remarkable results",
      icon: "🤝",
    },
    {
      title: "Integrity",
      description: "Building trust through honest partnerships",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
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
              x: [0, Math.random() * 100 - 50],
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

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
          Transforming Ideas into
          <span className="text-blue-500"> Digital Reality</span>
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          We are a passionate team of digital innovators, committed to
          delivering exceptional solutions that drive business growth and user
          engagement.
        </p>
      </motion.section>

      {/* Values Section */}
      <section ref={ref} className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-700">
                {/* Add actual images when available */}
                <div className="w-full h-48 bg-gray-700"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-blue-600 rounded-lg p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's create something amazing together.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
