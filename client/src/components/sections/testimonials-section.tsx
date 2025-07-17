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
    <section className="py-20 bg-white">
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
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
              alt="IT Support Excellence"
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
                Choose our award-winning IT services and you will have a proactive team to quickly resolve issues. We are dedicated to preventing unwanted downtime and are highly knowledgeable when it comes to the latest technologies.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Customer satisfaction is at the forefront of everything we do. But don't just take our word for it- please see for yourself.
              </p>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-sm transition-all mt-6"
                size="lg"
              >
                SEE REVIEWS
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-red-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Great IT solutions and advice. They can work remotely so do not need to visit in most cases, thus providing instant or rapid solutions."
              </p>
              <p className="font-semibold text-gray-900">Jeremy MJ Havard</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-red-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Worked with CloudResolve for several years. Adrian provides expert knowledge together with excellent service. Would not hesitate to recommend."
              </p>
              <p className="font-semibold text-gray-900">Roose</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-6 h-6 text-red-600 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Excellent IT support, fast, friendly & knowledgeable! Highly recommended."
              </p>
              <p className="font-semibold text-gray-900">Nick B</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;