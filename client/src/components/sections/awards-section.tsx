import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const AwardsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Award Winning
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are a multi-award-winning company, recently honoured as the Best IT Support Firm 2023 in London at the Technology Innovator Awards 2023. We are also proud winners of the Culture 100 Awards 2024, this prestigious recognition celebrates the best companies to work for in the UK. Discover how we can support your business with cutting-edge solutions and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="text-center p-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Best IT Support Firm 2023 in London
            </h3>
            <p className="text-lg text-gray-700">
              Technology Innovator Awards 2023
            </p>
          </motion.div>

          <motion.div
            className="text-center p-8 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Star className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Culture 100
            </h3>
            <p className="text-lg text-gray-700">
              The UK's Best Company to work for 2024
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;