import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectCategories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Digital Marketing",
  "AI Solutions",
  "School Systems",
  "E-commerce",
];

const projectData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "E-commerce",
    image:
      "https://unsplash.com/photos/photo-of-woman-holding-white-and-black-paper-bags-_3Q3tsJ01nc",
    description: "Modern e-commerce solution with seamless UX",
    detailedDescription:
      "Built with microservices. Handles 10k+ daily transactions.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    duration: "4 months",
    client: "Retail Company",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "E-commerce",
    image: "https://unsplash.com/photos/man-in-green-jacket-walking-on-sidewalk-during-daytime-BTKF6G-O8fU",
    description: "Modern e-commerce solution with seamless UX",
    detailedDescription:
      "Built with microservices. Handles 10k+ daily transactions.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    duration: "4 months",
    client: "Retail Company",
    featured: true,
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    image: "https://via.placeholder.com/400x300?text=Fitness+App",
    description: "Track fitness & health goals",
    detailedDescription: "Mobile app to track workouts, nutrition, and goals.",
    technologies: ["React Native", "Firebase"],
    duration: "3 months",
    client: "Fitness Startup",
    featured: false,
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    image: "https://via.placeholder.com/400x300?text=Fitness+App",
    description: "Track fitness & health goals",
    detailedDescription: "Mobile app to track workouts, nutrition, and goals.",
    technologies: ["React Native", "Firebase"],
    duration: "3 months",
    client: "Fitness Startup",
    featured: false,
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    image: "https://via.placeholder.com/400x300?text=Fitness+App",
    description: "Track fitness & health goals",
    detailedDescription: "Mobile app to track workouts, nutrition, and goals.",
    technologies: ["React Native", "Firebase"],
    duration: "3 months",
    client: "Fitness Startup",
    featured: false,
  },
  {
    id: 5,
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "https://via.placeholder.com/400x300?text=Corporate+Design",
    description: "UX-focused website overhaul",
    detailedDescription: "Revamped UI for better conversion & engagement.",
    technologies: ["Figma", "Adobe XD"],
    duration: "2 months",
    client: "Corporate Client",
    featured: false,
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "https://via.placeholder.com/400x300?text=Corporate+Design",
    description: "UX-focused website overhaul",
    detailedDescription: "Revamped UI for better conversion & engagement.",
    technologies: ["Figma", "Adobe XD"],
    duration: "2 months",
    client: "Corporate Client",
    featured: false,
  },
  {
    id: 7,
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "https://via.placeholder.com/400x300?text=Corporate+Design",
    description: "UX-focused website overhaul",
    detailedDescription: "Revamped UI for better conversion & engagement.",
    technologies: ["Figma", "Adobe XD"],
    duration: "2 months",
    client: "Corporate Client",
    featured: false,
  },
  {
    id: 8,
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "https://via.placeholder.com/400x300?text=Corporate+Design",
    description: "UX-focused website overhaul",
    detailedDescription: "Revamped UI for better conversion & engagement.",
    technologies: ["Figma", "Adobe XD"],
    duration: "2 months",
    client: "Corporate Client",
    featured: false,
  },
  {
    id: 9,
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "https://via.placeholder.com/400x300?text=Corporate+Design",
    description: "UX-focused website overhaul",
    detailedDescription: "Revamped UI for better conversion & engagement.",
    technologies: ["Figma", "Adobe XD"],
    duration: "2 months",
    client: "Corporate Client",
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
    <div className="bg-gray-100 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-800 to-blue-800 text-white py-24 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold">Our Projects</h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Explore how Nile Digital delivers impactful digital solutions.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 shadow ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800"
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
