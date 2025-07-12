import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 127, 255, 0.8), rgba(0, 51, 102, 0.8)), url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&h=1080')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-azure-blue/80 to-deep-navy/80"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Leading Independent IT Support Provider
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CloudResolve is a leading independent IT support provider supplying cost-effective services and bespoke solutions to small businesses.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-azure-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            size="lg"
          >
            QUICK QUOTE
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-azure-blue transition-all transform hover:scale-105"
            size="lg"
          >
            ABOUT US
          </Button>
        </motion.div>
        
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <p className="text-sm mb-2">Call us on:</p>
            <p className="text-2xl font-bold">020 3597 6100</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-2">Email us:</p>
            <a href="mailto:info@cloudresolve.com" className="text-xl hover:underline">
              info@cloudresolve.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
