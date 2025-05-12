// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Parallax } from "react-parallax";
// import Tilt from "react-parallax-tilt";
// import CarouselEffect from "../components/carousel/CarouselEffect";

// import {
//   FaCode,
//   FaMobile,
//   FaHospital,
//   FaPalette,
//   FaChartLine,
//   FaAd,
//   FaRobot,
//   FaShieldAlt,
//   FaBrain,
//   FaLock,
//   FaPencilRuler,
//   FaGraduationCap,
//   FaShoppingCart,
//   FaRocket,
//   FaMapMarkerAlt,
//   FaGlobe,
// } from "react-icons/fa";
// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };
// const serviceImages = {
//   "AI-Driven Solutions":
//     "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//   "Website Penetration Testing":
//     "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//   "Graphic Design":
//     "https://images.unsplash.com/photo-1626785774625-0b1c2c4efd7c",
//   "School Management System":
//     "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
//   "E-Commerce Website":
//     "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
//   "Bot Development":
//     "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
// };

// const services = [
//   {
//     icon: <FaBrain className="text-4xl text-blue-600" />,
//     title: "AI-Driven Solutions",
//     description:
//       "Intelligent automation and smart solutions powered by cutting-edge AI technology.",
//   },
//   {
//     icon: <FaLock className="text-4xl text-blue-600" />,
//     title: "Website Penetration Testing",
//     description:
//       "Comprehensive security assessment and vulnerability testing for your web applications.",
//   },
//   {
//     icon: <FaPencilRuler className="text-4xl text-blue-600" />,
//     title: "Graphic Design",
//     description:
//       "Creative and professional design solutions for your brand identity and marketing materials.",
//   },
//   {
//     icon: <FaGraduationCap className="text-4xl text-blue-600" />,
//     title: "School Management System",
//     description:
//       "Complete digital solution for educational institutions to manage operations efficiently.",
//   },
//   {
//     icon: <FaShoppingCart className="text-4xl text-blue-600" />,
//     title: "E-Commerce Website",
//     description:
//       "Custom online stores with secure payment integration and inventory management.",
//   },
//   {
//     icon: <FaRocket className="text-4xl text-blue-600" />,
//     title: "Bot Development",
//     description:
//       "Automated solutions and chatbots for enhanced customer service and business processes.",
//   },
//   // ... existing services ...
// ];
// const stats = [
//   { number: "50+", label: "Projects Completed" },
//   { number: "40+", label: "Happy Clients" },
//   { number: "10+", label: "Team Experts" },
// ];
// const Home = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <div className="min-h-screen">
//       <div className="h-[80vh]">
//         <CarouselEffect />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             className="text-center text-white"
//           >
//             <h1 className="text-6xl md:text-7xl font-bold mb-6">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//                 Transform Your Digital Vision
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-8">
//               Innovative Solutions for Tomorrow's Challenges
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
//             >
//               Get Started
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//       <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white relative overflow-hidden">
//         {/* 3D Background Effect */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
//           <div className="grid grid-cols-8 gap-4 transform -skew-y-12 opacity-20">
//             {[...Array(64)].map((_, i) => (
//               <div
//                 key={i}
//                 className="h-24 bg-blue-500/10 rounded-lg transform hover:translate-y-1 transition-transform"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <div className="relative w-full h-32 overflow-hidden">
//         <div className="absolute w-full h-full">
//           <svg
//             className="absolute bottom-0 w-full h-full transform"
//             viewBox="0 0 1440 320"
//             preserveAspectRatio="none"
//             style={{
//               transform: "rotateY(180deg)",
//               filter: "drop-shadow(0 -20px 20px rgba(0,0,0,0.1))",
//             }}
//           >
//             <path
//               fill="#111827"
//               fillOpacity="1"
//               d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
//             ></path>
//           </svg>
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "linear-gradient(45deg, rgba(37,99,235,0.1) 0%, rgba(147,51,234,0.1) 100%)",
//               transform: "perspective(1000px) rotateX(5deg)",
//               transformStyle: "preserve-3d",
//               backfaceVisibility: "hidden",
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-gradient-to-r from-gray-900 to-gray-100 py-16 text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//               Pioneering digital transformation in East Africa, we're your
//               trusted partner for innovative technology solutions. From our base
//               in the historic city of Harar, Ethiopia, we're building the future
//               of digital excellence solutions.
//             </p>
//             <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-8">
//               <div className="container mx-auto px-4">
//                 <div className="flex justify-center items-center space-x-8 text-white">
//                   <div className="flex items-center">
//                     <FaMapMarkerAlt className="text-blue-400 mr-2" />
//                     <span>Harar, Ethiopia</span>
//                   </div>
//                   <div className="flex items-center">
//                     <FaGlobe className="text-blue-400 mr-2" />
//                     <span>Serving Globally</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white py-12 -mt-20 relative z-10">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
//               >
//                 <h3 className="text-5xl font-bold text-blue-600 mb-2">
//                   {stat.number}
//                 </h3>
//                 <p className="text-gray-600 text-lg">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}

//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">
//           What We Can Do For You
//         </h2>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           Services we can help you with
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
//         {services.map((service, index) => (
//           <Tilt
//             key={index}
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//             perspective={2000}
//             scale={1.02}
//             transitionSpeed={2000}
//             gyroscope={true}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative h-[400px] group rounded-2xl overflow-hidden"
//             >
//               {/* Background Image Layer */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
//                 style={{
//                   backgroundImage: `url(${serviceImages[service.title]})`,
//                 }}
//               />

//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/90 group-hover:from-black/60 group-hover:to-black/90 transition-all duration-500" />

//               {/* Content */}
//               <div className="relative h-full p-8 flex flex-col justify-between transform transition-transform duration-500">
//                 <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
//                   <div className="text-white/90 mb-4 transform group-hover:scale-110 transition-transform duration-300 text-5xl">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold mb-3 text-white">
//                     {service.title}
//                   </h3>
//                 </div>

//                 <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                   <p className="text-gray-200 text-lg leading-relaxed">
//                     {service.description}
//                   </p>
//                   <button className="mt-6 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-colors duration-300">
//                     Learn More →
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </Tilt>
//         ))}
//       </div>
//       {/* After the services section and before the video section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Our Impact Since 2022
//             </h2>
//             <p className="text-xl text-gray-600">Track Record of Excellence</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <FaMobile className="text-3xl text-blue-600" />
//                 <div className="text-right">
//                   <div className="text-4xl font-bold text-gray-800">20+</div>
//                   <div className="text-sm text-blue-600">In Progress: 4</div>
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Mobile Apps
//               </h3>
//               <div className="mt-2 h-2 bg-gray-200 rounded-full">
//                 <div
//                   className="h-full bg-blue-600 rounded-full"
//                   style={{ width: "83%" }}
//                 ></div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <FaCode className="text-3xl text-blue-600" />
//                 <div className="text-right">
//                   <div className="text-4xl font-bold text-gray-800">35+</div>
//                   <div className="text-sm text-blue-600">In Progress: 6</div>
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Web Applications
//               </h3>
//               <div className="mt-2 h-2 bg-gray-200 rounded-full">
//                 <div
//                   className="h-full bg-blue-600 rounded-full"
//                   style={{ width: "85%" }}
//                 ></div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <FaRobot className="text-3xl text-blue-600" />
//                 <div className="text-right">
//                   <div className="text-4xl font-bold text-gray-800">15+</div>
//                   <div className="text-sm text-blue-600">In Progress: 3</div>
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">
//                 AI Solutions
//               </h3>
//               <div className="mt-2 h-2 bg-gray-200 rounded-full">
//                 <div
//                   className="h-full bg-blue-600 rounded-full"
//                   style={{ width: "80%" }}
//                 ></div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <FaShieldAlt className="text-3xl text-blue-600" />
//                 <div className="text-right">
//                   <div className="text-4xl font-bold text-gray-800">25+</div>
//                   <div className="text-sm text-blue-600">In Progress: 5</div>
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Security Solutions
//               </h3>
//               <div className="mt-2 h-2 bg-gray-200 rounded-full">
//                 <div
//                   className="h-full bg-blue-600 rounded-full"
//                   style={{ width: "82%" }}
//                 ></div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 text-center">
//             <div className="inline-block bg-blue-50 rounded-lg p-6">
//               <p className="text-lg text-gray-700">
//                 <span className="font-semibold">2 Years of Excellence:</span>{" "}
//                 Since our establishment in 2022, we've successfully delivered{" "}
//                 <span className="text-blue-600 font-bold">95+</span> projects
//                 and currently working on{" "}
//                 <span className="text-blue-600 font-bold">18</span> new
//                 innovations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* After the impact section and before the end */}
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
//         >
//           {/* Video Section with 3D Effect */}
//           <Tilt
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//             perspective={2000}
//             scale={1.02}
//             transitionSpeed={2000}
//             className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-1"
//           >
//             <div className="relative w-full h-full rounded-xl overflow-hidden backdrop-blur-sm">
//               <iframe
//                 width="914"
//                 height="514"
//                 src="https://www.youtube.com/embed/HPCW_CSKy3o"
//                 title="Our Services at 📲 Nile Technology Solutions"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//                 className="w-full h-full object-cover"
//               ></iframe>
//             </div>
//           </Tilt>

//           {/* Content Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
//               Innovation Meets Excellence
//             </h2>
//             <p className="text-gray-300 text-lg leading-relaxed mb-8 backdrop-blur-sm">
//               At Nile Technology Solutions, we're driven by innovation and
//               committed to delivering excellence. Our journey began with a
//               vision to transform businesses through cutting-edge technology
//               solution.
//             </p>

//             {/* CEO Card with Glass Effect */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 backdrop-blur-md p-6 rounded-xl mb-8 border border-gray-700/50"
//             >
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="relative">
//                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
//                   <img
//                     src="https://niletech.co/wp-content/uploads/2024/09/ANWAR.jpg"
//                     alt="CEO Name"
//                     className="relative w-16 h-16 rounded-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold">Anwar Mohammed</h3>
//                   <p className="text-blue-400">Founder & CEO</p>
//                 </div>
//               </div>
//               <p className="text-gray-300 italic">
//                 "Our mission is to empower businesses with innovative digital
//                 solutions that drive growth and success in the modern world."
//               </p>
//             </motion.div>

//             {/* Enhanced Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-500"
//             >
//               <span className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></span>
//               <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
//                 <FaRocket className="animate-pulse" />
//               </span>
//               <span className="text-sm font-medium transition-all group-hover:mr-4">
//                 Meet Our Leadership Team
//               </span>
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Vision, Mission, Values Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {[
//             {
//               icon: FaRocket,
//               title: "Our Vision",
//               text: "To be the leading technology solutions provider in Africa",
//             },
//             {
//               icon: FaChartLine,
//               title: "Our Mission",
//               text: "Delivering innovative solutions that transform businesses",
//             },
//             {
//               icon: FaShieldAlt,
//               title: "Our Values",
//               text: "Innovation, Integrity, Excellence, Customer Focus",
//             },
//           ].map((item, index) => (
//             <Tilt
//               key={index}
//               tiltMaxAngleX={15}
//               tiltMaxAngleY={15}
//               perspective={3000}
//               scale={1.02}
//               transitionSpeed={2000}
//             >
//               <motion.div
//                 whileHover={{ y: -10 }}
//                 className="text-center p-8 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-800/30 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
//               >
//                 <div className="text-blue-400 text-4xl mb-4 transform hover:scale-110 transition-transform">
//                   <item.icon />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-300">{item.text}</p>
//               </motion.div>
//             </Tilt>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react'

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

export default Home
