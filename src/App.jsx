import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Newsroom from './pages/Newsroom/Newsroom';
import Release from './pages/Release/Release';
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

/* The content desk is for one signed-in editor, so it is kept out of the
   bundle every visitor downloads. */
const Admin = lazy(() => import('./pages/Admin/Admin'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Shell() {
  const { pathname } = useLocation();
  // /admin is its own application surface — no site navbar, no footer.
  const bare = pathname === '/admin' || pathname.startsWith('/admin/');

  const routes = (
    <Routes>
      <Route
        path="/admin"
        element={
          <Suspense fallback={null}>
            <Admin />
          </Suspense>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/newsroom" element={<Newsroom />} />
      <Route path="/newsroom/:id" element={<Release />} />
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
  );

  if (bare) return routes;

  return (
    <>
      <Navbar />
      <main id="main">{routes}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Shell />
      </BrowserRouter>
    </LanguageProvider>
  );
}
