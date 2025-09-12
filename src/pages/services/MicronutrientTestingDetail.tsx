import React from 'react';
import { motion } from 'framer-motion';
import { TestTube, Microscope, BarChart3, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../../components/CalendlySection';

const MicronutrientTestingDetail = () => {
  const testingMethods = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "LC-MS/MS Analysis",
      description: "Advanced liquid chromatography-mass spectrometry for vitamin analysis",
      analytes: ["B-vitamins", "Vitamin D", "Folate", "Cobalamin"],
      accuracy: "99.9%"
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "ICP-MS Testing",
      description: "Inductively coupled plasma mass spectrometry for trace elements",
      analytes: ["Zinc", "Magnesium", "Selenium", "Copper"],
      accuracy: "99.8%"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Metabolomics Profiling",
      description: "Comprehensive metabolic pathway analysis",
      analytes: ["Amino acids", "Organic acids", "Fatty acids"],
      accuracy: "99.7%"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Antioxidant Assessment",
      description: "Functional testing of antioxidant capacity and status",
      analytes: ["CoQ10", "Glutathione", "Vitamin E", "Carotenoids"],
      accuracy: "99.5%"
    }
  ];

  const biomarkers = [
    { category: "Vitamins", count: "25+", examples: ["B1, B2, B6, B12", "Folate, Biotin", "Vitamin D, C, E"] },
    { category: "Minerals", count: "30+", examples: ["Zinc, Magnesium", "Selenium, Copper", "Iron, Chromium"] },
    { category: "Amino Acids", count: "40+", examples: ["Essential AAs", "Non-essential AAs", "Metabolic markers"] },
    { category: "Antioxidants", count: "20+", examples: ["CoQ10, Glutathione", "Alpha-lipoic acid", "Carotenoids"] },
    { category: "Fatty Acids", count: "35+", examples: ["Omega-3, Omega-6", "Saturated FAs", "Trans fatty acids"] },
    { category: "Metabolites", count: "46+", examples: ["Organic acids", "Energy markers", "Detox pathways"] }
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
                Micronutrient <span className="bg-gradient-primary bg-clip-text text-transparent">Testing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed">
                Advanced LC-MS/MS and ICP-MS-based testing for comprehensive wellness insights
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testing Methods */}
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
                Advanced <span className="bg-gradient-primary bg-clip-text text-transparent">Methods</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                State-of-the-art analytical techniques for precise micronutrient assessment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-3xl hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 w-fit">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-600 font-inter mb-6">{method.description}</p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <h4 className="font-poppins font-semibold text-gray-800 mb-3">Key Analytes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {method.analytes.map((analyte, idx) => (
                        <div key={idx} className="bg-magenta-50 text-magenta-700 px-3 py-1 rounded-full text-sm font-inter text-center">
                          {analyte}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-green-700 font-poppins font-semibold">Accuracy:</span>
                      <span className="text-green-800 font-poppins font-bold">{method.accuracy}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Biomarkers Overview */}
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
                196 <span className="bg-gradient-primary bg-clip-text text-transparent">Biomarkers</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Comprehensive analysis across all essential nutrient categories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biomarkers.map((marker, index) => (
                <motion.div
                  key={marker.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl font-poppins font-bold text-magenta-500 mb-2">{marker.count}</div>
                    <h3 className="text-xl font-poppins font-bold text-gray-900">{marker.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {marker.examples.map((example, idx) => (
                      <div key={idx} className="text-gray-600 font-inter text-sm text-center">
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Applications */}
        <section className="py-24 bg-gradient-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
                Clinical Applications
              </h2>
              <p className="text-xl text-white/80 font-inter mb-12 max-w-3xl mx-auto">
                Actionable insights for personalized patient care and wellness optimization
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Deficiency ID", description: "Identify specific nutrient deficiencies" },
                  { title: "Protocol Design", description: "Create targeted supplementation plans" },
                  { title: "Progress Tracking", description: "Monitor treatment effectiveness" },
                  { title: "Risk Assessment", description: "Predict health risks and complications" }
                ].map((app, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                    <h3 className="font-poppins font-bold text-lg mb-3">{app.title}</h3>
                    <p className="text-white/80 font-inter text-sm">{app.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sample Requirements */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                Sample <span className="bg-gradient-primary bg-clip-text text-transparent">Collection</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Simple collection process with comprehensive analysis
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Collection Requirements</h3>
                {[
                  "Fasting blood draw (12-hour fast)",
                  "First morning urine sample",
                  "Room temperature storage acceptable",
                  "Stable for up to 48 hours before processing",
                  "Standard phlebotomy collection tubes"
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-inter">{req}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Turnaround Times</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <span className="font-poppins font-semibold text-gray-800">Standard Panel</span>
                    <span className="text-magenta-500 font-poppins font-bold">7-10 days</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <span className="font-poppins font-semibold text-gray-800">Comprehensive Panel</span>
                    <span className="text-magenta-500 font-poppins font-bold">10-14 days</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                    <span className="font-poppins font-semibold text-gray-800">Rush Processing</span>
                    <span className="text-orange-500 font-poppins font-bold">3-5 days</span>
                  </div>
                </div>
              </motion.div>
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
                Optimize Patient Wellness
              </h2>
              <p className="text-xl text-gray-600 font-inter mb-8">
                Partner with us to offer comprehensive micronutrient testing to your patients
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
                  Get Test Menu
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <CalendlySection />
    </>
  );
};

export default MicronutrientTestingDetail;