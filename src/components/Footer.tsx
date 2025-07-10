import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {

  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: t('footer.services.personalLoans'), href: `/${language}/prets-personnels` },
      { name: t('footer.services.mortgageLoans'), href: `/${language}/prets-immobiliers` },
      { name: t('footer.services.creditBuyback'), href: `/${language}/rachat-credit` },
      { name: t('footer.services.workCredit'), href: `/${language}/credit-travaux` },
      { name: t('footer.services.insurance'), href: `/${language}/assurances` }
    ],
    company: [
      { name: t('footer.company.about'), href: `/${language}/a-propos` },
      { name: t('footer.company.team'), href: `/${language}/equipe` },
      { name: t('footer.company.careers'), href: `/${language}/carrieres` },
      { name: t('footer.company.partners'), href: `/${language}/partenaires` },
      { name: t('footer.company.news'), href: `/${language}/actualites` }
    ],
    legal: [
      { name: t('footer.legal.terms'), href: `/${language}/mentions-legales` },
      { name: t('footer.legal.privacy'), href: `/${language}/politique-confidentialite` },
      { name: t('footer.legal.conditions'), href: `/${language}/conditions-generales` }
    ]
  };

  const trustLabels = [
    { name: t('footer.trust.gdpr'), description: t('footer.trust.gdprDesc') },
    { name: t('footer.trust.ssl'), description: t('footer.trust.sslDesc') },
    { name: t('footer.trust.rcs'), description: t('footer.trust.rcsDesc') }
  ];

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-700 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to={`/${language}`} className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/9ee0536b-2c03-416b-bf54-034f5028bc1f.png" 
                alt="Neovita Finanz" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Neovita Finanz</h3>
                <p className="text-green-200 text-sm">{t('footer.tagline')}</p>
              </div>
            </Link>
            
            <p className="text-green-100 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">
                  1 Rue du Bois Chaland, 91090 Lisses, France
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-green-100 text-sm">contact@neovitafinanz.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="w-8 h-8 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.sections.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-green-200 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.sections.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-green-200 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.sections.legal')}</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-green-200 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Trust Labels */}
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-yellow-400 mb-3">{t('footer.trust.title')}</h5>
              {trustLabels.map((label, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div>
                    <span className="text-green-100 text-xs font-medium">{label.name}</span>
                    <p className="text-green-300 text-xs">{label.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal Information */}
      <div className="border-t border-green-600">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Company Details */}
            <div>
              <h4 className="text-lg font-bold text-yellow-400 mb-4">{t('footer.companyInfo.title')}</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-green-200">
                <div>
                  <p><strong>{t('footer.companyInfo.legalForm')} :</strong> SARL</p>
                  <p><strong>{t('footer.companyInfo.capital')} :</strong> 17 000 000 €</p>
                  <p><strong>SIREN :</strong> 493 171 540</p>
                  <p><strong>SIRET :</strong> 493 171 540 00013</p>
                </div>
                <div>
                  <p><strong>TVA :</strong> FR16493171540</p>
                  <p><strong>RCS :</strong> Évry (07/07/2008)</p>
                  <p><strong>RNE :</strong> 02/04/2008</p>
                  <p><strong>{t('footer.companyInfo.employees')} :</strong> 43 salariés</p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div>
              <h4 className="text-lg font-bold text-yellow-400 mb-4">{t('footer.warning.title')}</h4>
              <div className="text-sm text-green-200 space-y-2">
                <p>
                  <strong>{t('footer.warning.interestRateLabel')} :</strong> {t('footer.warning.rates')}
                </p>
                <p>
                  <strong>{t('footer.warning.creditLabel')} :</strong> {t('footer.warning.credit')}
                </p>
                <p>
                  <strong>{t('footer.warning.insuranceLabel')} :</strong> {t('footer.warning.insurance')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-600 bg-green-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-green-300 text-sm">
              © {currentYear} Neovita Finanz. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
