import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Brain, Heart, Activity, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../../components/CalendlySection';

const GeneticTestingDetail = () => {
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
      icon: <Activity className="h-8 w-8" />,
      title: "Peptide Response Panel",
      description: "Genetic factors affecting peptide efficacy and safety",
      markers: "35+ genetic variants",
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
                  <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 w-fit">
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
      <CalendlySection />
    </>
  );
};

export default GeneticTestingDetail;