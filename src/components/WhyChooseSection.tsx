
import React from 'react';
import { Shield, Award, Users, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Connexions SSL/TLS, conformité RGPD et protection des données bancaires selon les standards européens les plus stricts.",
      highlight: "100% sécurisé"
    },
    {
      icon: TrendingUp,
      title: "Taux compétitifs",
      description: "Bénéficiez de nos taux préférentiels grâce à notre réseau de partenaires bancaires et notre volume d'affaires.",
      highlight: "Dès 2%*"
    },
    {
      icon: Users,
      title: "Accompagnement expert",
      description: "43 conseillers financiers expérimentés vous accompagnent personnellement dans tous vos projets.",
      highlight: "43 experts"
    },
    {
      icon: Award,
      title: "Expérience prouvée",
      description: "Plus de 17 ans d'expertise dans le financement, avec des milliers de projets réalisés avec succès.",
      highlight: "Depuis 2006"
    },
    {
      icon: Clock,
      title: "Réponse rapide",
      description: "Étude de votre dossier en 24h maximum et mise en place des fonds sous 7 jours ouvrés en moyenne.",
      highlight: "Sous 24h"
    },
    {
      icon: CheckCircle,
      title: "Transparence totale",
      description: "Aucun frais caché, conditions claires et simulation gratuite. Notre engagement : la transparence à chaque étape.",
      highlight: "0 frais caché"
    }
  ];

  const stats = [
    { number: "17M€", label: "Capital social", description: "Solidité financière" },
    { number: "17+", label: "Années d'expérience", description: "Expertise prouvée" },
    { number: "43", label: "Collaborateurs", description: "Équipe dédiée" },
    { number: "15 000+", label: "Clients satisfaits", description: "Confiance accordée" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Pourquoi choisir Neovita Finanz ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les avantages qui font de Neovita Finanz votre partenaire financier de confiance 
            pour tous vos projets de financement.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <advantage.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-blue-900">
                        {advantage.title}
                      </h3>
                      <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {advantage.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Neovita Finanz en chiffres
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-blue-900">SARL agréée</div>
                  <div className="text-sm text-gray-600">SIREN 493 171 540</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Award className="w-8 h-8 text-yellow-600" />
                <div className="text-left">
                  <div className="font-bold text-blue-900">RCS Évry</div>
                  <div className="text-sm text-gray-600">Depuis juillet 2008</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-8 h-8 text-blue-600" />
                <div className="text-left">
                  <div className="font-bold text-blue-900">Conforme RGPD</div>
                  <div className="text-sm text-gray-600">Protection des données</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
