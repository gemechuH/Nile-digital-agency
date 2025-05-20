import React, { useState } from "react";
import "../styles/Service.css";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom web solutions built with cutting-edge technologies. From responsive websites to complex web applications, we deliver scalable and performant solutions.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android platforms.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3",
    icon: "📱",
  },
  {
    id: 3,
    title: "UX/UI Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality. We create intuitive interfaces that engage and delight users.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Chatbot Solutions",
    description:
      "Intelligent conversational AI that enhances customer service and automates business processes with natural language processing.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3",
    icon: "🤖",
  },
  {
    id: 5,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets. We implement robust security measures and best practices.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3",
    icon: "🔒",
  },
  {
    id: 6,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies to improve your online visibility and drive organic traffic to your website.",
    image:
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3",
    icon: "📈",
  },
  {
    id: 7,
    title: "AI Solutions",
    description:
      "Custom AI and machine learning solutions that transform business processes and drive innovation.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3",
    icon: "🧠",
  },
  {
    id: 8,
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that build brand awareness and engage your target audience across platforms.",
    image:
      "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3",
    icon: "📱",
  },
  {
    id: 9,
    title: "Healthcare Solutions",
    description:
      "Digital healthcare solutions that streamline medical processes and improve patient care delivery.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
    icon: "⚕️",
  },
];

const ServiceCard = ({ service, onClick }) => (
  <div
    className="service-card group relative overflow-hidden rounded-2xl p-6 bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/95 transition-all duration-300 ease-in-out cursor-pointer"
    onClick={() => onClick(service)}
  >
    <div className="service-icon text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
      {service.icon}
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-gray-900">
      {service.title}
    </h3>
    <p className="text-white/90 group-hover:text-gray-700">
      {service.description}
    </p>
  </div>
);

const ServiceModal = ({ service, onClose }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <div className="flex flex-col gap-4">
        <div
          className="h-48 rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="flex items-center gap-3">
          <span className="text-3xl">{service.icon}</span>
          <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">{service.description}</p>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Custom solutions tailored to your needs</li>
            <li>Expert team with years of experience</li>
            <li>Modern technologies and best practices</li>
            <li>Ongoing support and maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text  mb-4 mt-4 text-white">
            Digital Services That Drive Growth.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our full range of smart digital solutions built to
            streamline your business, boost performance, and help you grow in
            today’s connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={setSelectedService}
            />
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Services;
