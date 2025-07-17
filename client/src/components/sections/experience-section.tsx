import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience The Difference: Trusted, Knowledgeable and Reliable IT Support
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Based in the capital, CloudResolve works with both businesses and remote workers who need first-class IT services throughout the UK.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our solutions include reduced licensing expenses across Microsoft 365 and Google packages, enabling you to maximise your savings while meeting your growing business needs.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
              alt="IT Support Experience"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-red-600">20</div>
              <div className="text-lg font-medium text-gray-900">Years Experience Providing</div>
              <div className="text-lg font-medium text-gray-900">IT Support</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-red-600">1</div>
              <div className="text-lg font-medium text-gray-900">Hour Average</div>
              <div className="text-lg font-medium text-gray-900">Response Time</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-red-600">10</div>
              <div className="text-lg font-medium text-gray-900">Years Average Customer Relationships</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-red-600">24/7</div>
              <div className="text-lg font-medium text-gray-900">In-house</div>
              <div className="text-lg font-medium text-gray-900">IT Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;