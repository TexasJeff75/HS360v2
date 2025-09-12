import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PeptidesDetail from './pages/services/PeptidesDetail';
import GeneticTestingDetail from './pages/services/GeneticTestingDetail';
import MicronutrientTestingDetail from './pages/services/MicronutrientTestingDetail';
import ClinicalLabServicesDetail from './pages/services/ClinicalLabServicesDetail';
import ForProviders from './pages/ForProviders';
import ForPatients from './pages/ForPatients';
import Resources from './pages/Resources';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/peptides" element={<PeptidesDetail />} />
            <Route path="/services/genetic-testing" element={<GeneticTestingDetail />} />
            <Route path="/services/micronutrient-testing" element={<MicronutrientTestingDetail />} />
            <Route path="/services/clinical-lab-services" element={<ClinicalLabServicesDetail />} />
            <Route path="/providers" element={<ForProviders />} />
            <Route path="/patients" element={<ForPatients />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;