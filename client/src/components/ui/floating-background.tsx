import { motion } from "framer-motion";

const FloatingBackground = () => {
  const shapes = [
    { size: 128, top: "10%", left: "10%", delay: 0 },
    { size: 96, top: "25%", right: "20%", delay: 1 },
    { size: 160, bottom: "33%", left: "25%", delay: 2 },
    { size: 80, bottom: "20%", right: "10%", delay: 3 },
    { size: 64, top: "50%", left: "50%", delay: 4 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute bg-azure-blue rounded-full opacity-5"
          style={{
            width: shape.size,
            height: shape.size,
            ...shape,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;
