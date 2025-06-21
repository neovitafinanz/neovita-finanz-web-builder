import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface Translation {
  [key: string]: string | Translation;
}

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations: { [key: string]: Translation } = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      login: "Connexion",
      register: "Inscription",
      logout: "Déconnexion",
      profile: "Profil",
      language: "Langue"
    },
    hero: {
      slide1: {
        title: "Simplifiez Votre Avenir Financier",
        subtitle: "Solutions de financement sur mesure pour tous vos projets",
        description: "Découvrez nos offres de prêts personnels, immobiliers et de rachat de crédit. Des solutions adaptées à vos besoins avec des taux compétitifs."
      },
      slide2: {
        title: "Votre Projet, Notre Priorité",
        subtitle: "Obtenez le financement idéal pour concrétiser vos rêves",
        description: "Que ce soit pour l'achat d'une maison, le financement d'études ou le développement de votre entreprise, nous sommes là pour vous accompagner."
      },
      slide3: {
        title: "Des Solutions de Crédit Innovantes",
        subtitle: "Financez vos projets en toute simplicité et sécurité",
        description: "Profitez de nos outils de simulation en ligne et de nos conseillers experts pour trouver l'offre de crédit qui vous convient le mieux."
      },
      slide4: {
        title: "Neovita Finanz : Votre Partenaire Financier",
        subtitle: "Accédez à des offres de crédit exclusives et personnalisées",
        description: "Nous mettons notre expertise à votre service pour vous offrir des solutions de financement claires, transparentes et avantageuses."
      },
      cta: {
        primary: "Demander un crédit",
        secondary: "Simuler mon prêt"
      },
      disclaimer: "Neovita Finanz - Votre partenaire de confiance pour un avenir financier serein."
    },
    home: {
      metaDescription: "Découvrez Neovita Finanz, votre partenaire de confiance pour des solutions de financement sur mesure. Prêts personnels, immobiliers, rachat de crédit et bien plus.",
      servicesTitle: "Nos Services de Financement",
      servicesSubtitle: "Découvrez notre gamme complète de solutions de financement adaptées à tous vos besoins. Des prêts personnels aux crédits immobiliers, nous sommes là pour vous accompagner.",
      advantagesTitle: "Pourquoi choisir Neovita Finanz ?",
      ctaTitle: "Prêt à réaliser vos projets ?",
      ctaSubtitle: "Obtenez une solution de financement adaptée à vos besoins. Contactez-nous dès maintenant pour une consultation gratuite et personnalisée.",
    },
    services: {
      personalLoans: {
        title: "Prêts Personnels",
        description: "Financez tous vos projets avec nos prêts personnels flexibles et avantageux. Des solutions sur mesure pour répondre à vos besoins spécifiques."
      },
      mortgageLoans: {
        title: "Prêts Immobiliers",
        description: "Devenez propriétaire grâce à nos offres de prêts immobiliers compétitives. Nous vous accompagnons à chaque étape de votre projet d'achat."
      },
      creditBuyback: {
        title: "Rachat de Crédit",
        description: "Simplifiez la gestion de vos finances en regroupant tous vos crédits en un seul. Bénéficiez de mensualités réduites et d'un taux avantageux."
      }
    },
    advantages: {
      security: {
        title: "Sécurité Maximale",
        description: "Vos données sont protégées grâce à nos systèmes de sécurité avancés. Nous garantissons la confidentialité de vos informations personnelles."
      },
      speed: {
        title: "Rapidité et Efficacité",
        description: "Obtenez une réponse rapide à votre demande de financement. Nos équipes mettent tout en œuvre pour traiter votre dossier dans les meilleurs délais."
      },
      experts: {
        title: "Conseillers Experts",
        description: "Bénéficiez de l'expertise de nos conseillers financiers. Ils vous accompagnent et vous conseillent pour trouver la meilleure solution de financement."
      }
    },
    partners: {
      title: "Nos Partenaires de Confiance",
      subtitle: "Nous collaborons avec les plus grandes institutions financières pour vous offrir les meilleures offres de crédit du marché.",
      trustMessage: {
        title: "La confiance de nos partenaires, votre garantie de qualité",
        description: "Nous travaillons en étroite collaboration avec des partenaires financiers de renom pour vous offrir des solutions de crédit fiables et avantageuses.",
        labels: {
          approved: "Offres approuvées",
          negotiated: "Taux négociés",
          fast: "Décisions rapides"
        }
      }
    },
    footer: {
      tagline: "Votre avenir financier commence ici",
      description: "Neovita Finanz est une société de courtage en crédits et assurances. Nous vous accompagnons dans la recherche de la meilleure solution de financement pour vos projets.",
      sections: {
        services: "Nos Services",
        company: "Société",
        legal: "Légal"
      },
      services: {
        personalLoans: "Prêts Personnels",
        mortgageLoans: "Prêts Immobiliers",
        creditBuyback: "Rachat de Crédit",
        workCredit: "Crédit Travaux",
        insurance: "Assurances"
      },
      company: {
        about: "À Propos",
        team: "Équipe",
        careers: "Carrières",
        partners: "Partenaires",
        news: "Actualités"
      },
      legal: {
        terms: "Mentions Légales",
        privacy: "Politique de Confidentialité",
        conditions: "Conditions Générales",
        sitemap: "Plan du Site",
        cookies: "Cookies"
      },
      trust: {
        title: "Nos Garanties",
        gdpr: "RGPD Compliant",
        gdprDesc: "Conformité avec le Règlement Général sur la Protection des Données.",
        ssl: "SSL Secure",
        sslDesc: "Connexion sécurisée avec cryptage SSL.",
        rcs: "RCS Verified",
        rcsDesc: "Entreprise enregistrée au Registre du Commerce et des Sociétés."
      },
      companyInfo: {
        title: "Informations Légales",
        legalForm: "Forme juridique",
        capital: "Capital social",
        employees: "Nombre de salariés"
      },
      warning: {
        title: "Avertissement",
        rates: "Les taux d'intérêt varient en fonction de votre profil et des conditions du marché.",
        credit: "Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.",
        insurance: "L'assurance emprunteur est facultative mais recommandée pour vous protéger en cas d'imprévus."
      },
      copyright: "Tous droits réservés."
    },
    
    // Loan Simulator
    loanSimulator: {
      title: "Simulateur de Prêt",
      subtitle: "Estimez rapidement vos conditions d'emprunt avec notre outil sécurisé. Obtenez une simulation personnalisée en quelques clics.",
      form: {
        title: "Paramètres de simulation",
        loanType: "Type de prêt",
        loanTypePlaceholder: "Sélectionnez votre type de prêt",
        amount: "Montant du prêt",
        duration: "Durée",
        calculate: "Calculer mon estimation"
      },
      loanTypes: {
        personal: "Prêt personnel en ligne",
        consumption: "Prêt à la consommation",
        works: "Crédit travaux/rénovation",
        mortgage: "Prêt immobilier",
        consolidation: "Rachat de crédit",
        lease: "Crédit-bail",
        student: "Prêt étudiant"
      },
      results: {
        title: "Résultats de votre simulation",
        monthlyPayment: "Mensualité",
        interestRate: "Taux d'intérêt",
        totalCost: "Coût total du crédit",
        interestAmount: "dont intérêts",
        summary: "Récapitulatif:",
        borrowedAmount: "Montant emprunté",
        duration: "Durée",
        type: "Type",
        requestLoan: "Demander ce prêt",
        email: "Email",
        pdf: "PDF",
        disclaimer: "*Mentions importantes:",
        disclaimerItems: [
          "• Taux indicatif, soumis à validation selon votre profil",
          "• Offre sous réserve d'acceptation du dossier",
          "• Vous disposez d'un délai de rétractation de 14 jours"
        ],
        emptyState: {
          title: "Prêt pour votre simulation ?",
          subtitle: "Sélectionnez un type de prêt et ajustez les paramètres pour voir vos résultats"
        }
      },
      toasts: {
        saved: "Estimation sauvegardée",
        savedDesc: "Votre simulation a été enregistrée avec succès.",
        request: "Demande en cours",
        requestDesc: "Vous allez être redirigé vers le formulaire de contact."
      }
    },

    // Testimonials
    testimonials: {
      title: "Témoignages Clients",
      subtitle: "Découvrez les expériences de nos clients satisfaits qui nous font confiance pour leurs projets financiers.",
      overallRating: "avis clients",
      navigation: {
        previous: "Précédent",
        next: "Suivant",
        goToPage: "Aller à la page"
      },
      trust: {
        title: "La satisfaction client au cœur de nos priorités",
        satisfied: "Clients satisfaits",
        response: "Réponse moyenne",
        rating: "Note moyenne"
      },
      clients: [
        {
          name: "Marie Dubois",
          location: "Paris", 
          comment: "Excellent service ! L'équipe de Neovita Finanz m'a accompagnée tout au long de mon projet immobilier. Processus rapide et transparent, je recommande vivement !",
          loanType: "Prêt immobilier",
          amount: "250 000€"
        },
        {
          name: "Pierre Martin",
          location: "Lyon",
          comment: "Grâce à Neovita Finanz, j'ai pu regrouper tous mes crédits. Leur expertise m'a permis de réduire mes mensualités de 40%. Service professionnel et conseils avisés.",
          loanType: "Rachat de crédit", 
          amount: "75 000€"
        },
        {
          name: "Sophie Leroux",
          location: "Marseille",
          comment: "Pour financer mes études de médecine, j'ai fait confiance à Neovita Finanz. Conditions privilégiées et équipe très à l'écoute. Un vrai partenariat !",
          loanType: "Prêt étudiant",
          amount: "45 000€"
        },
        {
          name: "Jean-Marc Rousseau", 
          location: "Toulouse",
          comment: "Rénovation complète de ma maison grâce au crédit travaux de Neovita Finanz. Taux compétitif et démarches simplifiées. Résultat au-delà de mes attentes !",
          loanType: "Crédit travaux",
          amount: "80 000€"
        },
        {
          name: "Amélie Blanchard",
          location: "Nantes", 
          comment: "Service client exceptionnel ! Mon conseiller a pris le temps de m'expliquer toutes les options. J'ai obtenu mon prêt personnel en 48h seulement.",
          loanType: "Prêt personnel",
          amount: "25 000€"
        },
        {
          name: "Thomas Bonnet",
          location: "Nice",
          comment: "Pour développer mon entreprise, j'avais besoin d'un crédit-bail. Neovita Finanz a su adapter la solution à mes besoins spécifiques. Parfait !",
          loanType: "Crédit-bail", 
          amount: "120 000€"
        }
      ],
      loanTypeLabel: "Type de prêt:",
      amountLabel: "Montant:"
    }
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      login: "Login",
      register: "Register",
      logout: "Logout",
      profile: "Profile",
      language: "Language"
    },
    hero: {
      slide1: {
        title: "Simplify Your Financial Future",
        subtitle: "Tailored financing solutions for all your projects",
        description: "Discover our offers for personal, real estate and credit buyback loans. Solutions tailored to your needs with competitive rates."
      },
      slide2: {
        title: "Your Project, Our Priority",
        subtitle: "Get the ideal financing to realize your dreams",
        description: "Whether it's buying a house, financing studies or developing your business, we are here to support you."
      },
      slide3: {
        title: "Innovative Credit Solutions",
        subtitle: "Finance your projects with simplicity and security",
        description: "Take advantage of our online simulation tools and our expert advisors to find the credit offer that suits you best."
      },
      slide4: {
        title: "Neovita Finanz: Your Financial Partner",
        subtitle: "Access exclusive and personalized credit offers",
        description: "We put our expertise at your service to offer you clear, transparent and advantageous financing solutions."
      },
      cta: {
        primary: "Request a loan",
        secondary: "Simulate my loan"
      },
      disclaimer: "Neovita Finanz - Your trusted partner for a secure financial future."
    },
    home: {
      metaDescription: "Discover Neovita Finanz, your trusted partner for tailored financing solutions. Personal loans, real estate, credit buyback and more.",
      servicesTitle: "Our Financing Services",
      servicesSubtitle: "Discover our complete range of financing solutions tailored to all your needs. From personal loans to mortgage loans, we are here to support you.",
      advantagesTitle: "Why choose Neovita Finanz?",
      ctaTitle: "Ready to realize your projects?",
      ctaSubtitle: "Get a financing solution tailored to your needs. Contact us now for a free and personalized consultation.",
    },
    services: {
      personalLoans: {
        title: "Personal Loans",
        description: "Finance all your projects with our flexible and advantageous personal loans. Tailored solutions to meet your specific needs."
      },
      mortgageLoans: {
        title: "Mortgage Loans",
        description: "Become a homeowner thanks to our competitive mortgage loan offers. We support you at every stage of your purchase project."
      },
      creditBuyback: {
        title: "Credit Buyback",
        description: "Simplify the management of your finances by consolidating all your credits into one. Benefit from reduced monthly payments and an advantageous rate."
      }
    },
    advantages: {
      security: {
        title: "Maximum Security",
        description: "Your data is protected thanks to our advanced security systems. We guarantee the confidentiality of your personal information."
      },
      speed: {
        title: "Speed and Efficiency",
        description: "Get a quick response to your financing request. Our teams make every effort to process your file as quickly as possible."
      },
      experts: {
        title: "Expert Advisors",
        description: "Benefit from the expertise of our financial advisors. They support you and advise you to find the best financing solution."
      }
    },
    partners: {
      title: "Our Trusted Partners",
      subtitle: "We collaborate with the largest financial institutions to offer you the best credit offers on the market.",
      trustMessage: {
        title: "The trust of our partners, your guarantee of quality",
        description: "We work closely with renowned financial partners to offer you reliable and advantageous credit solutions.",
        labels: {
          approved: "Approved offers",
          negotiated: "Negotiated rates",
          fast: "Fast decisions"
        }
      }
    },
    footer: {
      tagline: "Your financial future starts here",
      description: "Neovita Finanz is a credit and insurance brokerage company. We support you in finding the best financing solution for your projects.",
      sections: {
        services: "Our Services",
        company: "Company",
        legal: "Legal"
      },
      services: {
        personalLoans: "Personal Loans",
        mortgageLoans: "Mortgage Loans",
        creditBuyback: "Credit Buyback",
        workCredit: "Work Credit",
        insurance: "Insurance"
      },
      company: {
        about: "About",
        team: "Team",
        careers: "Careers",
        partners: "Partners",
        news: "News"
      },
      legal: {
        terms: "Terms of Use",
        privacy: "Privacy Policy",
        conditions: "General Conditions",
        sitemap: "Sitemap",
        cookies: "Cookies"
      },
      trust: {
        title: "Our Guarantees",
        gdpr: "GDPR Compliant",
        gdprDesc: "Compliance with the General Data Protection Regulation.",
        ssl: "SSL Secure",
        sslDesc: "Secure connection with SSL encryption.",
        rcs: "RCS Verified",
        rcsDesc: "Company registered with the Trade and Companies Register."
      },
      companyInfo: {
        title: "Legal Information",
        legalForm: "Legal form",
        capital: "Share capital",
        employees: "Number of employees"
      },
      warning: {
        title: "Warning",
        rates: "Interest rates vary depending on your profile and market conditions.",
        credit: "Credit commits you and must be repaid. Check your repayment capacity before committing.",
        insurance: "Borrower insurance is optional but recommended to protect you in case of unforeseen events."
      },
      copyright: "All rights reserved."
    },
    
    loanSimulator: {
      title: "Loan Simulator",
      subtitle: "Quickly estimate your borrowing conditions with our secure tool. Get a personalized simulation in just a few clicks.",
      form: {
        title: "Simulation Parameters",
        loanType: "Loan Type",
        loanTypePlaceholder: "Select your loan type",
        amount: "Loan Amount",
        duration: "Duration",
        calculate: "Calculate my estimate"
      },
      loanTypes: {
        personal: "Personal loan online",
        consumption: "Consumer loan",
        works: "Work/renovation credit",
        mortgage: "Mortgage loan",
        consolidation: "Credit buyback",
        lease: "Credit lease",
        student: "Student loan"
      },
      results: {
        title: "Your simulation results",
        monthlyPayment: "Monthly Payment",
        interestRate: "Interest Rate",
        totalCost: "Total credit cost",
        interestAmount: "including interest",
        summary: "Summary:",
        borrowedAmount: "Borrowed amount",
        duration: "Duration",
        type: "Type",
        requestLoan: "Request this loan",
        email: "Email",
        pdf: "PDF",
        disclaimer: "*Important mentions:",
        disclaimerItems: [
          "• Indicative rate, subject to validation according to your profile",
          "• Offer subject to file acceptance",
          "• You have a 14-day withdrawal period"
        ],
        emptyState: {
          title: "Ready for your simulation?",
          subtitle: "Select a loan type and adjust parameters to see your results"
        }
      },
      toasts: {
        saved: "Estimate saved",
        savedDesc: "Your simulation has been successfully saved.",
        request: "Request in progress",
        requestDesc: "You will be redirected to the contact form."
      }
    },

    testimonials: {
      title: "Client Testimonials",
      subtitle: "Discover the experiences of our satisfied clients who trust us for their financial projects.",
      overallRating: "client reviews",
      navigation: {
        previous: "Previous",
        next: "Next",
        goToPage: "Go to page"
      },
      trust: {
        title: "Client satisfaction at the heart of our priorities",
        satisfied: "Satisfied clients",
        response: "Average response",
        rating: "Average rating"
      },
      clients: [
        {
          name: "Marie Dubois",
          location: "Paris",
          comment: "Excellent service! The Neovita Finanz team supported me throughout my real estate project. Fast and transparent process, I highly recommend!",
          loanType: "Mortgage loan",
          amount: "€250,000"
        },
        {
          name: "Pierre Martin",
          location: "Lyon",
          comment: "Thanks to Neovita Finanz, I was able to consolidate all my credits. Their expertise allowed me to reduce my monthly payments by 40%. Professional service and wise advice.",
          loanType: "Credit buyback",
          amount: "€75,000"
        },
        {
          name: "Sophie Leroux",
          location: "Marseille",
          comment: "To finance my medical studies, I trusted Neovita Finanz. Privileged conditions and very attentive team. A real partnership!",
          loanType: "Student loan",
          amount: "€45,000"
        },
        {
          name: "Jean-Marc Rousseau",
          location: "Toulouse",
          comment: "Complete renovation of my house thanks to Neovita Finanz work credit. Competitive rate and simplified procedures. Result beyond my expectations!",
          loanType: "Work credit",
          amount: "€80,000"
        },
        {
          name: "Amélie Blanchard",
          location: "Nantes",
          comment: "Exceptional customer service! My advisor took the time to explain all the options to me. I got my personal loan in just 48 hours.",
          loanType: "Personal loan",
          amount: "€25,000"
        },
        {
          name: "Thomas Bonnet",
          location: "Nice",
          comment: "To develop my business, I needed a credit lease. Neovita Finanz was able to adapt the solution to my specific needs. Perfect!",
          loanType: "Credit lease",
          amount: "€120,000"
        }
      ],
      loanTypeLabel: "Loan type:",
      amountLabel: "Amount:"
    }
  },
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let translation: any = translations[language];

    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        return key;
      }
    }

    if (typeof translation === 'string') {
      if (params) {
        Object.keys(params).forEach(paramKey => {
          const regex = new RegExp(`\\{${paramKey}\\}`, 'g');
          translation = translation.replace(regex, String(params[paramKey]));
        });
      }
      return translation;
    }

    return key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  return useContext(LanguageContext);
};

export { LanguageProvider, useLanguage };
