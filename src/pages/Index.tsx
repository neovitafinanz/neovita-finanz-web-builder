
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import LoanSimulator from "@/components/LoanSimulator";
import LoanRequestForm from "@/components/LoanRequestForm";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="accueil">
          <HeroCarousel />
        </section>
        <ServicesSection />
        <section id="simulation">
          <LoanSimulator />
        </section>
        <LoanRequestForm />
        <section id="a-propos">
          <WhyChooseSection />
        </section>
        <TestimonialsSection />
        <FAQSection />
        <section id="contact">
          <ContactSection />
        </section>
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
