
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from "@/components/ui/toaster";
import Home from './pages/Home';
import PretPersonnel from './pages/PretPersonnel';
import PretImmobilier from './pages/PretImmobilier';
import RachatCredit from './pages/RachatCredit';
import CreditTravaux from './pages/CreditTravaux';
import Assurances from './pages/Assurances';
import APropos from './pages/APropos';
import Partenaires from './pages/Partenaires';
import FormulaireCredit from './pages/FormulaireCredit';
import MentionsLegales from './pages/MentionsLegales';
import ConditionsGenerales from './pages/ConditionsGenerales';
import Cookies from './pages/Cookies';
import PlanDuSite from './pages/PlanDuSite';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Routes principales */}
          <Route path="/" element={<Home />} />
          <Route path="/pret-personnel" element={<PretPersonnel />} />
          <Route path="/pret-immobilier" element={<PretImmobilier />} />
          <Route path="/rachat-credit" element={<RachatCredit />} />
          <Route path="/credit-travaux" element={<CreditTravaux />} />
          <Route path="/nos-assurances" element={<Assurances />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/demande-credit" element={<FormulaireCredit />} />
          
          {/* Pages légales */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/conditions-generales" element={<ConditionsGenerales />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/plan-du-site" element={<PlanDuSite />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />

          {/* Routes avec préfixe de langue */}
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/pret-personnel" element={<PretPersonnel />} />
          <Route path="/:lang/pret-immobilier" element={<PretImmobilier />} />
          <Route path="/:lang/rachat-credit" element={<RachatCredit />} />
          <Route path="/:lang/credit-travaux" element={<CreditTravaux />} />
          <Route path="/:lang/nos-assurances" element={<Assurances />} />
          <Route path="/:lang/a-propos" element={<APropos />} />
          <Route path="/:lang/partenaires" element={<Partenaires />} />
          <Route path="/:lang/demande-credit" element={<FormulaireCredit />} />
          <Route path="/:lang/mentions-legales" element={<MentionsLegales />} />
          <Route path="/:lang/conditions-generales" element={<ConditionsGenerales />} />
          <Route path="/:lang/cookies" element={<Cookies />} />
          <Route path="/:lang/plan-du-site" element={<PlanDuSite />} />
          <Route path="/:lang/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
