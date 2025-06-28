
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Lock, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, currentLanguage } = useLanguage();

  const getLocalizedPath = (path: string) => {
    return currentLanguage === 'fr' ? path : `/${currentLanguage}${path}`;
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">BHV Auto</span>
            </div>
            <p className="text-gray-300 text-sm">
              {t('footer.tagline')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                01 86 65 48 40
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                contact@bhv-auto.fr
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                Paris, France
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.sections.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath('/personal-loans')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.services.personalLoans')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/mortgage-loans')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.services.mortgageLoans')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/credit-buyback')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.services.creditBuyback')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/work-credit')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.services.workCredit')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/insurance')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.services.insurance')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.sections.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath('/about')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.company.about')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/team')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.company.team')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/careers')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.company.careers')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/partners')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.company.partners')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/news')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.company.news')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.sections.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath('/legal')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.legal.terms')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/privacy')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.legal.privacy')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/conditions')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.legal.conditions')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/sitemap')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.legal.sitemap')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/cookies')} className="text-gray-300 hover:text-primary transition-colors text-sm">
                  {t('footer.legal.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">{t('footer.trust.gdpr')}</h4>
              <p className="text-xs text-gray-400">{t('footer.trust.gdprDesc')}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">{t('footer.trust.ssl')}</h4>
              <p className="text-xs text-gray-400">{t('footer.trust.sslDesc')}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">{t('footer.trust.rcs')}</h4>
              <p className="text-xs text-gray-400">{t('footer.trust.rcsDesc')}</p>
            </div>
          </div>
        </div>

        {/* Warning & Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-sm mb-2 text-yellow-400">{t('footer.warning.title')}</h4>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• {t('footer.warning.rates')}</li>
              <li>• {t('footer.warning.credit')}</li>
              <li>• {t('footer.warning.insurance')}</li>
            </ul>
          </div>
          
          <div className="text-center text-xs text-gray-400">
            <p>&copy; 2024 BHV Auto. {t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
