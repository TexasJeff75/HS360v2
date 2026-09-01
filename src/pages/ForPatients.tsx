import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Dna, TestTube, ChevronRight, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../components/CalendlySection';

const ForPatients = () => {
  const benefits = [
    {
      icon: <Dna className="h-8 w-8" />,
      title: "Personalized Insights",
      description: "Understand your unique genetic makeup and how it affects your response to nutrients, medications, and treatments."
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Comprehensive Testing",
      description: "Advanced micronutrient analysis reveals exactly what your body needs for optimal health and performance."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Optimized Health",
      description: "Work with your provider to create personalized protocols based on your individual test results."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Provider-Guided",
      description: "All testing and recommendations are overseen by licensed healthcare professionals for your safety."
    }
  ];

  const testingTypes = [
    {
      title: "Genetic Testing",
      description: "Discover how your genes influence your health, metabolism, and treatment responses",
      features: [
        "SNP analysis for personalized medicine",
        "Nutrigenomics for optimal nutrition",
        "Pharmacogenomics for medication safety",
      ]
    },
    {
      title: "Micronutrient Testing",
      description: "Comprehensive analysis of vitamins, minerals, and essential nutrients in your body",
      features: [
        "Vitamin and mineral status",
        "Antioxidant levels",
        "Metabolic markers",
        "Trace element analysis"
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Consult Your Provider",
      description: "Work with a licensed healthcare practitioner in our network to determine which tests are right for you."
    },
    {
      step: 2,
      title: "Sample Collection",
      description: "Simple blood or saliva collection at your provider's office or through our partner laboratories."
    },
    {
      step: 3,
      title: "Laboratory Analysis",
      description: "Your samples are analyzed using state-of-the-art equipment in our certified laboratories."
    },
    {
      step: 4,
      title: "Results & Recommendations",
      description: "Receive detailed results and personalized recommendations through your healthcare provider."
    }
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
              Your Health, <span className="bg-gradient-primary bg-clip-text text-transparent">Personalized</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">
              Discover your unique health blueprint through advanced genetic testing 
              and comprehensive micronutrient analysis
            </p>
            <div className="bg-white/10 backdrop-blur p-6 rounded-2xl max-w-3xl mx-auto">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-gold-300 mt-1 flex-shrink-0" />
                <p className="text-lg text-off-white font-inter text-left">
                  <strong>Important:</strong> All testing must be ordered through a licensed healthcare provider. 
                  We do not provide direct-to-consumer testing services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Personalized Testing?</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Move beyond one-size-fits-all healthcare with insights tailored specifically to your biology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 font-inter">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Types Section */}
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
              Available <span className="bg-gradient-primary bg-clip-text text-transparent">Testing</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Comprehensive analysis to understand your body's unique needs and optimize your health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testingTypes.map((test, index) => (
              <motion.div
                key={test.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-4">{test.title}</h3>
                <p className="text-lg text-gray-600 font-inter mb-8">{test.description}</p>
                <div className="space-y-4">
                  {test.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="bg-magenta-100 text-magenta-600 rounded-full p-1">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                      <span className="text-gray-700 font-inter">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Simple, professional process guided by licensed healthcare providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
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

      {/* Important Disclaimers Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200">
              <div className="flex items-start space-x-4 mb-6">
                <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-bold text-gray-900">Important Information</h3>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Provider-Ordered Testing Only</h4>
                  <p>All diagnostic testing must be ordered and interpreted by a licensed healthcare provider. We do not offer direct-to-consumer testing services.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Not for Self-Diagnosis</h4>
                  <p>Test results are for informational purposes and should always be interpreted by qualified healthcare professionals. Do not use results for self-diagnosis or treatment.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Educational Content</h4>
                  <p>Information provided on this website is for educational purposes only and does not constitute medical advice. Always consult with your healthcare provider for personalized medical guidance.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-secondary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Optimize Your Health?
            </h2>
            <p className="text-xl text-white/80 font-inter mb-8">
              Find a healthcare provider in our network to discuss personalized testing options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-magenta-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors"
              >
                Find a Provider
              </Link>
              <a
                href="https://store.hs360.co"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                Visit Our Store
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    {/* Calendly Section */}
    <CalendlySection />
    </>
  );
};

export default ForPatients;