import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Network Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="hsl(207, 90%, 49%)" opacity="0.5"/>
              <circle cx="80" cy="20" r="2" fill="hsl(207, 90%, 49%)" opacity="0.5"/>
              <circle cx="50" cy="50" r="2" fill="hsl(207, 90%, 49%)" opacity="0.5"/>
              <circle cx="20" cy="80" r="2" fill="hsl(207, 90%, 49%)" opacity="0.5"/>
              <circle cx="80" cy="80" r="2" fill="hsl(207, 90%, 49%)" opacity="0.5"/>
              
              <line x1="20" y1="20" x2="50" y2="50" stroke="hsl(207, 90%, 49%)" strokeWidth="1" opacity="0.3"/>
              <line x1="50" y1="50" x2="80" y2="20" stroke="hsl(207, 90%, 49%)" strokeWidth="1" opacity="0.3"/>
              <line x1="20" y1="80" x2="50" y2="50" stroke="hsl(207, 90%, 49%)" strokeWidth="1" opacity="0.3"/>
              <line x1="50" y1="50" x2="80" y2="80" stroke="hsl(207, 90%, 49%)" strokeWidth="1" opacity="0.3"/>
              <line x1="20" y1="20" x2="20" y2="80" stroke="hsl(207, 90%, 49%)" strokeWidth="1" opacity="0.2"/>
              <line x1="80" y1="20" x2="80" y2="80" stroke="hsl(207, 90%, 49%)" strokeWidth="1" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Experience The Difference: Trusted, Knowledgeable and Reliable IT Support
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            Silver Cloud is a leading independent IT support provider working with companies across the UK. We deliver cost-effective services and bespoke solutions to SMB, mid-market and corporate businesses.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            Ideal for anyone seeking first-class IT support, our team always listens closely to your unique business requirements, so we can recommend the best solutions from our extensive and fully customisable portfolio.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold text-center">
            Benefit from impartial and unbiased advice.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Our IT support involves providing a comprehensive evaluation of your current technologies, after which we can recommend the best solutions for your future needs. Our goal is always to provide tailored solutions that align with your business goals, while ensuring you enjoy the best value for your business.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Silver Cloud ensures your business receives the finest quality support at all times. No matter the size of your business, we have packages to suit various needs.
          </p>
          
          <Button
            className="text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all"
            style={{ backgroundColor: 'hsl(207, 90%, 49%)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 44%)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)'}
            size="lg"
          >
            REQUEST A BROCHURE
          </Button>
        </motion.div>

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