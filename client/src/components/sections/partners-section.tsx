import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    "Microsoft",
    "Apple", 
    "Google",
    "Amazon",
    "HP",
    "Dell",
    "Cisco",
    "VMware",
    "Oracle",
    "Salesforce",
    "Trend Micro",
    "Mimecast"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted Partners & Technologies
          </h3>
        </motion.div>

        {/* Partner logos grid with continuous scrolling animation */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-16 items-center"
            animate={{
              x: [0, -1500],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the partners array to create seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner}-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg border grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg font-semibold text-gray-600 hover:text-red-600 transition-colors">
                  {partner}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;