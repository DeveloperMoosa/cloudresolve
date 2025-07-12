import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best IT Support Firm 2024",
      subtitle: "Small Business Technology Awards 2024",
    },
    {
      icon: Medal,
      title: "Excellence in Service",
      subtitle: "The UK's Best Small Business IT Provider 2024",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Award Winning</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are a multi-award-winning company, recognized as the Best IT Support Firm for Small Business 2024.
            We are also proud winners of the Excellence in Service Awards 2024, celebrating the best small business IT support providers in the UK.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-24 h-24 bg-azure-blue rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <award.icon className="text-3xl text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
