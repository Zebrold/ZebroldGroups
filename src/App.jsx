import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Newsroom from './pages/Newsroom/Newsroom';
import Careers from './pages/Careers/Careers';
import ApplyDossier from './pages/ApplyDossier/ApplyDossier';
import Contact from './pages/Contact/Contact';
import RollingStock from './pages/RollingStock/RollingStock';
import Signalling from './pages/Signalling/Signalling';
import Components from './pages/Components/Components';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import DigitalRail from './pages/DigitalRail/DigitalRail';
import Services from './pages/Services/Services';
import Aerospace from './pages/Aerospace/Aerospace';
import Automotive from './pages/Automotive/Automotive';
import Insights from './pages/Insights/Insights';
import Faqs from './pages/Faqs/Faqs';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import NotFound from './pages/NotFound/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/apply" element={<ApplyDossier />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rolling-stock" element={<RollingStock />} />
            <Route path="/rollingstock" element={<RollingStock />} />
            <Route path="/signalling" element={<Signalling />} />
            <Route path="/signaling" element={<Signalling />} />
            <Route path="/components" element={<Components />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/digital-rail" element={<DigitalRail />} />
            <Route path="/digitalrail" element={<DigitalRail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aerospace" element={<Aerospace />} />
            <Route path="/automotive" element={<Automotive />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}
