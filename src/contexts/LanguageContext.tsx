import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const t = (key: string): string => {
    const translations = getTranslations();
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Import des traductions
const getTranslations = () => {
  return {
    fr: {
      nav: {
        home: 'Accueil',
        personalLoans: 'Prêts personnels',
        mortgageLoans: 'Prêts immobiliers',
        creditBuyback: 'Rachat de crédit',
        workCredit: 'Crédit travaux',
        insurance: 'Assurances',
        about: 'À propos'
      },
      common: {
        requestLoan: 'Demander un prêt',
        contactUs: 'Nous contacter',
        learnMore: 'En savoir plus',
        learnMoreAbout: 'En savoir plus sur',
        discover: 'Découvrir',
        startRequest: 'Commencer ma demande',
        phoneAvailable: 'Conseiller disponible du lundi au vendredi de 9h à 18h'
      },
      hero: {
        slide1: {
          title: 'Votre avenir financier commence ici',
          subtitle: 'Solutions sécurisées depuis 2006',
          description: 'Réalisez vos projets avec nos solutions de financement personnalisées adaptées à vos besoins'
        },
        slide2: {
          title: 'Réalisez vos projets immobiliers',
          subtitle: 'Taux immobilier dès 2%*',
          description: 'Accompagnement personnalisé pour l\'acquisition de votre résidence principale ou investissement locatif'
        },
        slide3: {
          title: 'Sécurisez votre futur',
          subtitle: 'Expertise financière depuis plus de 17 ans',
          description: '43 experts à votre service pour vous accompagner dans tous vos projets financiers'
        },
        slide4: {
          title: 'Investissez dans votre éducation',
          subtitle: 'Prêt étudiant dès 2%*',
          description: 'Financez vos études supérieures avec nos solutions de prêt étudiant avantageuses'
        },
        cta: {
          primary: 'Demander un prêt maintenant',
          secondary: 'Simuler mon prêt'
        },
        disclaimer: '*Taux indicatif, sous réserve d\'étude de votre dossier'
      },
      simulator: {
        title: 'Simulateur de Prêt',
        subtitle: 'Estimez votre capacité d\'emprunt en quelques clics',
        amount: 'Montant souhaité',
        duration: 'Durée',
        years: 'ans',
        rate: 'Taux d\'intérêt',
        monthlyPayment: 'Mensualité',
        totalCost: 'Coût total',
        calculate: 'Calculer',
        requestLoan: 'Faire une demande'
      },
      testimonials: {
        title: 'Témoignages Clients',
        subtitle: 'Découvrez l\'expérience de nos clients satisfaits',
        client1: {
          name: 'Marie Dubois',
          location: 'Paris',
          text: 'Service exceptionnel ! L\'équipe m\'a accompagnée tout au long de mon projet immobilier avec professionnalisme.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Processus rapide et transparent. J\'ai obtenu mon prêt personnel en moins d\'une semaine. Je recommande vivement !'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marseille',
          text: 'Excellents conseils pour mon rachat de crédit. J\'ai économisé plus de 200€ par mois sur mes mensualités.'
        }
      },
      partners: {
        title: 'Nos Partenaires Bancaires',
        subtitle: 'Grâce à notre réseau de partenaires financiers de confiance, nous vous proposons les meilleures conditions du marché.',
        trustMessage: {
          title: 'Un réseau de confiance pour votre sérénité',
          description: 'Notre collaboration avec les principales institutions financières françaises et européennes nous permet de vous proposer une large gamme de solutions de financement aux conditions les plus avantageuses du marché.',
          labels: {
            approved: 'Partenaires agréés',
            negotiated: 'Conditions négociées',
            fast: 'Traitement rapide'
          }
        }
      },
      footer: {
        tagline: 'Votre partenaire financier',
        description: 'Depuis 2006, nous accompagnons particuliers et professionnels dans la réalisation de leurs projets financiers avec expertise et transparence.',
        sections: {
          services: 'Nos Services',
          company: 'Entreprise',
          legal: 'Informations Légales'
        },
        services: {
          personalLoans: 'Prêts personnels',
          mortgageLoans: 'Prêts immobiliers',
          creditBuyback: 'Rachats de crédit',
          workCredit: 'Crédit travaux',
          insurance: 'Assurances'
        },
        company: {
          about: 'À propos',
          team: 'Notre équipe',
          careers: 'Carrières',
          partners: 'Partenaires',
          news: 'Actualités'
        },
        legal: {
          terms: 'Mentions légales',
          privacy: 'Politique de confidentialité',
          conditions: 'Conditions générales',
          sitemap: 'Plan du site',
          cookies: 'Cookies'
        },
        trust: {
          title: 'Labels de Confiance',
          gdpr: 'RGPD Conforme',
          gdprDesc: 'Protection des données',
          ssl: 'SSL Sécurisé',
          sslDesc: 'Connexions chiffrées',
          rcs: 'RCS Évry',
          rcsDesc: 'Société enregistrée'
        },
        companyInfo: {
          title: 'Neovita Finanz - Informations Société',
          legalForm: 'Forme juridique',
          capital: 'Capital social',
          employees: 'Effectif'
        },
        warning: {
          title: 'Avertissement Important',
          rates: 'Les taux d\'intérêt affichés sont indicatifs et soumis à validation selon le profil du client et les conditions du marché.',
          credit: 'Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.',
          insurance: 'Les garanties d\'assurance sont soumises aux conditions générales des contrats proposés.'
        },
        copyright: 'Tous droits réservés.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Votre partenaire financier de confiance. Solutions de prêts personnels, immobiliers, rachat de crédit depuis 2006.',
        heroTitle: 'Votre partenaire financier de confiance',
        heroSubtitle: 'Solutions de prêts personnalisées depuis 2006',
        servicesTitle: 'Nos Solutions de Financement',
        servicesSubtitle: 'Découvrez nos solutions adaptées à tous vos projets',
        advantagesTitle: 'Pourquoi choisir Neovita Finanz ?',
        ctaTitle: 'Prêt à concrétiser votre projet ?',
        ctaSubtitle: 'Nos conseillers experts vous accompagnent dans toutes vos démarches'
      },
      services: {
        personalLoans: {
          title: 'Prêts personnels',
          description: 'Financez vos projets personnels avec des conditions avantageuses'
        },
        mortgageLoans: {
          title: 'Prêts immobiliers',
          description: 'Concrétisez votre projet immobilier avec notre accompagnement'
        },
        creditBuyback: {
          title: 'Rachat de crédit',
          description: 'Optimisez vos finances en regroupant vos crédits'
        }
      },
      advantages: {
        security: {
          title: 'Sécurité garantie',
          description: 'Vos données sont protégées et sécurisées'
        },
        speed: {
          title: 'Réponse rapide',
          description: 'Réponse sous 24h pour votre demande'
        },
        experts: {
          title: 'Conseillers experts',
          description: '43 experts à votre service depuis 2006'
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        personalLoans: 'Personal Loans',
        mortgageLoans: 'Mortgage Loans',
        creditBuyback: 'Credit Buyback',
        workCredit: 'Work Credit',
        insurance: 'Insurance',
        about: 'About'
      },
      common: {
        requestLoan: 'Request a loan',
        contactUs: 'Contact us',
        learnMore: 'Learn more',
        learnMoreAbout: 'Learn more about',
        discover: 'Discover',
        startRequest: 'Start my request',
        phoneAvailable: 'Advisor available Monday to Friday from 9am to 6pm'
      },
      hero: {
        slide1: {
          title: 'Your financial future starts here',
          subtitle: 'Secure solutions since 2006',
          description: 'Realize your projects with our personalized financing solutions adapted to your needs'
        },
        slide2: {
          title: 'Realize your real estate projects',
          subtitle: 'Mortgage rates from 2%*',
          description: 'Personalized support for acquiring your main residence or rental investment'
        },
        slide3: {
          title: 'Secure your future',
          subtitle: 'Financial expertise for over 17 years',
          description: '43 experts at your service to support you in all your financial projects'
        },
        slide4: {
          title: 'Invest in your education',
          subtitle: 'Student loan from 2%*',
          description: 'Finance your higher education with our advantageous student loan solutions'
        },
        cta: {
          primary: 'Request a loan now',
          secondary: 'Simulate my loan'
        },
        disclaimer: '*Indicative rate, subject to file review'
      },
      simulator: {
        title: 'Loan Simulator',
        subtitle: 'Estimate your borrowing capacity in a few clicks',
        amount: 'Desired amount',
        duration: 'Duration',
        years: 'years',
        rate: 'Interest rate',
        monthlyPayment: 'Monthly payment',
        totalCost: 'Total cost',
        calculate: 'Calculate',
        requestLoan: 'Make a request'
      },
      testimonials: {
        title: 'Client Testimonials',
        subtitle: 'Discover the experience of our satisfied clients',
        client1: {
          name: 'Marie Dubois',
          location: 'Paris',
          text: 'Exceptional service! The team supported me throughout my real estate project with professionalism.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Fast and transparent process. I got my personal loan in less than a week. Highly recommend!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marseille',
          text: 'Excellent advice for my credit buyback. I saved more than €200 per month on my payments.'
        }
      },
      partners: {
        title: 'Our Banking Partners',
        subtitle: 'Thanks to our network of trusted financial partners, we offer you the best market conditions.',
        trustMessage: {
          title: 'A trusted network for your peace of mind',
          description: 'Our collaboration with leading French and European financial institutions allows us to offer you a wide range of financing solutions at the most advantageous market conditions.',
          labels: {
            approved: 'Approved partners',
            negotiated: 'Negotiated conditions',
            fast: 'Fast processing'
          }
        }
      },
      footer: {
        tagline: 'Your financial partner',
        description: 'Since 2006, we have been supporting individuals and professionals in realizing their financial projects with expertise and transparency.',
        sections: {
          services: 'Our Services',
          company: 'Company',
          legal: 'Legal Information'
        },
        services: {
          personalLoans: 'Personal loans',
          mortgageLoans: 'Mortgage loans',
          creditBuyback: 'Credit buybacks',
          workCredit: 'Work credit',
          insurance: 'Insurance'
        },
        company: {
          about: 'About',
          team: 'Our team',
          careers: 'Careers',
          partners: 'Partners',
          news: 'News'
        },
        legal: {
          terms: 'Legal notices',
          privacy: 'Privacy policy',
          conditions: 'General conditions',
          sitemap: 'Site map',
          cookies: 'Cookies'
        },
        trust: {
          title: 'Trust Labels',
          gdpr: 'GDPR Compliant',
          gdprDesc: 'Data protection',
          ssl: 'SSL Secured',
          sslDesc: 'Encrypted connections',
          rcs: 'RCS Évry',
          rcsDesc: 'Registered company'
        },
        companyInfo: {
          title: 'Neovita Finanz - Company Information',
          legalForm: 'Legal form',
          capital: 'Share capital',
          employees: 'Staff'
        },
        warning: {
          title: 'Important Warning',
          rates: 'Interest rates displayed are indicative and subject to validation according to client profile and market conditions.',
          credit: 'Credit commits you and must be repaid. Check your repayment capacity before committing.',
          insurance: 'Insurance guarantees are subject to general conditions of proposed contracts.'
        },
        copyright: 'All rights reserved.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Your trusted financial partner. Personal loan solutions, mortgages, credit buyback since 2006.',
        heroTitle: 'Your trusted financial partner',
        heroSubtitle: 'Personalized loan solutions since 2006',
        servicesTitle: 'Our Financing Solutions',
        servicesSubtitle: 'Discover our solutions adapted to all your projects',
        advantagesTitle: 'Why choose Neovita Finanz?',
        ctaTitle: 'Ready to realize your project?',
        ctaSubtitle: 'Our expert advisors support you in all your steps'
      },
      services: {
        personalLoans: {
          title: 'Personal loans',
          description: 'Finance your personal projects with advantageous conditions'
        },
        mortgageLoans: {
          title: 'Mortgage loans',
          description: 'Realize your real estate project with our support'
        },
        creditBuyback: {
          title: 'Credit buyback',
          description: 'Optimize your finances by grouping your credits'
        }
      },
      advantages: {
        security: {
          title: 'Guaranteed security',
          description: 'Your data is protected and secure'
        },
        speed: {
          title: 'Quick response',
          description: 'Response within 24 hours for your request'
        },
        experts: {
          title: 'Expert advisors',
          description: '43 experts at your service since 2006'
        }
      }
    },
    de: {
      nav: {
        home: 'Startseite',
        personalLoans: 'Privatkredite',
        mortgageLoans: 'Hypothekendarlehen',
        creditBuyback: 'Kreditrückkauf',
        workCredit: 'Arbeitskredit',
        insurance: 'Versicherung',
        about: 'Über uns'
      },
      common: {
        requestLoan: 'Kredit beantragen',
        contactUs: 'Kontaktieren Sie uns',
        learnMore: 'Mehr erfahren',
        learnMoreAbout: 'Mehr erfahren über',
        discover: 'Entdecken',
        startRequest: 'Antrag starten',
        phoneAvailable: 'Berater verfügbar Montag bis Freitag von 9 bis 18 Uhr'
      },
      hero: {
        slide1: {
          title: 'Ihre finanzielle Zukunft beginnt hier',
          subtitle: 'Sichere Lösungen seit 2006',
          description: 'Verwirklichen Sie Ihre Projekte mit unseren personalisierten Finanzierungslösungen'
        },
        slide2: {
          title: 'Verwirklichen Sie Ihre Immobilienprojekte',
          subtitle: 'Hypothekenzinsen ab 2%*',
          description: 'Persönliche Betreuung beim Erwerb Ihres Hauptwohnsitzes oder Ihrer Mietinvestition'
        },
        slide3: {
          title: 'Sichern Sie Ihre Zukunft',
          subtitle: 'Finanzexpertise seit über 17 Jahren',
          description: '43 Experten stehen Ihnen zur Verfügung, um Sie bei all Ihren Finanzprojekten zu unterstützen'
        },
        slide4: {
          title: 'Investieren Sie in Ihre Bildung',
          subtitle: 'Studienkredit ab 2%*',
          description: 'Finanzieren Sie Ihr Studium mit unseren vorteilhaften Studienkreditlösungen'
        },
        cta: {
          primary: 'Jetzt Kredit beantragen',
          secondary: 'Kredit simulieren'
        },
        disclaimer: '*Richtzins, vorbehaltlich Prüfung Ihres Dossiers'
      },
      simulator: {
        title: 'Kredit-Simulator',
        subtitle: 'Schätzen Sie Ihre Kreditfähigkeit in wenigen Klicks',
        amount: 'Gewünschter Betrag',
        duration: 'Laufzeit',
        years: 'Jahre',
        rate: 'Zinssatz',
        monthlyPayment: 'Monatliche Rate',
        totalCost: 'Gesamtkosten',
        calculate: 'Berechnen',
        requestLoan: 'Antrag stellen'
      },
      testimonials: {
        title: 'Kundenstimmen',
        subtitle: 'Entdecken Sie die Erfahrungen unserer zufriedenen Kunden',
        client1: {
          name: 'Marie Dubois',
          location: 'Paris',
          text: 'Außergewöhnlicher Service! Das Team hat mich während meines Immobilienprojekts professionell begleitet.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Schneller und transparenter Prozess. Ich habe meinen Privatkredit in weniger als einer Woche erhalten. Sehr empfehlenswert!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marseille',
          text: 'Ausgezeichnete Beratung für meinen Kreditrückkauf. Ich sparede mehr als 200€ pro Monat bei meinen Raten.'
        }
      },
      partners: {
        title: 'Unsere Bankpartner',
        subtitle: 'Dank unserem Netzwerk vertrauensvoller Finanzpartner bieten wir Ihnen die besten Marktkonditionen.',
        trustMessage: {
          title: 'Ein vertrauensvolles Netzwerk für Ihre Sicherheit',
          description: 'Unsere Zusammenarbeit mit führenden französischen und europäischen Finanzinstituten ermöglicht es uns, Ihnen eine breite Palette von Finanzierungslösungen zu den vorteilhaftesten Marktkonditionen anzubieten.',
          labels: {
            approved: 'Goedgekeurde partners',
            negotiated: 'Onderhandelde voorwaarden',
            fast: 'Snelle verwerking'
          }
        }
      },
      footer: {
        tagline: 'Ihr Finanzpartner',
        description: 'Seit 2006 begleiten wir Privatpersonen und Unternehmen bei der Verwirklichung ihrer Finanzprojekte mit Expertise und Transparenz.',
        sections: {
          services: 'Unsere Dienstleistungen',
          company: 'Unternehmen',
          legal: 'Rechtliche Informationen'
        },
        services: {
          personalLoans: 'Privatkredite',
          mortgageLoans: 'Hypothekendarlehen',
          creditBuyback: 'Kreditrückkäufe',
          workCredit: 'Arbeitskredit',
          insurance: 'Versicherungen'
        },
        company: {
          about: 'Über uns',
          team: 'Unser Team',
          careers: 'Karriere',
          partners: 'Partner',
          news: 'Nachrichten'
        },
        legal: {
          terms: 'Rechtliche Hinweise',
          privacy: 'Datenschutzrichtlinie',
          conditions: 'Allgemeine Geschäftsbedingungen',
          sitemap: 'Sitemap',
          cookies: 'Cookies'
        },
        trust: {
          title: 'Vertrauenssiegel',
          gdpr: 'DSGVO-konform',
          gdprDesc: 'Datenschutz',
          ssl: 'SSL-gesichert',
          sslDesc: 'Verschlüsselte Verbindungen',
          rcs: 'RCS Évry',
          rcsDesc: 'Eingetragenes Unternehmen'
        },
        companyInfo: {
          title: 'Neovita Finanz - Unternehmensinformationen',
          legalForm: 'Rechtsform',
          capital: 'Grundkapital',
          employees: 'Mitarbeiter'
        },
        warning: {
          title: 'Wichtiger Hinweis',
          rates: 'Die angezeigten Zinssätze sind Richtwerte und unterliegen der Validierung je nach Kundenprofil und Marktbedingungen.',
          credit: 'Ein Kredit verpflichtet Sie und muss zurückgezahlt werden. Prüfen Sie Ihre Rückzahlungsfähigkeit, bevor Sie sich verpflichten.',
          insurance: 'Versicherungsgarantien unterliegen den allgemeinen Bedingungen der vorgeschlagenen Verträge.'
        },
        copyright: 'Alle Rechte vorbehalten.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Ihr vertrauensvoller Finanzpartner. Privatkredit-Lösungen, Hypotheken, Kreditrückkauf seit 2006.',
        heroTitle: 'Ihr vertrauensvoller Finanzpartner',
        heroSubtitle: 'Personalisierte Kreditlösungen seit 2006',
        servicesTitle: 'Unsere Finanzierungslösungen',
        servicesSubtitle: 'Entdecken Sie unsere Lösungen für alle Ihre Projekte',
        advantagesTitle: 'Warum Neovita Finanz wählen?',
        ctaTitle: 'Bereit, Ihr Projekt zu verwirklichen?',
        ctaSubtitle: 'Unsere Expertenberater unterstützen Sie bei allen Schritten'
      },
      services: {
        personalLoans: {
          title: 'Privatkredite',
          description: 'Finanzieren Sie Ihre persönlichen Projekte zu vorteilhaften Konditionen'
        },
        mortgageLoans: {
          title: 'Hypothekendarlehen',
          description: 'Verwirklichen Sie Ihr Immobilienprojekt mit unserer Unterstützung'
        },
        creditBuyback: {
          title: 'Kreditrückkauf',
          description: 'Optimieren Sie Ihre Finanzen durch Zusammenfassung Ihrer Kredite'
        }
      },
      advantages: {
        security: {
          title: 'Garantierte Sicherheit',
          description: 'Ihre Daten sind geschützt und sicher'
        },
        speed: {
          title: 'Schnelle Antwort',
          description: 'Antwort innerhalb von 24 Stunden auf Ihre Anfrage'
        },
        experts: {
          title: 'Expertenberater',
          description: '43 Experten stehen Ihnen seit 2006 zur Verfügung'
        }
      }
    },
    es: {
      nav: {
        home: 'Inicio',
        personalLoans: 'Préstamos personales',
        mortgageLoans: 'Préstamos hipotecarios',
        creditBuyback: 'Recompra de crédito',
        workCredit: 'Crédito de trabajo',
        insurance: 'Seguros',
        about: 'Acerca de'
      },
      common: {
        requestLoan: 'Solicitar préstamo',
        contactUs: 'Contáctanos',
        learnMore: 'Saber más',
        learnMoreAbout: 'Saber más sobre',
        discover: 'Descubrir',
        startRequest: 'Comenzar mi solicitud',
        phoneAvailable: 'Asesor disponible de lunes a viernes de 9h a 18h'
      },
      hero: {
        slide1: {
          title: 'Su futuro financiero comienza aquí',
          subtitle: 'Soluciones seguras desde 2006',
          description: 'Realice sus proyectos con nuestras soluciones de financiamiento personalizadas'
        },
        slide2: {
          title: 'Realice sus proyectos inmobiliarios',
          subtitle: 'Tasas hipotecarias desde 2%*',
          description: 'Acompañamiento personalizado para la adquisición de su residencia principal o inversión de alquiler'
        },
        slide3: {
          title: 'Asegure su futuro',
          subtitle: 'Experiencia financiera por más de 17 años',
          description: '43 expertos a su servicio para acompañarle en todos sus proyectos financieros'
        },
        slide4: {
          title: 'Invierta en su educación',
          subtitle: 'Préstamo estudiantil desde 2%*',
          description: 'Financie sus estudios superiores con nuestras soluciones de préstamo estudiantil ventajosas'
        },
        cta: {
          primary: 'Solicitar un préstamo ahora',
          secondary: 'Simular mi préstamo'
        },
        disclaimer: '*Tasa indicativa, sujeta a estudio de su expediente'
      },
      simulator: {
        title: 'Simulador de Préstamo',
        subtitle: 'Estime su capacidad de endeudamiento en pocos clics',
        amount: 'Cantidad deseada',
        duration: 'Duración',
        years: 'años',
        rate: 'Tasa de interés',
        monthlyPayment: 'Pago mensual',
        totalCost: 'Costo total',
        calculate: 'Calcular',
        requestLoan: 'Hacer una solicitud'
      },
      testimonials: {
        title: 'Testimonios de Clientes',
        subtitle: 'Descubra la experiencia de nuestros clientes satisfechos',
        client1: {
          name: 'Marie Dubois',
          location: 'París',
          text: '¡Servicio excepcional! El equipo me acompañó durante todo mi proyecto inmobiliario con profesionalismo.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Proceso rápido y transparente. Obtuve mi préstamo personal en menos de una semana. ¡Lo recomiendo mucho!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marsella',
          text: 'Excelentes consejos para mi recompra de crédito. Ahorré más de 200€ al mes en mis pagos.'
        }
      },
      partners: {
        title: 'Nuestros Socios Bancarios',
        subtitle: 'Gracias a nuestra red de socios financieros de confianza, le ofrecemos las mejores condiciones del mercado.',
        trustMessage: {
          title: 'Una red de confianza para su tranquilidad',
          description: 'Nuestra colaboración con las principales instituciones financieras francesas y europeas nos permite ofrecerle una amplia gama de soluciones de financiamiento en las condiciones más ventajosas del mercado.',
          labels: {
            approved: 'Socios aprobados',
            negotiated: 'Condiciones negociadas',
            fast: 'Procesamiento rápido'
          }
        }
      },
      footer: {
        tagline: 'Su socio financiero',
        description: 'Desde 2006, acompañamos a particulares y profesionales en la realización de sus proyectos financieros con experiencia y transparencia.',
        sections: {
          services: 'Nuestros Servicios',
          company: 'Empresa',
          legal: 'Información Legal'
        },
        services: {
          personalLoans: 'Préstamos personales',
          mortgageLoans: 'Préstamos hipotecarios',
          creditBuyback: 'Recompras de crédito',
          workCredit: 'Crédito de trabajo',
          insurance: 'Seguros'
        },
        company: {
          about: 'Acerca de',
          team: 'Nuestro equipo',
          careers: 'Carreras',
          partners: 'Socios',
          news: 'Noticias'
        },
        legal: {
          terms: 'Avisos legales',
          privacy: 'Política de privacidad',
          conditions: 'Condiciones generales',
          sitemap: 'Mapa del sitio',
          cookies: 'Cookies'
        },
        trust: {
          title: 'Etiquetas de Confianza',
          gdpr: 'RGPD Conforme',
          gdprDesc: 'Protección de datos',
          ssl: 'SSL Seguro',
          sslDesc: 'Conexiones cifradas',
          rcs: 'RCS Évry',
          rcsDesc: 'Empresa registrada'
        },
        companyInfo: {
          title: 'Neovita Finanz - Información de la Empresa',
          legalForm: 'Forma jurídica',
          capital: 'Capital social',
          employees: 'Personal'
        },
        warning: {
          title: 'Advertencia Importante',
          rates: 'Las tasas de interés mostradas son indicativas y están sujetas a validación según el perfil del cliente y las condiciones del mercado.',
          credit: 'Un crédito le compromete y debe ser reembolsado. Verifique su capacidad de reembolso antes de comprometerse.',
          insurance: 'Las garantías de seguro están sujetas a las condiciones generales de los contratos propuestos.'
        },
        copyright: 'Todos los derechos reservados.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Su socio financiero de confianza. Soluciones de préstamos personales, hipotecas, recompra de crédito desde 2006.',
        heroTitle: 'Su socio financiero de confianza',
        heroSubtitle: 'Soluciones de préstamos personalizadas desde 2006',
        servicesTitle: 'Nuestras Soluciones de Financiamiento',
        servicesSubtitle: 'Descubra nuestras soluciones adaptadas a todos sus proyectos',
        advantagesTitle: '¿Por qué elegir Neovita Finanz?',
        ctaTitle: '¿Listo para realizar su proyecto?',
        ctaSubtitle: 'Nuestros asesores expertos le acompañan en todos sus pasos'
      },
      services: {
        personalLoans: {
          title: 'Préstamos personales',
          description: 'Financie sus proyectos personales con condiciones ventajosas'
        },
        mortgageLoans: {
          title: 'Préstamos hipotecarios',
          description: 'Concrete su proyecto inmobiliario con nuestro acompañamiento'
        },
        creditBuyback: {
          title: 'Recompra de crédito',
          description: 'Optimice sus finanzas agrupando sus créditos'
        }
      },
      advantages: {
        security: {
          title: 'Seguridad garantizada',
          description: 'Sus datos están protegidos y seguros'
        },
        speed: {
          title: 'Respuesta rápida',
          description: 'Respuesta en 24 horas para su solicitud'
        },
        experts: {
          title: 'Asesores expertos',
          description: '43 expertos a su servicio desde 2006'
        }
      }
    },
    pt: {
      nav: {
        home: 'Início',
        personalLoans: 'Empréstimos pessoais',
        mortgageLoans: 'Empréstimos hipotecários',
        creditBuyback: 'Recompra de crédito',
        workCredit: 'Crédito de trabalho',
        insurance: 'Seguros',
        about: 'Sobre'
      },
      common: {
        requestLoan: 'Solicitar empréstimo',
        contactUs: 'Contacte-nos',
        learnMore: 'Saber mais',
        learnMoreAbout: 'Saber mais sobre',
        discover: 'Descobrir',
        startRequest: 'Começar minha solicitação',
        phoneAvailable: 'Consultor disponível de segunda a sexta das 9h às 18h'
      },
      hero: {
        slide1: {
          title: 'Seu futuro financeiro começa aqui',
          subtitle: 'Soluções seguras desde 2006',
          description: 'Realize seus projetos com nossas soluções de financiamento personalizadas'
        },
        slide2: {
          title: 'Realize seus projetos imobiliários',
          subtitle: 'Taxas hipotecárias a partir de 2%*',
          description: 'Acompanhamento personalizado para aquisição de sua residência principal ou investimento de aluguel'
        },
        slide3: {
          title: 'Proteja seu futuro',
          subtitle: 'Experiência financeira há mais de 17 anos',
          description: '43 especialistas ao seu serviço para acompanhá-lo em todos os seus projetos financeiros'
        },
        slide4: {
          title: 'Invista na sua educação',
          subtitle: 'Empréstimo estudantil a partir de 2%*',
          description: 'Financie seus estudos superiores com nossas soluções de empréstimo estudantil vantajosas'
        },
        cta: {
          primary: 'Solicitar um empréstimo agora',
          secondary: 'Simular meu empréstimo'
        },
        disclaimer: '*Taxa indicativa, sujeita ao estudo do seu processo'
      },
      simulator: {
        title: 'Simulador de Empréstimo',
        subtitle: 'Estime sua capacidade de empréstimo em poucos cliques',
        amount: 'Valor desejado',
        duration: 'Duração',
        years: 'anos',
        rate: 'Taxa de juros',
        monthlyPayment: 'Pagamento mensal',
        totalCost: 'Custo total',
        calculate: 'Calcular',
        requestLoan: 'Fazer uma solicitação'
      },
      testimonials: {
        title: 'Depoimentos de Clientes',
        subtitle: 'Descubra a experiência dos nossos clientes satisfeitos',
        client1: {
          name: 'Marie Dubois',
          location: 'Paris',
          text: 'Serviço excepcional! A equipe me acompanhou durante todo o meu projeto imobiliário com profissionalismo.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Processo rápido e transparente. Obtive meu empréstimo pessoal em menos de uma semana. Recomendo vivamente!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marseille',
          text: 'Excelentes conselhos para a minha recompra de crédito. Economizei mais de 200€ por mês nas minhas prestações.'
        }
      },
      partners: {
        title: 'Nossos Parceiros Bancários',
        subtitle: 'Graças à nossa rede de parceiros financeiros de confiança, oferecemos-lhe as melhores condições do mercado.',
        trustMessage: {
          title: 'Uma rede de confiança para sua tranquilidade',
          description: 'Nossa colaboração com as principais instituições financeiras francesas e europeias nos permite oferecer uma ampla gama de soluções de financiamento nas condições mais vantajosas do mercado.',
          labels: {
            approved: 'Parceiros aprovados',
            negotiated: 'Condições negociadas',
            fast: 'Processamento rápido'
          }
        }
      },
      footer: {
        tagline: 'Seu parceiro financeiro',
        description: 'Desde 2006, acompanhamos particulares e profissionais na realização dos seus projetos financeiros com perícia e transparência.',
        sections: {
          services: 'Nossos Serviços',
          company: 'Empresa',
          legal: 'Informações Legais'
        },
        services: {
          personalLoans: 'Empréstimos pessoais',
          mortgageLoans: 'Empréstimos hipotecários',
          creditBuyback: 'Recompras de crédito',
          workCredit: 'Crédito de trabalho',
          insurance: 'Seguros'
        },
        company: {
          about: 'Sobre',
          team: 'Nossa equipe',
          careers: 'Carreiras',
          partners: 'Parceiros',
          news: 'Notícias'
        },
        legal: {
          terms: 'Avisos legais',
          privacy: 'Política de privacidade',
          conditions: 'Condições gerais',
          sitemap: 'Mapa do site',
          cookies: 'Cookies'
        },
        trust: {
          title: 'Selos de Confiança',
          gdpr: 'RGPD Conforme',
          gdprDesc: 'Proteção de dados',
          ssl: 'SSL Seguro',
          sslDesc: 'Conexões criptografadas',
          rcs: 'RCS Évry',
          rcsDesc: 'Empresa registrada'
        },
        companyInfo: {
          title: 'Neovita Finanz - Informações da Empresa',
          legalForm: 'Forma jurídica',
          capital: 'Capital social',
          employees: 'Funcionários'
        },
        warning: {
          title: 'Aviso Importante',
          rates: 'As taxas de juros exibidas são indicativas e sujeitas à validação de acordo com o perfil do cliente e as condições do mercado.',
          credit: 'Um crédito compromete-o e deve ser reembolsado. Verifique sua capacidade de reembolso antes de se comprometer.',
          insurance: 'As garantias de seguro estão sujeitas às condições gerais dos contratos propostos.'
        },
        copyright: 'Todos os direitos reservados.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Seu parceiro financeiro de confiança. Soluções de empréstimos pessoais, hipotecas, recompra de crédito desde 2006.',
        heroTitle: 'Seu parceiro financeiro de confiança',
        heroSubtitle: 'Soluções de empréstimos personalizadas desde 2006',
        servicesTitle: 'Nossas Soluções de Financiamento',
        servicesSubtitle: 'Descubra nossas soluções adaptadas a todos os seus projetos',
        advantagesTitle: 'Por que escolher Neovita Finanz?',
        ctaTitle: 'Pronto para realizar seu projeto?',
        ctaSubtitle: 'Nossos consultores especialistas o acompanham em todas as etapas'
      },
      services: {
        personalLoans: {
          title: 'Empréstimos pessoais',
          description: 'Financie seus projetos pessoais com condições vantajosas'
        },
        mortgageLoans: {
          title: 'Empréstimos hipotecários',
          description: 'Concretize seu projeto imobiliário com nosso acompanhamento'
        },
        creditBuyback: {
          title: 'Recompra de crédito',
          description: 'Otimize suas finanças agrupando seus créditos'
        }
      },
      advantages: {
        security: {
          title: 'Segurança garantida',
          description: 'Seus dados estão protegidos e seguros'
        },
        speed: {
          title: 'Resposta rápida',
          description: 'Resposta em 24 horas para sua solicitação'
        },
        experts: {
          title: 'Consultores especialistas',
          description: '43 especialistas ao seu serviço desde 2006'
        }
      }
    },
    it: {
      nav: {
        home: 'Home',
        personalLoans: 'Prestiti personali',
        mortgageLoans: 'Mutui ipotecari',
        creditBuyback: 'Riacquisto del credito',
        workCredit: 'Credito lavoro',
        insurance: 'Assicurazioni',
        about: 'Chi siamo'
      },
      common: {
        requestLoan: 'Richiedi prestito',
        contactUs: 'Contattaci',
        learnMore: 'Saperne di più',
        learnMoreAbout: 'Saperne di più su',
        discover: 'Scoprire',
        startRequest: 'Inizia la mia richiesta',
        phoneAvailable: 'Consulente disponibile dal lunedì al venerdì dalle 9 alle 18'
      },
      hero: {
        slide1: {
          title: 'Il vostro futuro finanziario inizia qui',
          subtitle: 'Soluzioni sicure dal 2006',
          description: 'Realizzate i vostri progetti con le nostre soluzioni di finanziamento personalizzate'
        },
        slide2: {
          title: 'Realizzate i vostri progetti immobiliari',
          subtitle: 'Tassi ipotecari dal 2%*',
          description: 'Accompagnamento personalizzato per l\'acquisizione della vostra residenza principale o investimento locativo'
        },
        slide3: {
          title: 'Assicurate il vostro futuro',
          subtitle: 'Esperienza finanziaria da oltre 17 anni',
          description: '43 esperti al vostro servizio per accompagnarvi in tutti i vostri progetti finanziari'
        },
        slide4: {
          title: 'Investite nella vostra educazione',
          subtitle: 'Prestito studentesco dal 2%*',
          description: 'Finanziate i vostri studi superiori con le nostre soluzioni di prestito studentesco vantaggiose'
        },
        cta: {
          primary: 'Richiedere un prestito ora',
          secondary: 'Simulare il mio prestito'
        },
        disclaimer: '*Tasso indicativo, soggetto allo studio del vostro dossier'
      },
      simulator: {
        title: 'Simulatore di Prestito',
        subtitle: 'Stimate la vostra capacità di prestito in pochi clic',
        amount: 'Importo desiderato',
        duration: 'Durata',
        years: 'anni',
        rate: 'Tasso di interesse',
        monthlyPayment: 'Rata mensile',
        totalCost: 'Costo totale',
        calculate: 'Calcolare',
        requestLoan: 'Fare una richiesta'
      },
      testimonials: {
        title: 'Testimonianze Clienti',
        subtitle: 'Scoprite l\'esperienza dei nostri clienti soddisfatti',
        client1: {
          name: 'Marie Dubois',
          location: 'Parigi',
          text: 'Servizio eccezionale! Il team mi ha accompagnato durante tutto il mio progetto immobiliare con professionalità.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lione',
          text: 'Processo rapido e trasparente. Ho ottenuto il mio prestito personale in meno di una settimana. Lo raccomando vivamente!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marsiglia',
          text: 'Eccellenti consigli per il mio riacquisto del credito. Ho risparmiato più di 200€ al mese sulle mie rate.'
        }
      },
      partners: {
        title: 'I Nostri Partner Bancari',
        subtitle: 'Grazie alla nostra rete di partner finanziari di fiducia, vi offriamo le migliori condizioni del mercato.',
        trustMessage: {
          title: 'Una rete di fiducia per la vostra serenità',
          description: 'La nostra collaborazione con le principali istituzioni finanziarie francesi ed europee ci permette di offrirvi un\'ampia gamma di soluzioni di finanziamento alle condizioni più vantaggiose del mercato.',
          labels: {
            approved: 'Partner approvati',
            negotiated: 'Condizioni negoziate',
            fast: 'Elaborazione rapida'
          }
        }
      },
      footer: {
        tagline: 'Il vostro partner finanziario',
        description: 'Dal 2006, accompagniamo privati e professionisti nella realizzazione dei loro progetti finanziari con competenza e trasparenza.',
        sections: {
          services: 'I Nostri Servizi',
          company: 'Azienda',
          legal: 'Informazioni Legali'
        },
        services: {
          personalLoans: 'Prestiti personali',
          mortgageLoans: 'Mutui ipotecari',
          creditBuyback: 'Riacquisti del credito',
          workCredit: 'Credito lavoro',
          insurance: 'Assicurazioni'
        },
        company: {
          about: 'Chi siamo',
          team: 'Il nostro team',
          careers: 'Carriere',
          partners: 'Partner',
          news: 'Notizie'
        },
        legal: {
          terms: 'Note legali',
          privacy: 'Politica sulla privacy',
          conditions: 'Condizioni generali',
          sitemap: 'Mappa del sito',
          cookies: 'Cookie'
        },
        trust: {
          title: 'Etichette di Fiducia',
          gdpr: 'GDPR Conform',
          gdprDesc: 'Protezione dei dati',
          ssl: 'SSL Sicuro',
          sslDesc: 'Connessioni crittografate',
          rcs: 'RCS Évry',
          rcsDesc: 'Società registrata'
        },
        companyInfo: {
          title: 'Neovita Finanz - Informazioni Aziendali',
          legalForm: 'Forma giuridica',
          capital: 'Capitale sociale',
          employees: 'Dipendenti'
        },
        warning: {
          title: 'Avvertimento Importante',
          rates: 'I tassi di interesse visualizzati sono indicativi e soggetti a convalida secondo il profilo del cliente e le condizioni del mercato.',
          credit: 'Un credito vi impegna e deve essere rimborsato. Verificate la vostra capacità di rimborso prima di impegnarvi.',
          insurance: 'Le garanzie assicurative sono soggette alle condizioni generali dei contratti proposti.'
        },
        copyright: 'Tutti i diritti riservati.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Il vostro partner finanziario di fiducia. Soluzioni di prestiti personali, mutui, riacquisto crediti dal 2006.',
        heroTitle: 'Il vostro partner finanziario di fiducia',
        heroSubtitle: 'Soluzioni di prestito personalizzate dal 2006',
        servicesTitle: 'Le Nostre Soluzioni di Finanziamento',
        servicesSubtitle: 'Scoprite le nostre soluzioni adatte a tutti i vostri progetti',
        advantagesTitle: 'Perché scegliere Neovita Finanz?',
        ctaTitle: 'Pronti a realizzare il vostro progetto?',
        ctaSubtitle: 'I nostri consulenti esperti vi accompagnano in tutti i vostri passi'
      },
      services: {
        personalLoans: {
          title: 'Prestiti personali',
          description: 'Finanziate i vostri progetti personali con condizioni vantaggiose'
        },
        mortgageLoans: {
          title: 'Mutui ipotecari',
          description: 'Concretizzate il vostro progetto immobiliare con il nostro accompagnamento'
        },
        creditBuyback: {
          title: 'Riacquisto del credito',
          description: 'Ottimizzate le vostre finanze raggruppando i vostri crediti'
        }
      },
      advantages: {
        security: {
          title: 'Sicurezza garantita',
          description: 'I vostri dati sono protetti e sicuri'
        },
        speed: {
          title: 'Risposta rapida',
          description: 'Risposta entro 24 ore per la vostra richiesta'
        },
        experts: {
          title: 'Consulenti esperti',
          description: '43 esperti al vostro servizio dal 2006'
        }
      }
    },
    nl: {
      nav: {
        home: 'Home',
        personalLoans: 'Persoonlijke leningen',
        mortgageLoans: 'Hypothecaire leningen',
        creditBuyback: 'Krediet terugkoop',
        workCredit: 'Werk krediet',
        insurance: 'Verzekeringen',
        about: 'Over ons'
      },
      common: {
        requestLoan: 'Lening aanvragen',
        contactUs: 'Contacteer ons',
        learnMore: 'Meer weten',
        learnMoreAbout: 'Meer weten over',
        discover: 'Ontdekken',
        startRequest: 'Start mijn aanvraag',
        phoneAvailable: 'Adviseur beschikbaar maandag tot vrijdag van 9u tot 18u'
      },
      hero: {
        slide1: {
          title: 'Uw financiële toekomst begint hier',
          subtitle: 'Veilige oplossingen sinds 2006',
          description: 'Realiseer uw projecten met onze gepersonaliseerde financieringsoplossingen'
        },
        slide2: {
          title: 'Realiseer uw vastgoedprojecten',
          subtitle: 'Hypotheektarieven vanaf 2%*',
          description: 'Persoonlijke begeleiding voor de aankoop van uw hoofdverblijf of huurinvestering'
        },
        slide3: {
          title: 'Beveilig uw toekomst',
          subtitle: 'Financiële expertise voor meer dan 17 jaar',
          description: '43 experts tot uw dienst om u te begeleiden in al uw financiële projecten'
        },
        slide4: {
          title: 'Investeer in uw onderwijs',
          subtitle: 'Studentenlening vanaf 2%*',
          description: 'Financier uw hoger onderwijs met onze voordelige studentenleningoplossingen'
        },
        cta: {
          primary: 'Nu een lening aanvragen',
          secondary: 'Mijn lening simuleren'
        },
        disclaimer: '*Indicatief tarief, onder voorbehoud van bestudering van uw dossier'
      },
      simulator: {
        title: 'Lening Simulator',
        subtitle: 'Schat uw leencapaciteit in enkele klikken',
        amount: 'Gewenst bedrag',
        duration: 'Duur',
        years: 'jaar',
        rate: 'Rentevoet',
        monthlyPayment: 'Maandelijkse betaling',
        totalCost: 'Totale kosten',
        calculate: 'Berekenen',
        requestLoan: 'Een aanvraag doen'
      },
      testimonials: {
        title: 'Klantgetuigenissen',
        subtitle: 'Ontdek de ervaring van onze tevreden klanten',
        client1: {
          name: 'Marie Dubois',
          location: 'Parijs',
          text: 'Uitzonderlijke service! Het team heeft me tijdens mijn vastgoedproject professioneel begeleid.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Snel en transparant proces. Ik kreeg mijn persoonlijke lening in minder dan een week. Sterk aanbevolen!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marseille',
          text: 'Uitstekend advies voor mijn krediet terugkoop. Ik bespaarde meer dan €200 per maand op mijn betalingen.'
        }
      },
      partners: {
        title: 'Onze Bankpartners',
        subtitle: 'Dankzij ons netwerk van vertrouwde financiële partners bieden wij u de beste marktvoorwaarden.',
        trustMessage: {
          title: 'Een vertrouwensnetwerk voor uw gemoedsrust',
          description: 'Onze samenwerking met toonaangevende Franse en Europese financiële instellingen stelt ons in staat u een breed scala aan financieringsoplossingen aan te bieden tegen de meest voordelige marktvoorwaarden.',
          labels: {
            approved: 'Goedgekeurde partners',
            negotiated: 'Onderhandelde voorwaarden',
            fast: 'Snelle verwerking'
          }
        }
      },
      footer: {
        tagline: 'Uw financiële partner',
        description: 'Sinds 2006 begeleiden wij particulieren en professionals bij de realisatie van hun financiële projecten met expertise en transparantie.',
        sections: {
          services: 'Onze Diensten',
          company: 'Bedrijf',
          legal: 'Juridische Informatie'
        },
        services: {
          personalLoans: 'Persoonlijke leningen',
          mortgageLoans: 'Hypothecaire leningen',
          creditBuyback: 'Krediet terugkopen',
          workCredit: 'Werk krediet',
          insurance: 'Verzekeringen'
        },
        company: {
          about: 'Over ons',
          team: 'Ons team',
          careers: 'Carrières',
          partners: 'Partners',
          news: 'Nieuws'
        },
        legal: {
          terms: 'Juridische kennisgevingen',
          privacy: 'Privacybeleid',
          conditions: 'Algemene voorwaarden',
          sitemap: 'Sitemap',
          cookies: 'Cookies'
        },
        trust: {
          title: 'Vertrouwenslabels',
          gdpr: 'AVG Conform',
          gdprDesc: 'Gegevensbescherming',
          ssl: 'SSL Beveiligd',
          sslDesc: 'Versleutelde verbindingen',
          rcs: 'RCS Évry',
          rcsDesc: 'Geregistreerd bedrijf'
        },
        companyInfo: {
          title: 'Neovita Finanz - Bedrijfsinformatie',
          legalForm: 'Rechtsvorm',
          capital: 'Maatschappelijk kapitaal',
          employees: 'Personeel'
        },
        warning: {
          title: 'Belangrijke Waarschuwing',
          rates: 'De getoonde rentetarieven zijn indicatief en onderhevig aan validatie volgens het klantprofiel en marktomstandigheden.',
          credit: 'Een krediet verplicht u en moet worden terugbetaald. Controleer uw terugbetalingscapaciteit voordat u zich verbindt.',
          insurance: 'Verzekeringsgaranties zijn onderworpen aan de algemene voorwaarden van voorgestelde contracten.'
        },
        copyright: 'Alle rechten voorbehouden.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Uw vertrouwde financiële partner. Persoonlijke lening oplossingen, hypotheken, krediet terugkoop sinds 2006.',
        heroTitle: 'Uw vertrouwde financiële partner',
        heroSubtitle: 'Gepersonaliseerde leningoplossingen sinds 2006',
        servicesTitle: 'Onze Financieringsoplossingen',
        servicesSubtitle: 'Ontdek onze oplossingen aangepast aan al uw projecten',
        advantagesTitle: 'Waarom kiezen voor Neovita Finanz?',
        ctaTitle: 'Klaar om uw project te realiseren?',
        ctaSubtitle: 'Onze expert adviseurs begeleiden u in al uw stappen'
      },
      services: {
        personalLoans: {
          title: 'Persoonlijke leningen',
          description: 'Financier uw persoonlijke projecten met voordelige voorwaarden'
        },
        mortgageLoans: {
          title: 'Hypothecaire leningen',
          description: 'Realiseer uw vastgoedproject met onze begeleiding'
        },
        creditBuyback: {
          title: 'Krediet terugkoop',
          description: 'Optimaliseer uw financiën door uw kredieten te groeperen'
        }
      },
      advantages: {
        security: {
          title: 'Gegarandeerde veiligheid',
          description: 'Uw gegevens zijn beschermd en veilig'
        },
        speed: {
          title: 'Snelle reactie',
          description: 'Reactie binnen 24 uur op uw aanvraag'
        },
        experts: {
          title: 'Expert adviseurs',
          description: '43 experts tot uw dienst sinds 2006'
        }
      }
    },
    da: {
      nav: {
        home: 'Hjem',
        personalLoans: 'Personlige lån',
        mortgageLoans: 'Realkreditlån',
        creditBuyback: 'Kredit tilbagekøb',
        workCredit: 'Arbejdskredit',
        insurance: 'Forsikringer',
        about: 'Om os'
      },
      common: {
        requestLoan: 'Ansøg om lån',
        contactUs: 'Kontakt os',
        learnMore: 'Lær mere',
        learnMoreAbout: 'Lær mere om',
        discover: 'Opdag',
        startRequest: 'Start min ansøgning',
        phoneAvailable: 'Rådgiver tilgængelig mandag til fredag fra 9 til 18'
      },
      hero: {
        slide1: {
          title: 'Din finansielle fremtid starter her',
          subtitle: 'Sikre løsninger siden 2006',
          description: 'Realiser dine projekter med vores personaliserede finansieringsløsninger'
        },
        slide2: {
          title: 'Realiser dine ejendomsprojekter',
          subtitle: 'Boliglånsrenter fra 2%*',
          description: 'Personlig vejledning til køb af din hovedbolig eller udlejningsinvestering'
        },
        slide3: {
          title: 'Sikr din fremtid',
          subtitle: 'Finansiel ekspertise i over 17 år',
          description: '43 eksperter til din tjeneste for at støtte dig i alle dine finansielle projekter'
        },
        slide4: {
          title: 'Invester i din uddannelse',
          subtitle: 'Studielån fra 2%*',
          description: 'Finansier din videregående uddannelse med vores fordelagtige studielånsløsninger'
        },
        cta: {
          primary: 'Ansøg om lån nu',
          secondary: 'Simuler mit lån'
        },
        disclaimer: '*Vejledende rente, under forbehold af gennemgang af dit dossier'
      },
      simulator: {
        title: 'Lånesimulator',
        subtitle: 'Estimer din lånekapacitet med få klik',
        amount: 'Ønsket beløb',
        duration: 'Varighed',
        years: 'år',
        rate: 'Rente',
        monthlyPayment: 'Månedlig betaling',
        totalCost: 'Samlede omkostninger',
        calculate: 'Beregn',
        requestLoan: 'Lav en ansøgning'
      },
      testimonials: {
        title: 'Kundeanmeldelser',
        subtitle: 'Opdag oplevelsen hos vores tilfredse kunder',
        client1: {
          name: 'Marie Dubois',
          location: 'Paris',
          text: 'Enestående service! Teamet støttede mig gennem hele mit ejendomsprojekt med professionalisme.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Hurtig og gennemsigtig proces. Jeg fik mit personlige lån på mindre end en uge. Anbefaler stærkt!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marseille',
          text: 'Fremragende rådgivning til mit kredit tilbagekøb. Jeg sparede mere end €200 om måneden på mine betalinger.'
        }
      },
      partners: {
        title: 'Vores Bankpartnere',
        subtitle: 'Takket være vores netværk af betroede finansielle partnere tilbyder vi dig de bedste markedsvilkår.',
        trustMessage: {
          title: 'Et tillidsnetværk for din ro i sindet',
          description: 'Vores samarbejde med førende franske og europæiske finansieringsinstitutter gør os i stand til at tilbyde dig en bred vifte af finansieringsløsninger på de mest fordelagtige markedsvilkår.',
          labels: {
            approved: 'Godkendte partnere',
            negotiated: 'Forhandlet vilkår',
            fast: 'Hurtig behandling'
          }
        }
      },
      footer: {
        tagline: 'Din finansielle partner',
        description: 'Since 2006 har vi støttet private og professionelle i at realisere deres finansieringsprojekter med ekspertise og gennemsigtighed.',
        sections: {
          services: 'Vores Tjenester',
          company: 'Virksomhed',
          legal: 'Juridisk Information'
        },
        services: {
          personalLoans: 'Personlige lån',
          mortgageLoans: 'Realkreditlån',
          creditBuyback: 'Kredit tilbagekøb',
          workCredit: 'Arbejdskredit',
          insurance: 'Forsikringer'
        },
        company: {
          about: 'Om os',
          team: 'Vores team',
          careers: 'Karrierer',
          partners: 'Partnere',
          news: 'Nyheder'
        },
        legal: {
          terms: 'Juridiske meddelelser',
          privacy: 'Privatlivspolitik',
          conditions: 'Generelle betingelser',
          sitemap: 'Sitemap',
          cookies: 'Cookies'
        },
        trust: {
          title: 'Tillidsmærker',
          gdpr: 'GDPR Overholdelse',
          gdprDesc: 'Databeskyttelse',
          ssl: 'SSL Sikret',
          sslDesc: 'Krypterede forbindelser',
          rcs: 'RCS Évry',
          rcsDesc: 'Registreret virksomhed'
        },
        companyInfo: {
          title: 'Neovita Finanz - Virksomhedsinformation',
          legalForm: 'Juridisk form',
          capital: 'Aktiekapital',
          employees: 'Medarbejdere'
        },
        warning: {
          title: 'Vigtig Advarsel',
          rates: 'De viste renter er vejledende og underlagt validering i henhold til kundeprofil og markkinaforhold.',
          credit: 'Et kredit forpligter dig og skal tilbagebetales. Tjek din tilbagebetaleskapacitet inden du forpligter dig.',
          insurance: 'Forsikringsgarantier er underlagt de generelle betingelser for foreslåede kontrakter.'
        },
        copyright: 'Alle rettigheder forbeholdes.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Din betroede finansielle partner. Personlige låneløsninger, realkreditlån, kredit tilbagekøb siden 2006.',
        heroTitle: 'Din betroede finansielle partner',
        heroSubtitle: 'Personaliserede låneløsninger siden 2006',
        servicesTitle: 'Vores Finansieringsløsninger',
        servicesSubtitle: 'Opdag vores løsninger tilpasset alle dine projekter',
        advantagesTitle: 'Hvorfor vælge Neovita Finanz?',
        ctaTitle: 'Klar til at realisere dit projekt?',
        ctaSubtitle: 'Vores ekspertrådgivere støtter dig i alle dine trin'
      },
      services: {
        personalLoans: {
          title: 'Personlige lån',
          description: 'Finansier dine personlige projekter med fordelagtige betingelser'
        },
        mortgageLoans: {
          title: 'Realkreditlån',
          description: 'Realiser dit ejendomsprojekt med vores støtte'
        },
        creditBuyback: {
          title: 'Kredit tilbagekøb',
          description: 'Optimer din økonomi ved at gruppere dine kreditter'
        }
      },
      advantages: {
        security: {
          title: 'Garanteret sikkerhed',
          description: 'Dine data er beskyttet og sikre'
        },
        speed: {
          title: 'Hurtig respons',
          description: 'Svar inden for 24 timer på din ansøgning'
        },
        experts: {
          title: 'Ekspertrådgivere',
          description: '43 eksperter til din tjeneste siden 2006'
        }
      }
    },
    fi: {
      nav: {
        home: 'Koti',
        personalLoans: 'Henkilökohtaiset lainat',
        mortgageLoans: 'Asuntolainat',
        creditBuyback: 'Luoton takaisinosto',
        workCredit: 'Työluotto',
        insurance: 'Vakuutukset',
        about: 'Tietoa meistä'
      },
      common: {
        requestLoan: 'Hae lainaa',
        contactUs: 'Ota yhteyttä',
        learnMore: 'Lue lisää',
        learnMoreAbout: 'Lue lisää aiheesta',
        discover: 'Löydä',
        startRequest: 'Aloita hakemukseni',
        phoneAvailable: 'Neuvoja saatavilla maanantaista perjantaihin klo 9-18'
      },
      hero: {
        slide1: {
          title: 'Taloudellinen tulevaisuutesi alkaa täältä',
          subtitle: 'Turvalliset ratkaisut vuodesta 2006',
          description: 'Toteuta projektisi henkilökohtaisilla rahoitusratkaisuilla'
        },
        slide2: {
          title: 'Toteuta kiinteistöprojektisi',
          subtitle: 'Asuntolainakorot 2%:sta*',
          description: 'Henkilökohtainen ohjaus pääasunnon tai vuokrasijoituksen hankintaan'
        },
        slide3: {
          title: 'Turvaa tulevaisuutesi',
          subtitle: 'Taloudellista asiantuntemusta yli 17 vuotta',
          description: '43 asiantuntijaa palvelemassa sinua kaikissa taloudellisissa projekteissasi'
        },
        slide4: {
          title: 'Sijoita koulutukseesi',
          subtitle: 'Opintolaina 2%:sta*',
          description: 'Rahoita korkeakoulutuksesi edullisilla opintolaineratkaisuilla'
        },
        cta: {
          primary: 'Hae lainaa nyt',
          secondary: 'Simuloi lainani'
        },
        disclaimer: '*Ohjeellinen korko, hakemuksen tarkastelun mukaan'
      },
      simulator: {
        title: 'Lainasimullaattori',
        subtitle: 'Arvioi lainakykysi muutamalla klikkauksella',
        amount: 'Haluttu summa',
        duration: 'Kesto',
        years: 'vuotta',
        rate: 'Korko',
        monthlyPayment: 'Kuukausierä',
        totalCost: 'Kokonaiskustannukset',
        calculate: 'Laske',
        requestLoan: 'Tee hakemus'
      },
      testimonials: {
        title: 'Asiakkaiden Kokemuksia',
        subtitle: 'Tutustu tyytyväisten asiakkaidemme kokemuksiin',
        client1: {
          name: 'Marie Dubois',
          location: 'Pariisi',
          text: 'Poikkeuksellinen palvelu! Tiimi tuki minua koko kiinteistöprojektini ajan ammattitaidolla.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Nopea ja läpinäkyvä prosessi. Sain henkilökohtaisen lainani alle viikossa. Suosittelen lämpimästi!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marseille',
          text: 'Erinomainen neuvonta luoton takaisinostooni. Säästin yli 200€ kuukaudessa maksuissani.'
        }
      },
      partners: {
        title: 'Pankkikumppanimme',
        subtitle: 'Luotettavien rahoituskumppanien verkoston ansiosta tarjoamme sinulle markkinoiden parhaat ehdot.',
        trustMessage: {
          title: 'Luotettava verkosto mielenrauhaasi varten',
          description: 'Yhteistyömme johtavien ranskalaisten ja eurooppalaisten rahoituslaitosten kanssa mahdollistaa laajan valikoiman rahoitusratkaisuja markkinoiden edullisimmilla ehdoilla.',
          labels: {
            approved: 'Hyväksytyt kumppanit',
            negotiated: 'Neuvotellut ehdot',
            fast: 'Nopea käsittely'
          }
        }
      },
      footer: {
        tagline: 'Rahoituskumppanisi',
        description: 'Vuodesta 2006 olemme tukeneet yksityishenkilöitä ja ammattilaisia heidän rahoitusprojektiensa toteuttamisessa asiantuntemuksella ja läpinäkyvyydellä.',
        sections: {
          services: 'Palvelumme',
          company: 'Yritys',
          legal: 'Juridiset Tiedot'
        },
        services: {
          personalLoans: 'Henkilökohtaiset lainat',
          mortgageLoans: 'Asuntolainat',
          creditBuyback: 'Luoton takaisinosto',
          workCredit: 'Työluotto',
          insurance: 'Vakuutukset'
        },
        company: {
          about: 'Tietoa meistä',
          team: 'Tiimimme',
          careers: 'Urat',
          partners: 'Kumppanit',
          news: 'Uutiset'
        },
        legal: {
          terms: 'Juridiset ilmoitukset',
          privacy: 'Tietosuojakäytäntö',
          conditions: 'Yleiset ehdot',
          sitemap: 'Sivukartta',
          cookies: 'Evästeet'
        },
        trust: {
          title: 'Luottamusmerkit',
          gdpr: 'GDPR Yhteensopiva',
          gdprDesc: 'Tietosuoja',
          ssl: 'SSL Suojattu',
          sslDesc: 'Salatut yhteydet',
          rcs: 'RCS Évry',
          rcsDesc: 'Rekisteröity yritys'
        },
        companyInfo: {
          title: 'Neovita Finanz - Yritystiedot',
          legalForm: 'Oikeudellinen muoto',
          capital: 'Osakepääoma',
          employees: 'Henkilöstö'
        },
        warning: {
          title: 'Tärkeä Varoitus',
          rates: 'Näytetyt korot ovat ohjeellisia ja riippuvat asiakasprofiilin ja markkinaolosuhteiden vahvistuksesta.',
          credit: 'Luotto sitoo sinua ja se on maksettava takaisin. Tarkista takaisinmaksukykysi ennen sitoutumista.',
          insurance: 'Vakuutustakuut ovat ehdotettujen sopimusten yleisten ehtojen alaisia.'
        },
        copyright: 'Kaikki oikeudet pidätetään.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Luotettava rahoituskumppanisi. Henkilökohtaisten lainojen ratkaisuja, asuntolainoja, luoton takaisinosto vuodesta 2006.',
        heroTitle: 'Luotettava rahoituskumppanisi',
        heroSubtitle: 'Henkilökohtaiset lainaratkaisut vuodesta 2006',
        servicesTitle: 'Rahoitusratkaisumme',
        servicesSubtitle: 'Tutustu kaikkiin projekteihisi soveltuviin ratkaisuihimme',
        advantagesTitle: 'Miksi valita Neovita Finanz?',
        ctaTitle: 'Valmis toteuttamaan projektisi?',
        ctaSubtitle: 'Asiantuntijaneuvojamme tukevat sinua kaikissa vaiheissa'
      },
      services: {
        personalLoans: {
          title: 'Henkilökohtaiset lainat',
          description: 'Rahoita henkilökohtaiset projektisi edullisilla ehdoilla'
        },
        mortgageLoans: {
          title: 'Asuntolainat',
          description: 'Toteuta kiinteistöprojektisi tuellämme'
        },
        creditBuyback: {
          title: 'Luoton takaisinosto',
          description: 'Optimoi rahoituksesi ryhmittelemällä luottosi'
        }
      },
      advantages: {
        security: {
          title: 'Taattu turvallisuus',
          description: 'Tietosi on suojattu ja turvassa'
        },
        speed: {
          title: 'Nopea vastaus',
          description: 'Vastaus 24 tunnin sisällä hakemukseesi'
        },
        experts: {
          title: 'Asiantuntijaneuvojat',
          description: '43 asiantuntijaa palvelemassa sinua vuodesta 2006'
        }
      }
    },
    ro: {
      nav: {
        home: 'Acasă',
        personalLoans: 'Împrumuturi personale',
        mortgageLoans: 'Împrumuturi ipotecare',
        creditBuyback: 'Răscumpărare credit',
        workCredit: 'Credit de lucru',
        insurance: 'Asigurări',
        about: 'Despre noi'
      },
      common: {
        requestLoan: 'Solicitare împrumut',
        contactUs: 'Contactați-ne',
        learnMore: 'Aflați mai multe',
        learnMoreAbout: 'Aflați mai multe despre',
        discover: 'Descoperiți',
        startRequest: 'Încep cererea mea',
        phoneAvailable: 'Consilier disponibil de luni până vineri de la 9 la 18'
      },
      hero: {
        slide1: {
          title: 'Viitorul dumneavoastră financiar începe aici',
          subtitle: 'Soluții sigure din 2006',
          description: 'Realizați-vă proiectele cu soluțiile noastre de finanțare personalizate'
        },
        slide2: {
          title: 'Realizați-vă proiectele imobiliare',
          subtitle: 'Rate ipotecare de la 2%*',
          description: 'Îndrumări personalizate pentru achiziționarea reședinței principale sau investiții de închiriere'
        },
        slide3: {
          title: 'Asigurați-vă viitorul',
          subtitle: 'Expertiză financiară de peste 17 ani',
          description: '43 de experți în serviciul dumneavoastră pentru a vă sprijini în toate proiectele financiare'
        },
        slide4: {
          title: 'Investiți în educația dumneavoastră',
          subtitle: 'Împrumut studențesc de la 2%*',
          description: 'Finanțați studiile superioare cu soluțiile noastre avantajoase de împrumut studențesc'
        },
        cta: {
          primary: 'Solicitați un împrumut acum',
          secondary: 'Simulați împrumutul meu'
        },
        disclaimer: '*Rată orientativă, în funcție de studiul dosarului dumneavoastră'
      },
      simulator: {
        title: 'Simulator Împrumut',
        subtitle: 'Estimați capacitatea de împrumut în câteva clicuri',
        amount: 'Suma dorită',
        duration: 'Durata',
        years: 'ani',
        rate: 'Rata dobânzii',
        monthlyPayment: 'Plata lunară',
        totalCost: 'Costul total',
        calculate: 'Calculați',
        requestLoan: 'Faceți o cerere'
      },
      testimonials: {
        title: 'Mărturii Clienți',
        subtitle: 'Descoperiți experiența clienților noștri mulțumiți',
        client1: {
          name: 'Marie Dubois',
          location: 'Paris',
          text: 'Serviciu excepțional! Echipa m-a susținut pe parcursul întregului meu proiect imobiliar cu profesionalism.'
        },
        client2: {
          name: 'Jean Martin',
          location: 'Lyon',
          text: 'Proces rapid și transparent. Mi-am obținut împrumutul personal în mai puțin de o săptămână. Recomand cu căldură!'
        },
        client3: {
          name: 'Sophie Laurent',
          location: 'Marseille',
          text: 'Sfaturi excelente pentru răscumpărarea creditului meu. Am economisit peste 200€ pe lună la plățile mele.'
        }
      },
      partners: {
        title: 'Partenerii Noștri Bancari',
        subtitle: 'Datorită rețelei noastre de parteneri financiari de încredere, vă oferim cele mai bune condiții de pe piață.',
        trustMessage: {
          title: 'O rețea de încredere pentru liniștea dumneavoastră',
          description: 'Colaborarea noastră cu principalele instituții financiare franceze și europene ne permite să vă oferim o gamă largă de soluții de finanțare în cele mai avantajoase condiții de pe piață.',
          labels: {
            approved: 'Parteneri aprobați',
            negotiated: 'Condiții negociate',
            fast: 'Procesare rapidă'
          }
        }
      },
      footer: {
        tagline: 'Partenerul dumneavoastră financiar',
        description: 'Din 2006, însoțim persoanele fizice și profesioniștii în realizarea proiectelor lor financiare cu expertiză și transparență.',
        sections: {
          services: 'Serviciile Noastre',
          company: 'Compania',
          legal: 'Informații Juridice'
        },
        services: {
          personalLoans: 'Împrumuturi personale',
          mortgageLoans: 'Împrumuturi ipotecare',
          creditBuyback: 'Răscumpărări de credit',
          workCredit: 'Credit de lucru',
          insurance: 'Asigurări'
        },
        company: {
          about: 'Despre',
          team: 'Echipa noastră',
          careers: 'Cariere',
          partners: 'Parteneri',
          news: 'Știri'
        },
        legal: {
          terms: 'Avize juridice',
          privacy: 'Politica de confidențialitate',
          conditions: 'Condiții generale',
          sitemap: 'Harta site-ului',
          cookies: 'Cookie-uri'
        },
        trust: {
          title: 'Etichete de Încredere',
          gdpr: 'GDPR Conform',
          gdprDesc: 'Protecția datelor',
          ssl: 'SSL Securizat',
          sslDesc: 'Conexiuni criptate',
          rcs: 'RCS Évry',
          rcsDesc: 'Companie înregistrată'
        },
        companyInfo: {
          title: 'Neovita Finanz - Informații Companie',
          legalForm: 'Forma juridică',
          capital: 'Capital social',
          employees: 'Angajați'
        },
        warning: {
          title: 'Avertisment Important',
          rates: 'Ratele dobânzii afișate sunt orientative și supuse validării în funcție de profilul clientului și condițiile pieței.',
          credit: 'Un credit vă angajează și trebuie rambursat. Verificați-vă capacitatea de rambursare înainte de a vă angaja.',
          insurance: 'Garanțiile de asigurare sunt supuse condițiilor generale ale contractelor propuse.'
        },
        copyright: 'Toate drepturile rezervate.'
      },
      home: {
        metaDescription: 'Neovita Finanz - Partenerul dumneavoastră financiar de încredere. Soluții de împrumuturi personale, ipotecare, răscumpărare credite din 2006.',
        heroTitle: 'Partenerul dumneavoastră financiar de încredere',
        heroSubtitle: 'Soluții de împrumuturi personalizate din 2006',
        servicesTitle: 'Soluțiile Noastre de Finanțare',
        servicesSubtitle: 'Descoperiți soluțiile noastre adaptate tuturor proiectelor dumneavoastră',
        advantagesTitle: 'De ce să alegeți Neovita Finanz?',
        ctaTitle: 'Gata să vă realizați proiectul?',
        ctaSubtitle: 'Consilierii noștri experți vă însoțesc în toți pașii'
      },
      services: {
        personalLoans: {
          title: 'Împrumuturi personale',
          description: 'Finanțați-vă proiectele personale cu condiții avantajoase'
        },
        mortgageLoans: {
          title: 'Împrumuturi ipotecare',
          description: 'Concretizați-vă proiectul imobiliar cu însoțirea noastră'
        },
        creditBuyback: {
          title: 'Răscumpărare credit',
          description: 'Optimizați-vă finanțele grupând creditele'
        }
      },
      advantages: {
        security: {
          title: 'Securitate garantată',
          description: 'Datele dumneavoastră sunt protejate și sigure'
        },
        speed: {
          title: 'Răspuns rapid',
          description: 'Răspuns în 24 de ore pentru cererea dumneavoastră'
        },
        experts: {
          title: 'Consilieri experți',
          description: '43 de experți în serviciul dumneavoastră din 2006'
        }
      }
    }
  };
};
