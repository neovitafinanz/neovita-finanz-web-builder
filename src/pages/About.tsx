
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section for About */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">À Propos de Neovita Finanz</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Découvrez notre histoire, nos valeurs et notre engagement à vous accompagner 
              dans la réalisation de vos projets financiers les plus importants.
            </p>
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Bureaux Neovita Finanz" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
                  <p className="text-gray-600 mb-4">
                    Fondée en 2008, Neovita Finanz est née de la volonté de démocratiser l'accès au financement 
                    et d'offrir un service personnalisé à chaque client. Depuis plus de 15 ans, nous accompagnons 
                    particuliers et professionnels dans leurs projets les plus ambitieux.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Notre expertise s'est construite au fil des années, nous permettant aujourd'hui de proposer 
                    une gamme complète de solutions de financement adaptées aux besoins actuels du marché.
                  </p>
                  <p className="text-gray-600">
                    Avec plus de 5000 dossiers traités et un taux de satisfaction client de 98%, 
                    nous sommes fiers d'être devenus une référence dans le secteur du financement.
                  </p>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Histoire de l'entreprise" 
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Équipe Neovita Finanz" 
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Équipe</h2>
                  <p className="text-gray-600 mb-4">
                    Notre équipe de conseillers financiers expérimentés met son expertise à votre service. 
                    Formés aux dernières évolutions du marché, ils vous accompagnent avec professionnalisme 
                    et bienveillance dans toutes vos démarches.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Chaque conseiller bénéficie d'une formation continue pour rester à la pointe des 
                    innovations financières et réglementaires, garantissant ainsi un conseil de qualité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
