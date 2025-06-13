
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section for Contact */}
        <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Prêt à concrétiser votre projet ? Notre équipe d'experts est à votre disposition 
              pour vous accompagner et répondre à toutes vos questions.
            </p>
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Contact et rendez-vous" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Coordonnées</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    📍
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    123 Rue de la Finance<br/>
                    75001 Paris, France
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    📞
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                  <p className="text-gray-600">
                    +33 1 23 45 67 89<br/>
                    Lun-Ven: 9h-18h
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    📧
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">
                    contact@neovitafinanz.com<br/>
                    Réponse sous 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Content */}
        <ContactSection />

        {/* FAQ Quick Access */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Avant de nous contacter, consultez notre FAQ. Vous y trouverez peut-être 
              la réponse à votre question.
            </p>
            <button 
              onClick={() => window.location.href = '/#faq'}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Consulter la FAQ
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
