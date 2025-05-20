import { motion } from "framer-motion";
import { FaBuilding, FaGlobe, FaLaptopCode } from "react-icons/fa";

const clientCategories = [
  {
    title: "Government Institutions",
    icon: <FaBuilding className="text-4xl text-blue-500" />,
    clients: [
      {
        name: "Ministry of Innovation and Technology",
        logo: "/assets/clients/minit-logo.png",
        description:
          "Digital transformation partnership for government services",
        project: "E-Government Portal Development",
      },
      {
        name: "Harari Regional State",
        logo: "/assets/clients/harari-logo.png",
        description: "Smart city initiatives and digital services",
        project: "Regional Digital Services Platform",
      },
      {
        name: "Ethiopian Airlines",
        logo: "/assets/clients/ethiopian-airlines-logo.png",
        description: "Digital solutions for aviation services",
        project: "Mobile App Development",
      },
    ],
  },
  {
    title: "Local Enterprises",
    icon: <FaLaptopCode className="text-4xl text-purple-500" />,
    clients: [
      {
        name: "Commercial Bank of Ethiopia",
        logo: "/assets/clients/cbe-logo.png",
        description: "Digital banking solutions",
        project: "Online Banking Platform",
      },
      {
        name: "Harar Digital Solutions",
        logo: "/assets/clients/harar-digital-logo.png",
        description: "Technology consulting and implementation",
        project: "Enterprise Resource Planning System",
      },
    ],
  },
  {
    title: "International Partners",
    icon: <FaGlobe className="text-4xl text-green-500" />,
    clients: [
      {
        name: "Global Tech Solutions",
        logo: "/assets/clients/global-tech-logo.png",
        description: "Cross-border technology collaboration",
        project: "AI-Powered Analytics Platform",
      },
      {
        name: "East African Technology Hub",
        logo: "/assets/clients/east-africa-tech-logo.png",
        description: "Regional technology partnership",
        project: "Regional Data Center Implementation",
      },
    ],
  },
];

const OurClient = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 text-center relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-white bg-clip-text">
            Our Trusted Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with leading organizations across Ethiopia and beyond
            to drive digital transformation
          </p>
        </div>
      </motion.section>

      {/* Client Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {clientCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-20"
            >
              <div className="flex items-center mb-10">
                {category.icon}
                <h2 className="text-3xl font-bold ml-4">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.clients.map((client, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-16 object-contain mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {client.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{client.description}</p>
                    <div className="bg-blue-500/20 rounded-lg p-3">
                      <span className="text-blue-400 font-medium">
                        Featured Project: {client.project}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with Nile Digital Agency to transform your digital presence
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurClient;
