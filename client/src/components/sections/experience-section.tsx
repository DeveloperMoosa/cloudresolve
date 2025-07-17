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
              Silver Cloud is a leading independent IT support provider working with companies across the UK. We deliver cost-effective services and bespoke solutions to SMB, mid-market and corporate businesses.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ideal for anyone seeking first-class IT support, our team always listens closely to your unique business requirements, so we can recommend the best solutions from our extensive and fully customisable portfolio.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
              Benefit from impartial and unbiased advice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our IT support involves providing a comprehensive evaluation of your current technologies, after which we can recommend the best solutions for your future needs. Our goal is always to provide tailored solutions that align with your business goals, while ensuring you enjoy the best value for your business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Silver Cloud ensures your business receives the finest quality support at all times. No matter the size of your business, we have packages to suit various needs.
            </p>
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
              <div className="text-5xl md:text-6xl font-bold" style={{ color: 'hsl(207, 90%, 49%)' }}>20</div>
              <div className="text-lg font-medium text-gray-900">Years Experience Providing</div>
              <div className="text-lg font-medium text-gray-900">IT Support</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold" style={{ color: 'hsl(207, 90%, 49%)' }}>1</div>
              <div className="text-lg font-medium text-gray-900">Hour Average</div>
              <div className="text-lg font-medium text-gray-900">Response Time</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold" style={{ color: 'hsl(207, 90%, 49%)' }}>10</div>
              <div className="text-lg font-medium text-gray-900">Years Average Customer Relationships</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold" style={{ color: 'hsl(207, 90%, 49%)' }}>24/7</div>
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