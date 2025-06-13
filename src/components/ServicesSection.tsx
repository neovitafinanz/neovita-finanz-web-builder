
import React from 'react';
import { CreditCard, Shield, TrendingUp, Home, Car, Heart, Building, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: CreditCard,
      title: "Solutions de Financement",
      description: "Prêts personnalisés adaptés à vos besoins individuels et professionnels",
      features: ["Prêts personnels", "Crédits travaux", "Rachats de crédit"]
    },
    {
      icon: TrendingUp,
      title: "Produits d'Investissement",
      description: "Gamme complète d'investissements pour tous profils d'investisseurs",
      features: ["Placements sécurisés", "Diversification", "Conseil personnalisé"]
    },
    {
      icon: Shield,
      title: "Assurances Complètes",
      description: "Protection optimale pour vous et votre famille",
      features: ["Assurance vie", "Assurance habitation", "Assurance auto"]
    }
  ];

  const loanTypes = [
    {
      icon: CreditCard,
      title: "Prêt personnel en ligne",
      rate: "3%",
      description: "Solution rapide et flexible pour tous vos projets personnels"
    },
    {
      icon: CreditCard,
      title: "Prêt à la consommation",
      rate: "2,5%",
      description: "Financez vos achats du quotidien aux meilleures conditions"
    },
    {
      icon: Home,
      title: "Crédit travaux/rénovation",
      rate: "3,5%",
      description: "Rénovez et améliorez votre habitat avec notre accompagnement"
    },
    {
      icon: Building,
      title: "Prêt immobilier",
      rate: "2%",
      description: "Concrétisez votre projet immobilier dans les meilleures conditions"
    },
    {
      icon: TrendingUp,
      title: "Rachat de crédit",
      rate: "2%",
      description: "Simplifiez vos finances en regroupant tous vos crédits"
    },
    {
      icon: Car,
      title: "Crédit-bail",
      rate: "3%",
      description: "Solution flexible pour financer vos équipements professionnels"
    },
    {
      icon: GraduationCap,
      title: "Prêt étudiant",
      rate: "2%",
      description: "Investissez dans votre avenir avec nos conditions privilégiées"
    }
  ];

  const insuranceTypes = [
    { icon: Home, title: "Assurance habitation", description: "Protection complète de votre logement" },
    { icon: Car, title: "Assurance automobile", description: "Couverture optimale pour vos véhicules" },
    { icon: Heart, title: "Assurance santé", description: "Prise en charge de vos frais médicaux" },
    { icon: Shield, title: "Assurance vie", description: "Sécurisez l'avenir de vos proches" },
    { icon: Building, title: "Assurance professionnelle", description: "Protection de votre activité professionnelle" }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Main Services Section */}
      <section id="services" className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Nos Services Financiers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis 2006, Neovita Finanz vous accompagne dans tous vos projets financiers 
            avec des solutions sur mesure et un service d'excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
                  Découvrir
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Nos Types de Prêts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de solutions de financement avec des taux compétitifs 
            et des conditions adaptées à chaque situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loanTypes.map((loan, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <loan.icon className="w-8 h-8 text-blue-900" />
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {loan.rate}*
                  </span>
                </div>
                <CardTitle className="text-lg font-bold text-blue-900 leading-tight">
                  {loan.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {loan.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            *Taux indicatif, sous réserve d'étude de votre dossier et des conditions du marché
          </p>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Nos Assurances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une protection complète pour tous les aspects de votre vie, 
            avec des garanties adaptées à vos besoins spécifiques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {insuranceTypes.map((insurance, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <insurance.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-blue-900">
                  {insurance.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {insurance.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
