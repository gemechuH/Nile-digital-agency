import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", input);
    setInput({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  // Animation variants for the background
  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for form inputs
  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
    blur: { scale: 1, boxShadow: "none", transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Left Side - Inspiring Content */}
        <motion.div
          className="lg:w-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl p-8 text-white flex flex-col justify-center"
          variants={backgroundVariants}
          animate="animate"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Let's Create Something Amazing Together
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Have a project in mind? We're here to turn your ideas into reality.
            Reach out and let's start the journey!
          </motion.p>
          <motion.div
            className="flex space-x-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <a
              href="tel:+1234567890"
              className="text-white hover:text-blue-200 transition-colors"
            >
              +1 (234) 567-890
            </a>
            <a
              href="mailto:hello@niledigital.com"
              className="text-white hover:text-blue-200 transition-colors"
            >
              hello@niledigital.com
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <motion.input
                name="name"
                value={input.name}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50"
                placeholder="Your Name"
                variants={inputVariants}
                whileFocus="focus"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <motion.input
                name="email"
                value={input.email}
                onChange={handleChange}
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50"
                placeholder="you@example.com"
                variants={inputVariants}
                whileFocus="focus"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <motion.textarea
                name="message"
                value={input.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50"
                placeholder="Tell us about your project..."
                variants={inputVariants}
                whileFocus="focus"
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
