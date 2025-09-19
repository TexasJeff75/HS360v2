import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dna, Brain, Heart, Activity, Shield, CheckCircle, ArrowRight, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../../components/CalendlySection';

const GeneticTestingDetail = () => {
  const [isProxiGeneModalOpen, setIsProxiGeneModalOpen] = useState(false);

  const testingPanels = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Pharmacogenomics Panel",
      description: "Analyze how genetic variations affect medication metabolism and response",
      markers: "45+ genetic variants",
      applications: ["Medication selection", "Dosing optimization", "Adverse reaction prediction"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Nutrigenomics Panel",
      description: "Understand genetic factors influencing nutrition and metabolism",
      markers: "60+ genetic variants",
      applications: ["Personalized nutrition", "Supplement recommendations", "Weight management"]
    },
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 376.54 346.23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="262.4" y1="291.05" x2="323.24" y2="288.8" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#e04598"/>
              <stop offset="1" stopColor="#f4783a"/>
            </linearGradient>
            <linearGradient id="grad2" x1="42.16" y1="16.69" x2="195.28" y2="161.7" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#ee3487"/>
              <stop offset=".46" stopColor="#ee397b"/>
              <stop offset="1" stopColor="#fdcd08"/>
            </linearGradient>
          </defs>
          <path fill="url(#grad1)" d="M283.54,326.93c-18.79,0-21.16-1.14-28.98-9.05-9.53-9.64-28.67-38.18-34.34-47.4-3.04-4.94-3.41-12.35-1.13-22.64.22-1.01,1.19-3.51,2.13-5.92.56-1.44,1.18-3.03,1.82-4.77-7.16-.19-14.99-.67-18.91-.94-1.23,3.19-2.14,5.58-2.62,7.76-3.33,15.08-2.22,26.84,3.38,35.95,4.77,7.77,25.3,38.93,36.88,50.63,12.37,12.5,20.44,14.39,41.78,14.39h63.14l-14.26-18h-48.89Z"/>
          <path fill="url(#grad2)" d="M357.49,330.58c-.56-.76-56.34-76.33-70.21-95.87-15.19-21.39-37.52-23.68-56.91-24.01l-18.2-.51c-5.35-.42-10.79-1.18-16.19-2.53l18.09-22.71c.26,6.35-.04,12.23-.7,17.64h18.11c.74-7.01.96-14.68.31-22.98-.35-4.52-1.08-9.24-2.35-13.95l.68-.86-1.2-.95c-5.31-17.64-18.65-34.77-49.15-40.28l-1.25-.99-.55.69c-2.29-.37-4.65-.69-7.13-.93-3.32-.32-6.61-.5-9.87-.6l-19.4-.27c-15.54-.39-29.34-2.36-42.08-14.67-16.69-16.13-49.95-64.64-66.11-88.75h52.42c15.23,0,24.21,3.54,31,12.21,9.26,11.83,20,26.21,28.03,37.53,5.07,7.13,5.88,26.68.53,43.97h18.67c4.79-19.17,4.56-41.61-4.52-54.4-8.18-11.52-19.12-26.16-28.53-38.19C120.63,5.95,106.69.06,85.79.06H0l9.07,13.91c2.19,3.37,54.01,82.69,77.91,105.78,15.4,14.88,32.28,18.52,48.33,19.47l18.58.39c3.59.04,7.22.11,10.8.32l-13.81,17.34c.06-3.48.47-7.08,1.24-10.81h-18.31c-3.4,20.8,1.87,39.19,15.7,54.07,17.64,18.97,38.73,25.31,57.77,27.29,0,0,10.76.66,18.7.84,21.32.2,36.21,1.82,46.62,16.48,10.21,14.38,42.81,58.68,59.83,81.79l14.26,18h21.39l-10.59-14.34Z"/>
          <path fill="#f99e1c" d="M376.54,0h-92.78c-14.09,0-26.26,0-36.69,14.7l-73.28,98.46c3.97.39,11.32,1.5,19.02,4.59l68.76-92.39.13-.18c4.66-6.6,7.85-7.18,22.06-7.18h56.63c-19.16,25.38-60.89,80.64-103.44,136.94,1.66,4.42,4.79,13.37,6.25,21.58,58.3-77.14,117.66-155.77,122.44-162.1l10.89-14.42Z"/>
          <path fill="#c255a0" d="M113.3,318.25c-5.1,6.37-8.84,9.97-26.61,9.97h-50.53l98.79-132.73c-3.45-5.06-7.29-12.71-9.52-17.35L.33,346.23h86.37c20.39,0,30.65-4.22,40.66-16.73,2.66-3.32,32.67-42.95,70.58-93.07-8.67-.62-14.96-3.27-18.57-5.29-35.79,47.33-63.6,84.04-66.06,87.11Z"/>
        </svg>
      ),
      title: "ProxiGene",
      description: "Genetic factors affecting peptide efficacy and safety",
      markers: "140+ genetic variants",
      applications: ["Peptide selection", "Response prediction", "Optimization protocols"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Wellness Genetics Panel",
      description: "Comprehensive genetic analysis for overall health optimization",
      markers: "170+ genetic variants",
      applications: ["Lifestyle recommendations", "Risk assessment", "Preventive strategies"]
    }
  ];

  const benefits = [
    "Personalized medication selection and dosing",
    "Reduced adverse drug reactions",
    "Optimized nutrition and supplement protocols",
    "Enhanced peptide therapy outcomes",
    "Evidence-based lifestyle recommendations",
    "Preventive health strategies"
  ];

  return (
    <>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-dark text-off-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-magenta-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-6">
                Genetic <span className="bg-gradient-primary bg-clip-text text-transparent">Testing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed">
                Personalized SNP analysis and peptide-response panels for precision medicine
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testing Panels */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                Testing <span className="bg-gradient-primary bg-clip-text text-transparent">Panels</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Comprehensive genetic analysis panels designed for clinical application
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingPanels.map((panel, index) => (
                <motion.div
                  key={panel.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-3xl hover:shadow-lg transition-shadow"
                >
                  <div className="bg-transparent border-2 border-magenta-500 p-4 rounded-xl mb-6 w-fit">
                    {panel.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">{panel.title}</h3>
                  <p className="text-gray-600 font-inter mb-4">{panel.description}</p>
                  <div className="bg-magenta-50 border border-magenta-200 rounded-lg p-4 mb-6">
                    <p className="text-magenta-700 font-poppins font-semibold text-sm">{panel.markers}</p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-800 mb-3">Clinical Applications:</h4>
                    <ul className="space-y-2">
                      {panel.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-600 font-inter text-sm">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {panel.title === 'ProxiGene' && (
                    <div className="mt-6">
                      <button
                        onClick={() => setIsProxiGeneModalOpen(true)}
                        className="inline-flex items-center bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg font-poppins font-semibold text-sm transition-all"
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
                Clinical Benefits
              </h2>
              <p className="text-xl text-white/80 font-inter max-w-3xl mx-auto">
                Genetic insights that transform patient care and treatment outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur p-6 rounded-xl"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-gold-300 flex-shrink-0 mt-1" />
                    <span className="text-white font-inter">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Simple process for comprehensive genetic analysis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Sample Collection", description: "Simple saliva or buccal swab collection" },
                { step: 2, title: "DNA Extraction", description: "Advanced laboratory extraction and purification" },
                { step: 3, title: "Genetic Analysis", description: "SNP genotyping using state-of-the-art technology" },
                { step: 4, title: "Clinical Report", description: "Comprehensive results with actionable recommendations" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-poppins font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 font-inter">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                Ready to Unlock Genetic Insights?
              </h2>
              <p className="text-xl text-gray-600 font-inter mb-8">
                Partner with us to offer personalized genetic testing to your patients
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/providers"
                  className="inline-flex items-center bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ProxiGene Modal */}
      {isProxiGeneModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-3xl font-poppins font-bold text-gray-900">ProxiGene</h2>
              <button
                onClick={() => setIsProxiGeneModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Overview */}
              <div className="bg-gradient-to-br from-magenta-50 to-orange-50/20 p-6 rounded-xl">
                <p className="text-gray-700 font-inter leading-relaxed">
                  The ProxiGene panel is a one-time genetic assessment analyzing <strong>140+ SNPs</strong> to reveal predispositions across metabolism, cognition, emotional resilience, inflammation, nutrient absorption, aging, and food sensitivities. It provides personalized, actionable guidance on nutrition, lifestyle, labs, and supplementation for long-term health optimization.
                </p>
              </div>

              {/* Key Categories */}
              <div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Key Categories Assessed</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Cognitive Degeneration */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-poppins font-bold text-magenta-600 mb-3">Cognitive Degeneration</h4>
                    <p className="text-gray-600 font-inter text-sm">Cognitive Decline: memory, neuroinflammation, age-related deterioration</p>
                  </div>

                  {/* Longevity */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-poppins font-bold text-orange-600 mb-3">Longevity</h4>
                    <div className="space-y-2 text-gray-600 font-inter text-sm">
                      <p>• Inflammatory Response Regulation</p>
                      <p>• Telomerase Gene Susceptibility (cellular aging)</p>
                      <p>• Cellular Longevity (repair, mitochondrial health, lifespan regulation)</p>
                    </div>
                  </div>

                  {/* Psychological Resilience */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-poppins font-bold text-purple-600 mb-3">Psychological Resilience</h4>
                    <div className="space-y-2 text-gray-600 font-inter text-sm">
                      <p>• Brain Fog (neurotransmitter regulation, fatigue)</p>
                      <p>• Optimism (dopamine, serotonin pathways)</p>
                      <p>• Generalized Anxiety Disorder (stress response, regulation)</p>
                      <p>• Stress Sensitivity Profile (cortisol, environmental reactivity)</p>
                    </div>
                  </div>

                  {/* Micronutrient Metabolism */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-poppins font-bold text-green-600 mb-3">Micronutrient Metabolism</h4>
                    <div className="space-y-2 text-gray-600 font-inter text-sm">
                      <p>• Vitamin B9 (Folate) Deficiency Susceptibility</p>
                      <p>• Vitamin B12 Deficiency Susceptibility</p>
                    </div>
                  </div>

                  {/* Metabolism & Energy */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-poppins font-bold text-blue-600 mb-3">Metabolism & Energy</h4>
                    <div className="space-y-2 text-gray-600 font-inter text-sm">
                      <p>• LDL & HDL Cholesterol Regulation</p>
                      <p>• Triglyceride Metabolism</p>
                      <p>• Blood Glucose Regulation</p>
                    </div>
                  </div>

                  {/* Food Sensitivity Response */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-poppins font-bold text-red-600 mb-3">Food Sensitivity Response</h4>
                    <div className="space-y-2 text-gray-600 font-inter text-sm">
                      <p>• Lactose Intolerance</p>
                      <p>• Gluten Sensitivity</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Report Components */}
              <div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Report Components</h3>
                <div className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-6 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Gene & SNP Information (with rsIDs and allele impact)",
                      "Risk & Propensity Scores (High, Medium, Low)",
                      "Nutritional & Lifestyle Insights (science-based recommendations)",
                      "Peptides & Supplements (physician-guided suggestions)",
                      "Labs to Consider (follow-up testing for validation)"
                    ].map((component, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-inter text-sm">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex justify-end pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsProxiGeneModalOpen(false)}
                  className="bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-poppins font-semibold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <CalendlySection />
    </>
  );
};

export default GeneticTestingDetail;