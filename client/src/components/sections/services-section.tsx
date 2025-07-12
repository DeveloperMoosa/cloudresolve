import { motion } from "framer-motion";
import { Server, Shield, Headphones, Network, Cloud } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: "Microsoft 365 & Backup",
      description: "Complete Microsoft 365 setup, management, and backup solutions for seamless productivity.",
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Professional server setup, maintenance, and monitoring to keep your business running smoothly.",
    },
    {
      icon: Shield,
      title: "Enhanced Security Monitoring 365",
      description: "24/7 security monitoring and threat protection to safeguard your business data.",
    },
    {
      icon: Headphones,
      title: "ServiceDesk IT Support",
      description: "Dedicated helpdesk support with rapid response times for all your IT needs.",
    },
    {
      icon: Network,
      title: "Network Management",
      description: "Complete network infrastructure design, implementation, and ongoing management.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure cloud migration and management services to modernize your business operations.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Wide Range Of IT Support Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive IT solutions designed specifically for small business success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-xl bg-azure-50 hover:bg-azure-100 transition-all transform hover:scale-105 service-icon"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="mb-6 flex justify-center"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <service.icon className="text-6xl text-azure-blue" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
