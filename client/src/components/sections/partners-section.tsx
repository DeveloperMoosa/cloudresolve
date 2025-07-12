import { motion } from "framer-motion";
import { SiApple, SiGoogle } from "react-icons/si";
import { Server, Shield, Cloud, Building2 } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    { icon: Building2, name: "Microsoft" },
    { icon: SiApple, name: "Apple" },
    { icon: SiGoogle, name: "Google" },
    { icon: Server, name: "Server Solutions" },
    { icon: Shield, name: "Security Partners" },
    { icon: Cloud, name: "Cloud Providers" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Partners</h2>
          <p className="text-lg text-gray-600">We work with industry-leading technology providers</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              <partner.icon 
                className="text-4xl text-gray-400 hover:text-azure-blue transition-colors" 
                title={partner.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
