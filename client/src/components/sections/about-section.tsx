import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600"
              alt="Professional IT Support Team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                CloudResolve is a leading independent IT support provider working with companies across the UK. We deliver cost-effective services and bespoke solutions to SMB, mid-market and corporate businesses.
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Ideal for anyone seeking first-class IT support, our team always listens closely to your unique business requirements, so we can recommend the best solutions from our extensive and fully customisable portfolio.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Benefit from impartial and unbiased advice.</strong>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our IT support involves providing a comprehensive evaluation of your current technologies, after which we can recommend the best solutions for your future needs. Our goal is always to provide tailored solutions that align with your business goals, while ensuring you enjoy the best value for your business.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                CloudResolve ensures your business receives the finest quality support at all times. No matter the size of your business, we have packages to suit various needs.
              </p>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-sm transition-all mt-6"
                size="lg"
              >
                REQUEST A BROCHURE
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;