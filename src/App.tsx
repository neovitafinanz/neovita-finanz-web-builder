
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/Index';
import PretPersonnel from './pages/PretPersonnel';
import PretImmobilier from './pages/PretImmobilier';
import RachatCredit from './pages/RachatCredit';
import CreditTravaux from './pages/CreditTravaux';
import Assurances from './pages/Assurances';
import About from './pages/About';
import Partenaires from './pages/Partenaires';
import Equipe from './pages/Equipe';
import Carrieres from './pages/Carrieres';
import Actualites from './pages/Actualites';
import FormulaireCredit from './pages/FormulaireCredit';
import MentionsLegales from './pages/MentionsLegales';
import ConditionsGenerales from './pages/ConditionsGenerales';


import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

function AppRoutes() {
  return (
    <Routes>
      {/* Routes principales */}
      <Route path="/" element={<Index />} />
      <Route path="/pret-personnel" element={<PretPersonnel />} />
      <Route path="/prets-personnels" element={<PretPersonnel />} />
      <Route path="/pret-immobilier" element={<PretImmobilier />} />
      <Route path="/prets-immobiliers" element={<PretImmobilier />} />
      <Route path="/rachat-credit" element={<RachatCredit />} />
      <Route path="/rachats-credits" element={<RachatCredit />} />
      <Route path="/credit-travaux" element={<CreditTravaux />} />
      <Route path="/credits-travaux" element={<CreditTravaux />} />
      <Route path="/nos-assurances" element={<Assurances />} />
      <Route path="/assurances" element={<Assurances />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/partenaires" element={<Partenaires />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/notre-equipe" element={<Equipe />} />
      <Route path="/carrieres" element={<Carrieres />} />
      <Route path="/actualites" element={<Actualites />} />
      <Route path="/news" element={<Actualites />} />
      <Route path="/demande-credit" element={<FormulaireCredit />} />
      
      {/* Pages légales */}
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/conditions-generales" element={<ConditionsGenerales />} />
      
      
      <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

      {/* Routes avec préfixe de langue */}
      <Route path="/:lang" element={<Index />} />
      <Route path="/:lang/pret-personnel" element={<PretPersonnel />} />
      <Route path="/:lang/prets-personnels" element={<PretPersonnel />} />
      <Route path="/:lang/pret-immobilier" element={<PretImmobilier />} />
      <Route path="/:lang/prets-immobiliers" element={<PretImmobilier />} />
      <Route path="/:lang/rachat-credit" element={<RachatCredit />} />
      <Route path="/:lang/rachats-credits" element={<RachatCredit />} />
      <Route path="/:lang/credit-travaux" element={<CreditTravaux />} />
      <Route path="/:lang/credits-travaux" element={<CreditTravaux />} />
      <Route path="/:lang/nos-assurances" element={<Assurances />} />
      <Route path="/:lang/assurances" element={<Assurances />} />
      <Route path="/:lang/a-propos" element={<About />} />
      <Route path="/:lang/partenaires" element={<Partenaires />} />
      <Route path="/:lang/equipe" element={<Equipe />} />
      <Route path="/:lang/notre-equipe" element={<Equipe />} />
      <Route path="/:lang/carrieres" element={<Carrieres />} />
      <Route path="/:lang/actualites" element={<Actualites />} />
      <Route path="/:lang/news" element={<Actualites />} />
      <Route path="/:lang/demande-credit" element={<FormulaireCredit />} />
      <Route path="/:lang/mentions-legales" element={<MentionsLegales />} />
      <Route path="/:lang/conditions-generales" element={<ConditionsGenerales />} />
      
      
      <Route path="/:lang/politique-confidentialite" element={<PolitiqueConfidentialite />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LanguageProvider>
        <AppRoutes />
        <Toaster />
      </LanguageProvider>
    </Router>
  );
}

export default App;
