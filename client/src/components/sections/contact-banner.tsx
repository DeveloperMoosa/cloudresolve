import { Phone, Mail } from "lucide-react";

const ContactBanner = () => {
  return (
    <section className="bg-red-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <div>
              <span className="text-lg font-semibold">Call us on: </span>
              <a href="tel:02035976100" className="text-lg font-bold hover:underline">
                020 3597 6100
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            <a href="mailto:info@cloudresolve.com" className="text-lg font-bold hover:underline">
              info@cloudresolve.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;