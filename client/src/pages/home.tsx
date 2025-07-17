import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingBackground from "@/components/ui/floating-background";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import StatisticsSection from "@/components/sections/statistics-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import PartnersSection from "@/components/sections/partners-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
