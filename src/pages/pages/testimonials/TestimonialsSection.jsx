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

const TestimonialsSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <section className={css.section__container}>
       
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

        <h1 className="text-white">What our customers say</h1>
        <h2 className="text-white">Testimonials</h2>
        <div className={css.section__grid}>
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default TestimonialsSection;
