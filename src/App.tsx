import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { ReferencesPage } from './pages/ReferencesPage';
import { ContactPage } from './pages/ContactPage';
import { PropertyManagersPage } from './pages/PropertyManagersPage';
import { CompletePackagePage } from './pages/CompletePackagePage';
import { TgaPlanningPage } from './pages/TgaPlanningPage';
import { FundingConsultingPage } from './pages/FundingConsultingPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';
import { BarrierefreiheitPage } from './pages/BarrierefreiheitPage';

import { ContactModalProvider } from './context/ContactModalContext';
import { ContactModal } from './components/shared/ContactModal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export const App: React.FC = () => {
  return (
    <ContactModalProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/foerdermittel-sanierungscheck" element={<CalculatorPage />} />
            <Route path="/ueber-uns" element={<AboutPage />} />
            <Route path="/referenzen" element={<ReferencesPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/fuer-hausverwaltungen" element={<PropertyManagersPage />} />
            <Route path="/komplettpaket-sanierung" element={<CompletePackagePage />} />
            <Route path="/tga-planung" element={<TgaPlanningPage />} />
            <Route path="/foerdermittelberatung" element={<FundingConsultingPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
            <Route path="/barrierefreiheit" element={<BarrierefreiheitPage />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal />
      </div>
    </ContactModalProvider>
  );
};

export default App;

