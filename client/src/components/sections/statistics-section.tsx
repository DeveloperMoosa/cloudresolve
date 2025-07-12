import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const StatisticsSection = () => {
  const [inView, setInView] = useState(false);

  const stats = [
    { value: 20, label: "Years Experience", suffix: "" },
    { value: 1, label: "Hour Average Response Time", suffix: "" },
    { value: 15, label: "Years Average Customer Relationships", suffix: "" },
  ];

  const AnimatedCounter = ({ 
    value, 
    duration = 2000 
  }: { 
    value: number; 
    duration?: number; 
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let startTime: number;
      const startValue = 0;
      const endValue = value;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          setCount(startValue + (endValue - startValue) * progress);
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }, [inView, value, duration]);

    return <span>{Math.floor(count)}</span>;
  };

  return (
    <section 
      className="py-20 bg-azure-blue parallax-bg relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 127, 255, 0.9), rgba(0, 51, 102, 0.9)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience Providing IT Support
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stats-counter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-bold mb-4">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Clock className="text-2xl text-white" />
          </motion.div>
          <p className="text-xl text-white">24/7 In-house IT Support</p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
