
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoanSimulator from "@/components/LoanSimulator";

const Simulation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section for Simulation */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Simulateur de Prêt</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Estimez rapidement votre capacité d'emprunt et calculez vos mensualités. 
              Notre simulateur vous donne une première approche de votre projet de financement.
            </p>
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Calculatrice et graphiques financiers" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Main Simulation Content */}
        <LoanSimulator />

        {/* Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Comment Utiliser Notre Simulateur ?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Utilisation du simulateur" 
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Saisissez vos informations</h3>
                      <p className="text-gray-600">Montant souhaité, durée de remboursement et taux d'intérêt estimé.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Obtenez votre simulation</h3>
                      <p className="text-gray-600">Visualisez instantanément vos mensualités et le coût total de votre crédit.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Contactez-nous</h3>
                      <p className="text-gray-600">Prenez rendez-vous pour étudier votre dossier en détail.</p>
                    </div>
                  </div>
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

export default Simulation;
