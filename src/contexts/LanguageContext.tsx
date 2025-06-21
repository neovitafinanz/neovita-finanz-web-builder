
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
      home: {
        metaDescription: 'Neovita Finanz - Din betroede finansielle partner. Personlige låneløsninger, realkreditlån, kredit tilbag ekøb siden 2006.',
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
          title: 'Securitate garantață',
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
