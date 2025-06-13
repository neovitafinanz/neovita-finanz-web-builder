
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import LoanRequestForm from "@/components/LoanRequestForm";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="accueil">
          <HeroCarousel />
        </section>

        {/* Quick Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Bienvenue chez Neovita Finanz</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Votre partenaire de confiance pour tous vos projets de financement. 
                Découvrez nos solutions personnalisées et notre expertise reconnue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Link to="/services" className="group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🏠
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Nos Services</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Découvrez notre gamme complète de solutions de financement
                  </p>
                </div>
              </Link>
              
              <Link to="/simulation" className="group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    📊
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Simulation</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Calculez vos mensualités et estimez votre capacité d'emprunt
                  </p>
                </div>
              </Link>
              
              <Link to="/about" className="group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                  <div className="w-16 h-16 bg-gray-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    👥
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">À propos</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Apprenez-en plus sur notre histoire et notre expertise
                  </p>
                </div>
              </Link>
              
              <Link to="/contact" className="group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    📞
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Contact</h3>
                  <p className="text-gray-600 text-center text-sm">
                    Prenez rendez-vous avec nos conseillers experts
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Numbers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Neovita Finanz en chiffres</h2>
              <p className="text-lg text-gray-600">La confiance de nos clients se mesure</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
                <div className="text-gray-600">Dossiers traités</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Taux de satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24h</div>
                <div className="text-gray-600">Délai de réponse</div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Request Form */}
        <LoanRequestForm />

        {/* FAQ Section */}
        <FAQSection />

        {/* Partners Section */}
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
