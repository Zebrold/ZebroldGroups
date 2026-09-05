import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, useScroll, useSpring, MotionConfig } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Sectors from './pages/Sectors/Sectors';
import Subsidiaries from './pages/Subsidiaries/Subsidiaries';
import Offices from './pages/Offices/Offices';
import News from './pages/News/News';
import NewsroomArticle from './pages/NewsroomArticle/NewsroomArticle';
import Contact from './pages/Contact/Contact';
import Careers from './pages/Careers/Careers';
import OpenPositions from './pages/OpenPositions/OpenPositions';
import JobDetails from './pages/JobDetails/JobDetails';
import SectorDetail from './pages/SectorDetail/SectorDetail';
import A321XLR from './pages/products/A321XLR/A321XLR';
import Boeing777X from './pages/products/Boeing777X/Boeing777X';
import A350F from './pages/products/A350F/A350F';
import AirTrafficManagement from './pages/products/AirTrafficManagement/AirTrafficManagement';
import Admin from './pages/Admin/Admin';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/* Layout wrapper — Navbar + content + Footer */
function SiteLayout({ children }) {
  return (
    <>

      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Admin has its own full-screen layout */}
          <Route path="/admin" element={<Admin />} />

          {/* All public pages share the site layout */}
          <Route path="/" element={<SiteLayout><Home /></SiteLayout>} />
          <Route path="/about" element={<SiteLayout><About /></SiteLayout>} />
          <Route path="/sectors" element={<SiteLayout><Sectors /></SiteLayout>} />
          <Route path="/sectors/:sectorSlug" element={<SiteLayout><SectorDetail /></SiteLayout>} />
          <Route path="/products/a321xlr" element={<SiteLayout><A321XLR /></SiteLayout>} />
          <Route path="/products/777x" element={<SiteLayout><Boeing777X /></SiteLayout>} />
          <Route path="/products/a350f" element={<SiteLayout><A350F /></SiteLayout>} />
          <Route path="/products/air-traffic-management" element={<SiteLayout><AirTrafficManagement /></SiteLayout>} />
          <Route path="/subsidiaries" element={<SiteLayout><Subsidiaries /></SiteLayout>} />
          <Route path="/offices" element={<SiteLayout><Offices /></SiteLayout>} />
          <Route path="/news" element={<SiteLayout><News /></SiteLayout>} />
          <Route path="/news/:id" element={<SiteLayout><NewsroomArticle /></SiteLayout>} />
          <Route path="/careers" element={<SiteLayout><Careers /></SiteLayout>} />
          <Route path="/careers/open-positions" element={<SiteLayout><OpenPositions /></SiteLayout>} />
          <Route path="/careers/:jobId" element={<SiteLayout><JobDetails /></SiteLayout>} />
          <Route path="/contact" element={<SiteLayout><Contact /></SiteLayout>} />
          <Route path="/legal-notice" element={<SiteLayout><LegalNotice /></SiteLayout>} />
          <Route path="/privacy-policy" element={<SiteLayout><PrivacyPolicy /></SiteLayout>} />
        </Routes>
      </BrowserRouter>
      </MotionConfig>
    </LanguageProvider>
  );
}
