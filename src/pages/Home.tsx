import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Dna, TestTube, Activity, Users, CheckCircle, Star } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';

const Home = () => {
  const services = [
    {
      icon: <Dna className="h-12 w-12" />,
      title: "Genetic Testing",
      description: "Personalized SNP analysis to understand individual responses to peptides, nutrients, and therapeutic interventions.",
      keyFeatures: [
        "170+ genetic markers",
        "Pharmacogenomics panels",
        "Personalized recommendations",
        "Provider interpretation"
      ],
      link: "/services/genetic-testing"
    },
    {
      icon: <TestTube className="h-12 w-12" />,
      title: "Micronutrient Testing", 
      description: "State-of-the-art testing for comprehensive wellness insights using the most advanced analytical methods available.",
      keyFeatures: [
        "196 biomarkers analyzed",
        "LC-MS/MS & ICP-MS methods",
        "Comprehensive reporting",
        "7-14 day turnaround"
      ],
      link: "/services/micronutrient-testing"
    },
    {
      icon: <Activity className="h-12 w-12" />,
      title: "Peptides",
      description: "High-quality peptides for research purposes, available exclusively to licensed healthcare practitioners.",
      keyFeatures: [
        "Research-grade synthesis",
        "Purity testing & certificates",
        "Compliance documentation",
        "Storage guidance"
      ],
      link: "/services/peptides"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Clinical Lab Services",
      description: "Comprehensive laboratory services including molecular diagnostics, toxicology, and specialty testing.",
      keyFeatures: [
        "CLIA certified labs",
        "Molecular diagnostics", 
        "Toxicology screening",
        "24/7 support"
      ],
      link: "/services/clinical-lab-services"
    }
  ];

  return (
    <>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-dark text-off-white py-24 relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-magenta-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl font-poppins font-bold leading-tight mb-8">
                  Turning{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Insight
                  </span>
                  <br />
                  Into{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Impact
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-12">
                  Integrating peptide science, genetic insights, and advanced laboratory testing to help providers and patients achieve better health outcomes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    to="/providers"
                    className="bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    For Providers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  
                  <Link
                    to="/patients"
                    className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all hover:bg-white/10 flex items-center justify-center"
                  >
                    For Patients
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>

              {/* DNA Helix Logo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <motion.div
                    className="w-80 h-80 rounded-full bg-gradient-to-br from-magenta-500 via-purple-500 to-orange-500 flex items-center justify-center"
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    <div className="w-64 h-64 rounded-full bg-gradient-dark flex items-center justify-center">
                      <motion.div
                        className="text-6xl"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        🧬
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                Our{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
                Comprehensive wellness and diagnostic solutions backed by cutting-edge science
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-orange-50/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 w-fit group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 font-inter mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.keyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-magenta-600 hover:text-magenta-700 font-poppins font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CalendlySection />
    </>
  );
};

export default Home;