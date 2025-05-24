import TestimonialCard from "./TestimonialCard";
import css from "../../../styles/styles.module.css";
import user1 from "../../../assets/image/user1.png";
import user2 from "../../../assets/image/user2.jpg";
import user3 from "../../../assets/image/user3.png";
import user4 from "../../../assets/image/user4.png";
import user5 from "../../../assets/image/user5.png";
import { motion, AnimatePresence } from "framer-motion";
const testimonialData = [
  {
    title: "Love the simplicity",
    content:
      "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
    image: user1,
    name: "Abiy Adams",
    role: "Managing Director",
  },
  {
    title: "Excellent Designs",
    content:
      "Efficient, reliable, and results-oriented. Visually appealing website, improved online visibility. Highly recommended!",
    image: user2,
    name: "Baysa Tolasa",
    role: "Ceo & Founder",
  },
  {
    title: "Efficient and Reliable",
    content:
      "Best decision we made. Stunning website, exceptional support. Always available and prompt issue resolution. Hassle-free experience!",
    image: user3,
    name: "Tadase Adeyemi",
    role: "Fashion Designer",
    scroll,
  },
  {
    title: "Innovative Solutions",
    content:
      "Their creative approach and attention to detail transformed our online presence. The website perfectly captures our brand essence. Outstanding service!",
    image: user4,
    name: "Sarah Ahamd",
    role: "Marketing Director",
  },
  {
    title: "Outstanding Support",
    content:
      "Exceptional team that delivers beyond expectations. The website's performance and design have significantly improved our customer engagement. Truly remarkable!",
    image: user5,
    name: "Michael Elias",
    role: "Tech Entrepreneur",
  },
];

// ... imports remain the same ...

const TestimonialsSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">What our customers say</h1>
        <h2 className="text-xl md:text-2xl text-center mb-12 text-gray-300">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
