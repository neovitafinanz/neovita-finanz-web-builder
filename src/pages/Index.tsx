
import React from 'react';
import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
import ServicesSection from '@/components/ServicesSection';
import LoanSimulator from '@/components/LoanSimulator';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <LoanSimulator />
        <WhyChooseSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
