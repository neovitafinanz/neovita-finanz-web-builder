import React, { useState } from 'react';
import { CreditCard, Shield, TrendingUp, Home, Car, Heart, Building, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceDetails from './ServiceDetails';
import ServiceDetailsModal from './ServiceDetailsModal';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedMainService, setSelectedMainService] = useState(null);

  const scrollToLoanForm = () => {
    document.getElementById('loan-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const mainServices = [
    {
      icon: CreditCard,
      title: "Solutions de Financement",
      description: "Prêts personnalisés adaptés à vos besoins individuels et professionnels",
      features: ["Prêts personnels", "Crédits travaux", "Rachats de crédit"],
      details: {
        title: "Solutions de Financement",
        description: "Nos solutions de financement sur mesure s'adaptent à tous vos projets personnels et professionnels. Que vous souhaitiez réaliser un rêve, faire face à un imprévu ou développer votre activité, nous avons la solution qu'il vous faut.",
        details: [
          "Analyse personnalisée de votre situation",
          "Montants de 1 000 € à 500 000 €",
          "Durées flexibles de 12 à 360 mois",
          "Taux compétitifs dès 2%",
          "Réponse rapide sous 48h"
        ],
        advantages: [
          "Accompagnement personnalisé par des experts",
          "Procédures simplifiées et digitalisées",
          "Transparence totale sur les coûts",
          "Possibilité de remboursement anticipé",
          "Service client dédié"
        ],
        process: [
          "Simulation en ligne gratuite",
          "Étude personnalisée de votre dossier",
          "Validation et signature du contrat"
        ]
      }
    },
    {
      icon: TrendingUp,
      title: "Produits d'Investissement",
      description: "Gamme complète d'investissements pour tous profils d'investisseurs",
      features: ["Placements sécurisés", "Diversification", "Conseil personnalisé"],
      details: {
        title: "Produits d'Investissement",
        description: "Faites fructifier votre épargne avec notre gamme complète de produits d'investissement. Nos conseillers experts vous accompagnent pour construire un portefeuille adapté à votre profil de risque et à vos objectifs financiers.",
        details: [
          "Analyse de votre profil investisseur",
          "Diversification optimisée des placements",
          "Suivi régulier de vos investissements",
          "Reporting détaillé et transparent",
          "Conseils d'optimisation fiscale"
        ],
        advantages: [
          "Expertise reconnue depuis 2006",
          "Accès aux meilleurs produits du marché",
          "Gestion personnalisée de votre patrimoine",
          "Frais compétitifs et transparents",
          "Support client expert"
        ],
        process: [
          "Évaluation de votre profil",
          "Proposition de stratégie d'investissement",
          "Mise en place et suivi des placements"
        ]
      }
    },
    {
      icon: Shield,
      title: "Assurances Complètes",
      description: "Protection optimale pour vous et votre famille",
      features: ["Assurance vie", "Assurance habitation", "Assurance auto"],
      details: {
        title: "Assurances Complètes",
        description: "Protégez ce qui compte le plus pour vous avec notre gamme complète d'assurances. De la protection de votre famille à celle de vos biens, nous vous proposons des solutions adaptées à tous vos besoins.",
        details: [
          "Couverture complète tous risques",
          "Garanties adaptées à votre situation",
          "Assistance 24h/24 et 7j/7",
          "Gestion simplifiée des sinistres",
          "Tarifs négociés avec nos partenaires"
        ],
        advantages: [
          "Large choix d'assureurs partenaires",
          "Comparaison automatique des offres",
          "Conseil gratuit et personnalisé",
          "Gestion centralisée de vos contrats",
          "Service de négociation pour vous"
        ],
        process: [
          "Analyse de vos besoins en protection",
          "Comparaison et sélection des meilleures offres",
          "Souscription et gestion de vos contrats"
        ]
      }
    }
  ];

  const loanTypes = [
    {
      icon: CreditCard,
      title: "Prêt personnel en ligne",
      rate: "3%",
      description: "Solution rapide et flexible pour tous vos projets personnels",
      details: {
        title: "Prêt personnel en ligne",
        description: "Notre prêt personnel en ligne vous offre une solution de financement rapide et flexible pour tous vos projets personnels. Que ce soit pour un voyage, des achats ou des projets personnels, nous vous accompagnons.",
        rate: "3%",
        features: [
          "Montant de 1 000 € à 75 000 €",
          "Durée de 12 à 84 mois",
          "Réponse immédiate en ligne",
          "Déblocage des fonds sous 48h",
          "Aucuns frais de dossier"
        ],
        advantages: [
          "Démarches 100% en ligne",
          "Taux fixe garanti",
          "Remboursement anticipé possible",
          "Service client dédié",
          "Simulation gratuite et sans engagement"
        ],
        eligibility: [
          "Être majeur et résider en France",
          "Avoir des revenus réguliers",
          "Ne pas être en situation d'interdit bancaire",
          "Capacité de remboursement suffisante"
        ],
        documents: [
          "Pièce d'identité en cours de validité",
          "Justificatifs de revenus (3 derniers bulletins de salaire)",
          "Relevé d'identité bancaire (RIB)",
          "Justificatif de domicile récent"
        ]
      }
    },
    {
      icon: CreditCard,
      title: "Prêt à la consommation",
      rate: "2,5%",
      description: "Financez vos achats du quotidien aux meilleures conditions",
      details: {
        title: "Prêt à la consommation",
        description: "Financez facilement vos projets de consommation avec notre prêt spécialement conçu pour vos achats du quotidien.",
        rate: "2,5%",
        features: [
          "Montant de 500 € à 50 000 €",
          "Durée de 6 à 72 mois",
          "Taux préférentiel",
          "Gestion en ligne de votre crédit"
        ],
        advantages: [
          "Taux très compétitif",
          "Souplesse dans l'utilisation",
          "Remboursement modulable",
          "Assurance facultative"
        ],
        eligibility: [
          "Revenus stables et réguliers",
          "Âge minimum 18 ans",
          "Résidence en France",
          "Situation financière saine"
        ],
        documents: [
          "Justificatifs d'identité",
          "Justificatifs de revenus",
          "Relevés bancaires",
          "Justificatif de domicile"
        ]
      }
    },
    {
      icon: Home,
      title: "Crédit travaux/rénovation",
      rate: "3,5%",
      description: "Rénovez et améliorez votre habitat avec notre accompagnement",
      details: {
        title: "Crédit travaux/rénovation",
        description: "Transformez votre habitat selon vos envies avec notre crédit travaux. Que ce soit pour rénover, agrandir ou améliorer votre logement.",
        rate: "3,5%",
        features: [
          "Montant jusqu'à 75 000 €",
          "Durée jusqu'à 120 mois",
          "Financement de tous types de travaux",
          "Déblocage progressif possible"
        ],
        advantages: [
          "Accompagnement personnalisé",
          "Conseils d'experts",
          "Partenaires artisans qualifiés",
          "Suivi de chantier"
        ],
        eligibility: [
          "Propriétaire ou locataire",
          "Justificatifs de travaux",
          "Capacité de remboursement",
          "Devis détaillés"
        ],
        documents: [
          "Devis des travaux",
          "Justificatifs de propriété",
          "Autorisation travaux si nécessaire",
          "Dossier financier complet"
        ]
      }
    },
    {
      icon: Building,
      title: "Prêt immobilier",
      rate: "2%",
      description: "Concrétisez votre projet immobilier dans les meilleures conditions",
      details: {
        title: "Prêt immobilier",
        description: "Réalisez votre rêve d'accession à la propriété avec notre prêt immobilier aux conditions avantageuses.",
        rate: "2%",
        features: [
          "Financement jusqu'à 100% du projet",
          "Durée jusqu'à 25 ans",
          "Taux fixe ou variable",
          "Possibilité de différé de remboursement"
        ],
        advantages: [
          "Taux très compétitifs",
          "Accompagnement personnalisé",
          "Négociation avec les vendeurs",
          "Assurance emprunteur incluse"
        ],
        eligibility: [
          "Revenus réguliers et suffisants",
          "Apport personnel recommandé",
          "Projet immobilier défini",
          "Situation professionnelle stable"
        ],
        documents: [
          "Compromis de vente",
          "Justificatifs de revenus",
          "Relevés bancaires (3 mois)",
          "Pièces d'identité"
        ]
      }
    },
    {
      icon: TrendingUp,
      title: "Rachat de crédit",
      rate: "2%",
      description: "Simplifiez vos finances en regroupant tous vos crédits",
      details: {
        title: "Rachat de crédit",
        description: "Simplifiez la gestion de vos finances en regroupant tous vos crédits en une seule mensualité réduite.",
        rate: "2%",
        features: [
          "Regroupement de tous types de crédits",
          "Réduction des mensualités",
          "Trésorerie supplémentaire possible",
          "Durée adaptée à votre situation"
        ],
        advantages: [
          "Mensualité unique et réduite",
          "Budget maîtrisé",
          "Amélioration du pouvoir d'achat",
          "Conseil personnalisé gratuit"
        ],
        eligibility: [
          "Avoir plusieurs crédits en cours",
          "Revenus réguliers",
          "Situation financière analysée",
          "Capacité de remboursement"
        ],
        documents: [
          "Tableaux d'amortissement",
          "Contrats de crédit en cours",
          "Justificatifs de revenus",
          "Relevés bancaires"
        ]
      }
    },
    {
      icon: Car,
      title: "Crédit-bail",
      rate: "3%",
      description: "Solution flexible pour financer vos équipements professionnels",
      details: {
        title: "Crédit-bail",
        description: "Financez vos équipements professionnels avec notre solution de crédit-bail adaptée aux entreprises.",
        rate: "3%",
        features: [
          "Financement d'équipements professionnels",
          "Option d'achat en fin de contrat",
          "Durée modulable",
          "Maintenance incluse possible"
        ],
        advantages: [
          "Préservation de la trésorerie",
          "Avantages fiscaux",
          "Matériel toujours récent",
          "Service maintenance"
        ],
        eligibility: [
          "Entreprise en activité",
          "Chiffre d'affaires minimum",
          "Secteur d'activité éligible",
          "Garanties suffisantes"
        ],
        documents: [
          "Bilans comptables",
          "Devis d'équipement",
          "Statuts de l'entreprise",
          "Attestations fiscales"
        ]
      }
    },
    {
      icon: GraduationCap,
      title: "Prêt étudiant",
      rate: "2%",
      description: "Investissez dans votre avenir avec nos conditions privilégiées",
      details: {
        title: "Prêt étudiant",
        description: "Financez vos études supérieures avec notre prêt étudiant aux conditions préférentielles.",
        rate: "2%",
        features: [
          "Montant jusqu'à 50 000 €",
          "Remboursement différé possible",
          "Taux préférentiel étudiant",
          "Souplesse de remboursement"
        ],
        advantages: [
          "Taux avantageux",
          "Pas de remboursement pendant les études",
          "Assurance chômage incluse",
          "Accompagnement personnalisé"
        ],
        eligibility: [
          "Être étudiant dans l'enseignement supérieur",
          "Âge maximum 28 ans",
          "Inscription dans un établissement reconnu",
          "Garant ou caution"
        ],
        documents: [
          "Certificat de scolarité",
          "Pièce d'identité",
          "Justificatifs du garant",
          "Relevé d'identité bancaire"
        ]
      }
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
          <h2 className="text-4xl lg:text-5xl font-bold text-green-600 mb-6">
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
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-green-600">{service.title}</CardTitle>
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
                <Button 
                  onClick={() => setSelectedMainService(service.details)}
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
                >
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
          <h2 className="text-4xl lg:text-5xl font-bold text-green-600 mb-6">
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
                  <loan.icon className="w-8 h-8 text-green-600" />
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {loan.rate}*
                  </span>
                </div>
                <CardTitle className="text-lg font-bold text-green-600 leading-tight">
                  {loan.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {loan.description}
                </CardDescription>
                <div className="space-y-2">
                  <Button 
                    onClick={() => setSelectedService(loan.details)}
                    variant="outline" 
                    size="sm" 
                    className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
                  >
                    En savoir plus
                  </Button>
                  <Button 
                    onClick={scrollToLoanForm}
                    size="sm" 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white transition-colors"
                  >
                    Emprunter maintenant
                  </Button>
                </div>
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

      {/* Service Details Modals */}
      <ServiceDetails 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
      
      <ServiceDetailsModal 
        service={selectedMainService}
        isOpen={!!selectedMainService}
        onClose={() => setSelectedMainService(null)}
      />
    </div>
  );
};

export default ServicesSection;
