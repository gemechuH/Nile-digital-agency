import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const colors = [
    "bg-blue-500/10",
    "bg-purple-500/10",
    "bg-cyan-500/10",
    "bg-indigo-500/10",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${colors[i % colors.length]} rounded-full blur-sm`}
          style={{
            width: Math.random() * 20 + 50,
            height: Math.random() * 20 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 75],
            y: [0, Math.random() * 100 - 75],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 100 + Math.random() * 100,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
