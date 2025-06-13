
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section for Services */}
        <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Nos Services Financiers</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions de financement adaptées à vos besoins. 
              De l'acquisition immobilière aux projets personnels, nous vous accompagnons à chaque étape.
            </p>
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Services financiers professionnels" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Main Services Content */}
        <ServicesSection />

        {/* Additional Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pourquoi Choisir Nos Services ?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Expertise financière" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Expertise Reconnue</h3>
                  <p className="text-gray-600">Plus de 15 ans d'expérience dans le conseil financier et l'accompagnement de projets.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Solutions personnalisées" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Solutions Sur Mesure</h3>
                  <p className="text-gray-600">Chaque dossier est unique. Nous adaptons nos solutions à votre situation personnelle.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Accompagnement complet" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-3">Accompagnement Complet</h3>
                  <p className="text-gray-600">De l'étude de faisabilité à la signature, nous vous guidons tout au long du processus.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
