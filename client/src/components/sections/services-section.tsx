import { motion } from "framer-motion";
import { Cloud, Monitor, Server, Shield, Users, Network } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: "Microsoft Office",
      subtitle: "365 & Backup for Office 365",
      delay: 0.1
    },
    {
      icon: Monitor,
      title: "ServiceDesk",
      subtitle: "IT Support",
      delay: 0.2
    },
    {
      icon: Server,
      title: "Server",
      subtitle: "Management",
      delay: 0.3
    },
    {
      icon: Network,
      title: "Network",
      subtitle: "Management",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Enhanced security",
      subtitle: "monitoring 365",
      delay: 0.5
    },
    {
      icon: Shield,
      title: "Security &",
      subtitle: "Monitoring",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Wide Range Of IT Support Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-8 rounded-lg hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors"
                  style={{ backgroundColor: 'hsl(207, 100%, 93%)', '--hover-bg': 'hsl(207, 100%, 87%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 100%, 87%)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(207, 100%, 93%)'}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-10 h-10" style={{ color: 'hsl(207, 90%, 49%)' }} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700">
                  {service.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;