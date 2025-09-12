import React from 'react';
import { motion } from 'framer-motion';
import { Dna, TestTube, Activity, Users, ChevronRight, Shield, Award, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../components/CalendlySection';

const Services = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Peptides",
      subtitle: "Research-Use Products for Licensed Practitioners",
      description: "High-quality peptides for research purposes, available exclusively to licensed healthcare practitioners with full compliance support.",
      features: [
        "Research-grade peptide synthesis",
        "Purity testing and certificates",
        "Stability and storage guidance",
        "Dosing protocol recommendations",
        "Comprehensive compliance documentation"
      ],
      applications: [
        "Clinical research studies",
        "Therapeutic protocol development",
        "Patient outcome optimization",
        "Professional education programs"
      ],
      disclaimer: true,
      link: "/services/peptides"
    },
    {
      icon: <Dna className="h-12 w-12" />,
      title: "Genetic Testing",
      subtitle: "Personalized SNP & Peptide-Response Panels",
      description: "Comprehensive genetic analysis to understand individual responses to peptides, nutrients, and therapeutic interventions.",
      features: [
        "SNP analysis for medication metabolism",
        "Peptide response profiling",
        "Nutrigenomics testing",
        "Pharmacogenomics panels",
        "Personalized treatment recommendations"
      ],
      applications: [
        "Precision medicine protocols",
        "Personalized nutrition planning",
        "Optimal peptide selection",
        "Drug interaction screening"
      ],
      link: "/services/genetic-testing"
    },
    {
      icon: <TestTube className="h-12 w-12" />,
      title: "Micronutrient Testing",
      subtitle: "Advanced LC-MS/MS & ICP-MS Analysis",
      description: "State-of-the-art testing for comprehensive wellness insights using the most advanced analytical methods available.",
      features: [
        "LC-MS/MS vitamin analysis",
        "ICP-MS trace element testing",
        "Metabolomics profiling",
        "Antioxidant status assessment",
        "Mineral balance evaluation"
      ],
      applications: [
        "Nutritional deficiency identification",
        "Wellness optimization protocols",
        "Athletic performance enhancement",
        "Chronic disease management"
      ],
      link: "/services/micronutrient-testing"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Clinical Lab Services",
      subtitle: "Molecular Diagnostics & Specialty Testing",
      description: "Comprehensive laboratory services including molecular diagnostics, toxicology, and specialty testing for healthcare providers and pharmacies.",
      features: [
        "PCR and molecular diagnostics",
        "Toxicology screening panels",
        "Infectious disease testing",
        "Specialty biomarker analysis",
        "Custom panel development"
      ],
      applications: [
        "Clinical diagnosis support",
        "Patient monitoring protocols",
        "Treatment efficacy tracking",
        "Preventive health screening"
      ],
      link: "/services/clinical-lab-services"
    }
  ];

  return (
    <>
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-dark text-off-white py-24">
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
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed">
              Comprehensive diagnostic solutions that bridge cutting-edge science 
              with practical healthcare applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-primary text-white p-4 rounded-2xl w-fit mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <h3 className="text-xl text-magenta-500 font-poppins font-semibold mb-6">
                    {service.subtitle}
                  </h3>
                  <p className="text-lg text-gray-600 font-inter mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.disclaimer && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-amber-800">
                          <strong>Compliance Notice:</strong> Peptide products are for research use only and are available exclusively to licensed healthcare practitioners. Not intended for human consumption or therapeutic use.
                        </div>
                      </div>
                    </div>
                  )}

                  <Link
                   to={service.link}
                    className="inline-flex items-center bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold transition-all transform hover:scale-105"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-3xl">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-poppins font-bold text-gray-900 mb-4 flex items-center">
                          <Microscope className="h-5 w-5 mr-2 text-magenta-500" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="bg-magenta-100 text-magenta-600 rounded-full p-1 mt-1">
                                <ChevronRight className="h-3 w-3" />
                              </div>
                              <span className="text-gray-700 font-inter">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-poppins font-bold text-gray-900 mb-4 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-orange-500" />
                          Applications
                        </h4>
                        <ul className="space-y-3">
                          {service.applications.map((application, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="bg-orange-100 text-orange-600 rounded-full p-1 mt-1">
                                <ChevronRight className="h-3 w-3" />
                              </div>
                              <span className="text-gray-700 font-inter">{application}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
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
              Quality Standards & Certifications
            </h2>
            <p className="text-xl text-white/80 font-inter mb-12 max-w-3xl mx-auto">
              All our services meet the highest industry standards with comprehensive 
              quality assurance and regulatory compliance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                <div className="text-3xl font-poppins font-bold mb-2">99.9%</div>
                <div className="text-white/80 font-inter">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                <div className="text-3xl font-poppins font-bold mb-2">CLIA</div>
                <div className="text-white/80 font-inter">Certified Labs</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                <div className="text-3xl font-poppins font-bold mb-2">CAP</div>
                <div className="text-white/80 font-inter">Accredited</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                <div className="text-3xl font-poppins font-bold mb-2">24/7</div>
                <div className="text-white/80 font-inter">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 font-inter mb-8">
              Contact our team to learn more about how our services can enhance 
              your practice and improve patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/providers"
                className="bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105"
              >
                Provider Information
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
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

export default Services;