import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Projects.css";

const projectCategories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Digital Marketing",
];

const projectData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/assets/images/project-1.jpg",
    description: "A modern e-commerce solution with advanced features and seamless user experience",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    image: "/assets/images/project-2.jpg",
    description: "Innovative mobile application for tracking fitness and achieving health goals",
    technologies: ["React Native", "Firebase"],
    link: "#",
    featured: true
  },
  {
    id: 3,
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "/assets/images/project-3.jpg",
    description: "Strategic redesign of corporate website focusing on user experience",
    technologies: ["Figma", "Adobe XD"],
    link: "#",
    featured: false
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    category: "Digital Marketing",
    image: "/assets/images/project-4.jpg",
    description: "Results-driven digital marketing strategy with measurable impact",
    technologies: ["Google Analytics", "SEO", "Social Media"],
    link: "#",
    featured: true
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [hoveredProject, setHoveredProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredProjects = projectData.filter((project) =>
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="projects-container bg-gray-50">
      {/* Hero Section */}
      <section className="hero-section relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="text-blue-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl leading-relaxed text-gray-200">
              Discover our portfolio of innovative digital solutions that drive
              business growth and transform user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className={`project-card relative rounded-xl overflow-hidden shadow-xl bg-white ${project.featured ? 'border-2 border-blue-500' : ''}`}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                layout
              >
                <div className="relative overflow-hidden pt-[60%]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 bg-gray-100 text-sm font-medium rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    View Project
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};




export default Projects;
