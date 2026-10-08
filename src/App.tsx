import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSkeleton from './components/LoadingSkeleton';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const GeneticTestingDetail = lazy(() => import('./pages/services/GeneticTestingDetail'));
const MicronutrientTestingDetail = lazy(() => import('./pages/services/MicronutrientTestingDetail'));
const ClinicalLabServicesDetail = lazy(() => import('./pages/services/ClinicalLabServicesDetail'));
const AllergyTestingDetail = lazy(() => import('./pages/services/AllergyTestingDetail'));
const ForProviders = lazy(() => import('./pages/ForProviders'));
const ForPatients = lazy(() => import('./pages/ForPatients'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/genetic-testing" element={<GeneticTestingDetail />} />
              <Route path="/services/micronutrient-testing" element={<MicronutrientTestingDetail />} />
              <Route path="/services/clinical-lab-services" element={<ClinicalLabServicesDetail />} />
              <Route path="/services/allergy-testing" element={<AllergyTestingDetail />} />
              <Route path="/providers" element={<ForProviders />} />
              <Route path="/patients" element={<ForPatients />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;