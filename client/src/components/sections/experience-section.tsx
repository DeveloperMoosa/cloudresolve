import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ExperienceSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Abstract Wave Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat wave-bg"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/2162843787/video/white-wave-lines-abstract-draped-background.jpg?s=640x640&k=20&c=vG-XgElRqESJ7_5bCmzVDhzMHtqwQ6KVoNLh_5oNKjQ=')`,
          filter: 'brightness(0.95) contrast(1.1)',
          opacity: 0.15
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 to-gray-50/95" />

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
      </div>
    </section>
  );
};

export default ExperienceSection;