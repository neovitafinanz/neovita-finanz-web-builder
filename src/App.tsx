
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
