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
        <div className="max-w-4xl mx-auto">
          {/* Content Section - Centered */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-center">
                CloudResolve is a leading independent IT support provider working with companies across the UK. We deliver cost-effective services and bespoke solutions to SMB, mid-market and corporate businesses.
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Ideal for anyone seeking first-class IT support, our team always listens closely to your unique business requirements, so we can recommend the best solutions from our extensive and fully customisable portfolio.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                <strong>Benefit from impartial and unbiased advice.</strong>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Our IT support involves providing a comprehensive evaluation of your current technologies, after which we can recommend the best solutions for your future needs. Our goal is always to provide tailored solutions that align with your business goals, while ensuring you enjoy the best value for your business.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                CloudResolve ensures your business receives the finest quality support at all times. No matter the size of your business, we have packages to suit various needs.
              </p>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="text-white px-8 py-3 text-lg font-semibold rounded-sm transition-all mt-6 mx-auto block"
                style={{ backgroundColor: 'hsl(207, 90%, 49%)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 44%)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 90%, 49%)'}
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