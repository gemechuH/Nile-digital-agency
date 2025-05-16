import TestimonialCard from "./TestimonialCard";
import css from "../../../styles/styles.module.css";
import user1 from "../../../assets/image/user1.png";
import user2 from "../../../assets/image/user2.png";
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
    name: "Allan Collins",
    role: "Managing Director",
  },
  {
    title: "Excellent Designs",
    content:
      "Efficient, reliable, and results-oriented. Visually appealing website, improved online visibility. Highly recommended!",
    image: user2,
    name: "Tanya Grant",
    role: "Ceo & Founder",
  },
  {
    title: "Efficient and Reliable",
    content:
      "Best decision we made. Stunning website, exceptional support. Always available and prompt issue resolution. Hassle-free experience!",
    image: user3,
    name: "Clay Washington",
    role: "Fashion Designer",
    scroll,
  },
  {
    title: "Innovative Solutions",
    content:
      "Their creative approach and attention to detail transformed our online presence. The website perfectly captures our brand essence. Outstanding service!",
    image: user4,
    name: "Sarah Martinez",
    role: "Marketing Director",
  },
  {
    title: "Outstanding Support",
    content:
      "Exceptional team that delivers beyond expectations. The website's performance and design have significantly improved our customer engagement. Truly remarkable!",
    image: user5,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
  },
];

const TestimonialsSection = () => {
  return (
    <section className={css.section__container}>
      <div className="absolute inset-0 min-h-screen overflow-hidden bg-gray-900">
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
      <h2>Testimonials</h2>
      <h1>What our customers say</h1>
      <div className={css.section__grid}>
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
