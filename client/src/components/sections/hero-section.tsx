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
      className="relative h-screen overflow-hidden"
    >
      {/* Background Video - London Landmarks */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      >
        <source
          src="https://cdn.pixabay.com/video/2018/02/14/14885-256743893_large.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.pixabay.com/video/2016/08/04/4683-174128305_large.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Dark overlay to match SilverCloud style */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Main hero content matching SilverCloud layout exactly */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-white max-w-3xl">
            <motion.p
              className="text-lg md:text-xl mb-4 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CloudResolve is a leading independent UK IT support provider supplying cost-effective services and bespoke solutions to SMB, mid-market and corporate businesses.
            </motion.p>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leading independent UK IT support provider
            </motion.h1>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all"
                size="lg"
              >
                QUICK QUOTE
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all rounded-sm"
                size="lg"
              >
                ABOUT US
              </Button>
            </motion.div>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Call us on: 020 3597 6100</h3>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl">
                  <a href="mailto:info@cloudresolve.com" className="hover:underline">
                    info@cloudresolve.com
                  </a>
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
