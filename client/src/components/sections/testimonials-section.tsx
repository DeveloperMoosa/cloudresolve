import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

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

  const testimonials = [
    {
      text: "Great IT solutions and advice. They can work remotely so do not need to visit in most cases, thus providing instant or rapid solutions.",
      author: "Jeremy MJ Havard",
      role: "Business Owner",
    },
    {
      text: "Worked with CloudResolve for several years. They provide expert knowledge together with excellent service. Would not hesitate to recommend.",
      author: "Sarah Johnson",
      role: "Operations Manager",
    },
    {
      text: "Excellent IT support, fast, friendly & knowledgeable! Highly recommended for small business needs.",
      author: "Nick Brown",
      role: "Small Business Owner",
    },
  ];

  const StarRating = () => (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Experience honest, competent, and reliable IT support services tailored for small businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card bg-azure-50 p-8 rounded-xl hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <Quote className="text-2xl text-azure-blue mr-3" />
                <StarRating />
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-azure-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-azure-600 transition-colors transform hover:scale-105"
            size="lg"
          >
            SEE MORE REVIEWS
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
