import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import ServicesSection from "@/components/sections/services-section";
import AwardsSection from "@/components/sections/awards-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import PartnersSection from "@/components/sections/partners-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <AwardsSection />
      <TestimonialsSection />
      <ContactSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
