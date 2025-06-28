
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Index from "./pages/Index";
import PretPersonnel from "./pages/PretPersonnel";
import PretImmobilier from "./pages/PretImmobilier";
import RachatCredit from "./pages/RachatCredit";
import CreditTravaux from "./pages/CreditTravaux";
import Assurances from "./pages/Assurances";
import About from "./pages/About";
import Equipe from "./pages/Equipe";
import Carrieres from "./pages/Carrieres";
import Partenaires from "./pages/Partenaires";
import Actualites from "./pages/Actualites";
import InformationsLegales from "./pages/InformationsLegales";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ConditionsGenerales from "./pages/ConditionsGenerales";
import PlanSite from "./pages/PlanSite";
import Cookies from "./pages/Cookies";
import FormulaireCredit from "./pages/FormulaireCredit";
import NotFound from "./pages/NotFound";
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const supportedLanguages = ['fr', 'en', 'es', 'it', 'de', 'pt', 'nl', 'da', 'sv', 'no', 'ja', 'zh-CN', 'ru'];
  
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          {/* Redirect root to French */}
          <Route path="/" element={<Navigate to="/fr" replace />} />
          
          {/* Language-specific routes */}
          {supportedLanguages.map(lang => (
            <React.Fragment key={lang}>
              <Route path={`/${lang}`} element={<Index />} />
              <Route path={`/${lang}/prets-personnels`} element={<PretPersonnel />} />
              <Route path={`/${lang}/prets-immobiliers`} element={<PretImmobilier />} />
              <Route path={`/${lang}/rachat-credit`} element={<RachatCredit />} />
              <Route path={`/${lang}/credit-travaux`} element={<CreditTravaux />} />
              <Route path={`/${lang}/assurances`} element={<Assurances />} />
              <Route path={`/${lang}/a-propos`} element={<About />} />
              <Route path={`/${lang}/equipe`} element={<Equipe />} />
              <Route path={`/${lang}/carrieres`} element={<Carrieres />} />
              <Route path={`/${lang}/partenaires`} element={<Partenaires />} />
              <Route path={`/${lang}/actualites`} element={<Actualites />} />
              <Route path={`/${lang}/informations-legales`} element={<InformationsLegales />} />
              <Route path={`/${lang}/mentions-legales`} element={<MentionsLegales />} />
              <Route path={`/${lang}/politique-confidentialite`} element={<PolitiqueConfidentialite />} />
              <Route path={`/${lang}/conditions-generales`} element={<ConditionsGenerales />} />
              <Route path={`/${lang}/plan-site`} element={<PlanSite />} />
              <Route path={`/${lang}/cookies`} element={<Cookies />} />
              <Route path={`/${lang}/demande-credit`} element={<FormulaireCredit />} />
            </React.Fragment>
          ))}
          
          {/* Catch all - redirect to 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
