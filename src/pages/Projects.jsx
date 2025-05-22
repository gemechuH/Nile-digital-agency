import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectCategories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Digital Marketing",
  "AI Solutions",
  
];

const projectData = [
  // Web Development Projects (14)
  {
    id: 1,
    title: "E-commerce Marketplace",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3",
    description: "Multi-vendor marketplace platform",
    detailedDescription:
      "Built with microservices architecture, supporting 100+ vendors and 50k+ products.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    duration: "6 months",
    client: "Regional Marketplace",
    featured: true,
  },
  {
    id: 2,
    title: "School Management System",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
    description: "Comprehensive education management platform",
    detailedDescription:
      "Complete school management system with attendance, grades, and parent portal.",
    technologies: ["React", "Python", "Django", "PostgreSQL"],
    duration: "5 months",
    client: "Local Education Authority",
    featured: true,
  },
  {
    id: 3,
    title: "Hospital Management System",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3",
    description: "Healthcare management solution",
    detailedDescription:
      "Integrated hospital management system with patient records and appointment scheduling.",
    technologies: ["Angular", "Spring Boot", "MySQL"],
    duration: "8 months",
    client: "Regional Hospital",
    featured: true,
  },
  {
    id: 4,
    title: "Real Estate Platform",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3",
    description: "Property listing and management",
    detailedDescription:
      "Advanced real estate platform with virtual tours and agent portals.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    duration: "4 months",
    client: "Real Estate Agency",
    featured: false,
  },
  // ... Add 10 more web development projects with similar structure

  // Mobile Apps (4)
  {
    id: 15,
    title: "Food Delivery App",
    category: "Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3",
    description: "On-demand food delivery solution",
    detailedDescription:
      "Full-featured food delivery app with real-time tracking.",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    duration: "4 months",
    client: "Restaurant Chain",
    featured: true,
  },
  {
    id: 16,
    title: "Fitness Tracker",
    category: "Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3",
    description: "Personal fitness tracking app",
    detailedDescription:
      "Comprehensive fitness tracking with AI-powered recommendations.",
    technologies: ["Flutter", "Firebase", "TensorFlow Lite"],
    duration: "3 months",
    client: "Fitness Company",
    featured: false,
  },
  // ... Add 2 more mobile app projects

  // Digital Marketing (4)
  {
    id: 19,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3",
    description: "Integrated social media marketing",
    detailedDescription: "Multi-platform social media campaign with analytics.",
    technologies: ["Social Media Tools", "Analytics Platforms"],
    duration: "3 months",
    client: "Fashion Brand",
    featured: true,
  },
  {
    id: 20,
    title: "SEO Optimization",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixlib=rb-4.0.3",
    description: "Search engine optimization campaign",
    detailedDescription:
      "Comprehensive SEO strategy improving rankings by 200%.",
    technologies: ["SEO Tools", "Google Analytics"],
    duration: "6 months",
    client: "E-commerce Client",
    featured: false,
  },
  // ... Add 2 more digital marketing projects

  // UI/UX Design (2)
  {
    id: 23,
    title: "Banking App Design",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3",
    description: "Modern banking application design",
    detailedDescription: "User-centered design for digital banking platform.",
    technologies: ["Figma", "Adobe XD", "Principle"],
    duration: "2 months",
    client: "National Bank",
    featured: true,
  },
  {
    id: 24,
    title: "Travel App Design",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3",
    description: "Travel planning app interface",
    detailedDescription: "Intuitive travel app design with booking flow.",
    technologies: ["Sketch", "InVision", "Zeplin"],
    duration: "3 months",
    client: "Travel Agency",
    featured: false,
  },

  // AI Solutions (2)
  {
    id: 25,
    title: "AI Chatbot",
    category: "AI Solutions",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3",
    description: "Intelligent customer service bot",
    detailedDescription: "NLP-powered chatbot handling 1000+ queries daily.",
    technologies: ["Python", "TensorFlow", "NLP"],
    duration: "4 months",
    client: "Tech Company",
    featured: true,
  },
  {
    id: 26,
    title: "Predictive Analytics",
    category: "AI Solutions",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
    description: "Business intelligence solution",
    detailedDescription:
      "ML-powered predictive analytics for business insights.",
    technologies: ["Python", "Scikit-learn", "Power BI"],
    duration: "5 months",
    client: "Retail Chain",
    featured: false,
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const filteredProjects = projectData.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div> */}
      {/* Hero */}
      <section className=" bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white py-30 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold opacity-80">
            Real-World Solutions We’re Building
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto">
            From ideas to impact — see what we’re building at Nile Digital. We
            create smart solutions that solve real problems and help businesses
            grow. Every project shows our commitment to quality and innovation.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-2 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-4 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition relative group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                {project.featured && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90"
              >
                &times;
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-gray-600 mb-2">
                {selectedProject.detailedDescription}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Client:</strong> {selectedProject.client} |{" "}
                <strong>Duration:</strong> {selectedProject.duration}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 text-sm rounded-full text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
