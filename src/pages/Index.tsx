import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
// import AboutSection from '@/components/sections/AboutSection';
import About from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";



const Index = () => {
  return (
    <div className="bg-akcess-black text-white min-h-screen">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <About />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;