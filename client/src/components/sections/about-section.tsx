import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

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

  const benefits = [
    "Benefit from impartial and unbiased advice",
    "Comprehensive evaluation of current technologies",
    "Tailored solutions aligned with business goals",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600"
              alt="Professional IT support team"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience The Difference: Trusted, Knowledgeable and Reliable IT Support
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              CloudResolve is a leading independent IT support provider working with small businesses across the UK. We deliver cost-effective services and bespoke solutions tailored specifically for SMB requirements.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Ideal for anyone seeking first-class IT support, our team always listens closely to your unique business requirements, so we can recommend the best solutions from our extensive and fully customisable portfolio.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-azure-blue text-xl mr-3 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-azure-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-azure-600 transition-colors transform hover:scale-105"
              size="lg"
            >
              REQUEST A BROCHURE
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
