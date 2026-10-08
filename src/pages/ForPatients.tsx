import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Dna, TestTube, Activity, Users, Clock, CheckCircle } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';
import SEO from '../components/SEO';

const ForPatients = () => {
  const benefits = [
    {
      icon: <Dna className="h-8 w-8" />,
      title: "Genetic Insights",
      description: "Understand how your genes affect medication response, nutrition needs, and health risks.",
      features: ["Pharmacogenomics", "Nutrigenomics", "Disease predisposition", "Personalized protocols"]
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Micronutrient Analysis",
      description: "Comprehensive testing to identify specific vitamin and mineral deficiencies.",
      features: ["196 biomarkers", "LC-MS/MS testing", "Personalized supplementation", "Progress tracking"]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Precision Medicine",
      description: "Move beyond one-size-fits-all approaches with treatments tailored to your biology.",
      features: ["Individualized dosing", "Reduced side effects", "Better outcomes", "Evidence-based care"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Provider Partnership",
      description: "Work with your healthcare provider to interpret results and create action plans.",
      features: ["Professional guidance", "Clinical interpretation", "Ongoing support", "Integrated care"]
    }
  ];

  const testingOptions = [
    { name: "Comprehensive Genetic Panel", markers: "170+ genetic markers", focus: "Complete health overview" },
    { name: "Pharmacogenomics Testing", markers: "45+ drug-response genes", focus: "Medication optimization" },
    { name: "Nutrigenomics Panel", markers: "60+ nutrition genes", focus: "Personalized nutrition" },
    { name: "Micronutrient Analysis", markers: "196 biomarkers", focus: "Nutritional deficiencies" }
  ];

  return (
    <>
      <SEO
        title="For Patients - HealthSpan360"
        description="Discover your unique health blueprint through advanced genetic testing and comprehensive micronutrient analysis. Personalized medicine for better health outcomes."
        keywords="genetic testing, micronutrient testing, personalized medicine, pharmacogenomics, nutrigenomics, precision health, personalized health"
      />
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
                Discover your unique health blueprint through advanced genetic testing and 
                comprehensive micronutrient analysis
              </p>
              
              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-2xl max-w-4xl mx-auto"
              >
                <div className="flex items-start space-x-4 text-off-white">
                  <Shield className="h-6 w-6 text-gold-300 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-poppins font-semibold text-lg mb-2">Important:</p>
                    <p className="font-inter">All testing must be ordered through a licensed healthcare provider. We do not provide direct-to-consumer testing services.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Personalized Testing Section */}
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
                Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Personalized Testing?</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-4xl mx-auto">
                Move beyond one-size-fits-all healthcare with insights tailored specifically to your biology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 w-fit group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 font-inter mb-6 leading-relaxed">{benefit.description}</p>
                  <div className="space-y-3">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Testing Options */}
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
                Available <span className="bg-gradient-primary bg-clip-text text-transparent">Testing Options</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Comprehensive testing panels designed to provide actionable health insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testingOptions.map((test, index) => (
                <motion.div
                  key={test.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3">{test.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-magenta-100 text-magenta-700 px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                      {test.markers}
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter">{test.focus}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-gradient-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
                How It Works
              </h2>
              <p className="text-xl text-white/80 font-inter max-w-3xl mx-auto">
                Simple steps to unlock your personalized health insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Find a Provider", description: "Locate a healthcare provider in our network" },
                { step: 2, title: "Consultation", description: "Discuss testing options with your provider" },
                { step: 3, title: "Sample Collection", description: "Simple blood draw or saliva collection" },
                { step: 4, title: "Get Results", description: "Receive personalized insights and recommendations" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white text-magenta-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-poppins font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-poppins font-bold mb-4">{item.title}</h3>
                  <p className="text-white/80 font-inter">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Important Medical Disclaimers</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-2">Provider-Ordered Testing Only</h4>
                  <p className="font-inter">All diagnostic testing must be ordered and interpreted by a licensed healthcare provider. We do not offer direct-to-consumer testing services.</p>
                </div>
                
                <div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-2">Not a Substitute for Standard Care</h4>
                  <p className="font-inter">Test results are intended for educational purposes and professional support only. They are not intended to replace physical examinations, patient interviews, or other standard diagnostic evaluations.</p>
                </div>
                
                <div>
                  <h4 className="font-poppins font-semibold text-gray-900 mb-2">Consult Your Healthcare Provider</h4>
                  <p className="font-inter">Do not use test results for self-diagnosis, self-treatment, or as a substitute for medical care from a qualified provider.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <CalendlySection />
    </>
  );
};

export default ForPatients;