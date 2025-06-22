
import React from 'react';
import { useParams, useLocation, Navigate, Routes, Route } from 'react-router-dom';
import Index from "../pages/Index";
import PretPersonnel from "../pages/PretPersonnel";
import PretImmobilier from "../pages/PretImmobilier";
import RachatCredit from "../pages/RachatCredit";
import CreditTravaux from "../pages/CreditTravaux";
import Assurances from "../pages/Assurances";
import About from "../pages/About";
import Equipe from "../pages/Equipe";
import Carrieres from "../pages/Carrieres";
import Partenaires from "../pages/Partenaires";
import Actualites from "../pages/Actualites";
import InformationsLegales from "../pages/InformationsLegales";
import MentionsLegales from "../pages/MentionsLegales";
import PolitiqueConfidentialite from "../pages/PolitiqueConfidentialite";
import ConditionsGenerales from "../pages/ConditionsGenerales";
import PlanSite from "../pages/PlanSite";
import Cookies from "../pages/Cookies";
import FormulaireCredit from "../pages/FormulaireCredit";
import NotFound from "../pages/NotFound";

const LanguageRedirect = () => {
  const { lang } = useParams();
  const location = useLocation();
  
  // Langues supportées
  const supportedLanguages = ['fr', 'en', 'es', 'it', 'de', 'pt', 'nl', 'da', 'sv', 'no', 'ja', 'zh-CN', 'ru'];
  
  // Si la langue n'est pas supportée, rediriger vers la version française
  if (!lang || !supportedLanguages.includes(lang)) {
    const pathWithoutLang = location.pathname.replace(/^\/[^\/]+/, '');
    return <Navigate to={pathWithoutLang || '/'} replace />;
  }

  // Si la langue est supportée, afficher les routes
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/prets-personnels" element={<PretPersonnel />} />
      <Route path="/prets-immobiliers" element={<PretImmobilier />} />
      <Route path="/rachat-credit" element={<RachatCredit />} />
      <Route path="/credit-travaux" element={<CreditTravaux />} />
      <Route path="/assurances" element={<Assurances />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/carrieres" element={<Carrieres />} />
      <Route path="/partenaires" element={<Partenaires />} />
      <Route path="/actualites" element={<Actualites />} />
      <Route path="/informations-legales" element={<InformationsLegales />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      <Route path="/conditions-generales" element={<ConditionsGenerales />} />
      <Route path="/plan-site" element={<PlanSite />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/demande-credit" element={<FormulaireCredit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default LanguageRedirect;
