import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Abstract Wave Background - Same as Experience Section */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="testimonialWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(207, 90%, 49%)', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(207, 90%, 49%)', stopOpacity: 0.1 }} />
            </linearGradient>
            <linearGradient id="testimonialWaveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(207, 90%, 49%)', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(207, 90%, 49%)', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#testimonialWaveGradient)"
            d="M0,160 C320,300,420,240,560,160 C700,80,780,120,840,160 C900,200,960,240,1080,200 C1200,160,1280,120,1360,160 L1440,200 L1440,320 L0,320 Z"
            className="wave-animation"
          />
          <path
            fill="url(#testimonialWaveGradient2)"
            d="M0,200 C160,160,320,240,480,200 C640,160,800,100,960,140 C1120,180,1280,220,1440,180 L1440,320 L0,320 Z"
            className="wave-animation-delayed"
          />
          <path
            fill="url(#testimonialWaveGradient)"
            d="M0,100 C240,180,480,60,720,100 C960,140,1200,180,1440,120 L1440,320 L0,320 Z"
            className="wave-animation"
            style={{ opacity: 0.5 }}
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          {/* Content Section without image */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Experience honest, competent, and reliable IT support services tailored for both businesses and homes.
              </h2>
              
              <h3 className="text-2xl font-bold text-gray-900">
                Experienced - 20 years of providing unparalleled IT support.
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We prioritise our customers needs, budget, security and compliance.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900">
                Over 20 years of unbeatable IT support
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We appreciate that your IT system is crucial to the success of your business. It's pivotal to how well your team communicates and operates.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Choose our IT services and you will have a proactive team to quickly resolve issues. We are dedicated to preventing unwanted downtime and are highly knowledgeable when it comes to the latest technologies.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Customer satisfaction is at the forefront of everything we do. But don't just take our word for it- please see for yourself.
              </p>
              

            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid with Rotating Animation */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg rotate-card"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-azure-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                "Great IT solutions and advice. They can work remotely so do not need to visit in most cases, thus providing instant or rapid solutions."
              </p>
              <p className="font-semibold text-gray-900">Jeremy MJ Havard</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg rotate-card"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-azure-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                "Worked with CloudResolve for several years. Adrian provides expert knowledge together with excellent service. Would not hesitate to recommend."
              </p>
              <p className="font-semibold text-gray-900">Roose</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg rotate-card"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-azure-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                "Excellent IT support, fast, friendly & knowledgeable! Highly recommended."
              </p>
              <p className="font-semibold text-gray-900">Nick B</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg rotate-card"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-azure-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                "Outstanding service! The team is always available and resolves issues quickly. Their proactive approach has saved us from potential downtime multiple times."
              </p>
              <p className="font-semibold text-gray-900">Sarah Thompson</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg rotate-card"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-azure-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                "Professional, reliable, and knowledgeable. They've transformed our IT infrastructure and continue to provide excellent ongoing support."
              </p>
              <p className="font-semibold text-gray-900">Michael Chen</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg rotate-card"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-azure-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                "Best IT support we've ever had! Quick response times, clear communication, and they always go the extra mile to ensure everything runs smoothly."
              </p>
              <p className="font-semibold text-gray-900">Emma Williams</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg rotate-card"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-azure-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                "Highly professional team with deep technical expertise. They've helped us modernize our systems and improve security significantly."
              </p>
              <p className="font-semibold text-gray-900">David Rodriguez</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg rotate-card"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-azure-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm">
                "Exceptional support team! They understand our business needs and provide tailored solutions that actually work. Couldn't be happier!"
              </p>
              <p className="font-semibold text-gray-900">Lisa Anderson</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;