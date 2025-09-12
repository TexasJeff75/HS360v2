import React from 'react';
import { motion } from 'framer-motion';
import { Users, Activity, Shield, Microscope, TestTube2, Beaker, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../../components/CalendlySection';

const ClinicalLabServicesDetail = () => {
  const labServices = [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Molecular Diagnostics",
      description: "Advanced PCR and sequencing technologies for precise diagnostics",
      tests: ["PCR Testing", "qRT-PCR", "Next-Gen Sequencing", "Genotyping"],
      turnaround: "2-5 days"
    },
    {
      icon: <TestTube2 className="h-8 w-8" />,
      title: "Toxicology Screening",
      description: "Comprehensive drug testing and toxicology panels",
      tests: ["Urine Drug Screening", "Hair Testing", "Oral Fluid Testing", "Blood Alcohol"],
      turnaround: "1-3 days"
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "Infectious Disease Testing",
      description: "Rapid and accurate pathogen detection and identification",
      tests: ["Bacterial Cultures", "Viral PCR", "Parasitology", "Antimicrobial Susceptibility"],
      turnaround: "1-7 days"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Specialty Biomarkers",
      description: "Advanced biomarker analysis for specialized clinical needs",
      tests: ["Cardiac Markers", "Tumor Markers", "Endocrine Panels", "Autoimmune Markers"],
      turnaround: "3-7 days"
    }
  ];

  const certifications = [
    { name: "CLIA", description: "Clinical Laboratory Improvement Amendments", status: "Certified" },
    { name: "CAP", description: "College of American Pathologists", status: "Accredited" },
    { name: "ISO 15189", description: "Medical Laboratory Quality Standards", status: "Compliant" },
    { name: "AAAB", description: "American Association of Bioanalysts", status: "Member" }
  ];

  const clientTypes = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Healthcare Providers",
      description: "Comprehensive lab services for medical practices",
      services: ["Routine testing", "Specialty panels", "Custom protocols", "Stat processing"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Pharmacies",
      description: "Specialized testing for pharmacy operations",
      services: ["Drug monitoring", "Compliance testing", "Quality control", "Regulatory support"]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Wellness Centers",
      description: "Advanced testing for optimal health programs",
      services: ["Biomarker panels", "Nutritional testing", "Hormone analysis", "Metabolic profiling"]
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
                Clinical Lab <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed">
                Molecular diagnostics, toxicology, and specialty testing for healthcare providers and pharmacies
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lab Services */}
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
                Laboratory <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Comprehensive testing capabilities with rapid turnaround times
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {labServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-3xl hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 font-inter mb-6">{service.description}</p>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <h4 className="font-poppins font-semibold text-gray-800 mb-3">Available Tests:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.tests.map((test, idx) => (
                        <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-inter text-center">
                          {test}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-green-700 font-poppins font-semibold">Turnaround:</span>
                      <span className="text-green-800 font-poppins font-bold">{service.turnaround}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
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
                Certifications & Accreditations
              </h2>
              <p className="text-xl text-white/80 font-inter max-w-3xl mx-auto">
                Maintaining the highest standards of quality and regulatory compliance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur p-6 rounded-xl text-center"
                >
                  <div className="text-3xl font-poppins font-bold mb-2">{cert.name}</div>
                  <div className="text-white/80 font-inter text-sm mb-3">{cert.description}</div>
                  <div className="bg-gold-300 text-gray-900 px-3 py-1 rounded-full text-xs font-poppins font-semibold">
                    {cert.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Types */}
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
                We Serve <span className="bg-gradient-primary bg-clip-text text-transparent">Healthcare</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Tailored laboratory solutions for diverse healthcare organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 w-fit">
                    {client.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">{client.title}</h3>
                  <p className="text-gray-600 font-inter mb-6">{client.description}</p>
                  <div className="space-y-3">
                    {client.services.map((service, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-inter">{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Metrics */}
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
                Quality <span className="bg-gradient-primary bg-clip-text text-transparent">Metrics</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Measurable commitment to excellence in laboratory services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "99.9%", label: "Accuracy Rate", description: "Consistent precision across all tests" },
                { metric: "24/7", label: "Support", description: "Round-the-clock technical assistance" },
                { metric: "<2%", label: "Re-run Rate", description: "Minimal repeat testing required" },
                { metric: "100%", label: "CLIA Compliant", description: "Full regulatory compliance" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl"
                >
                  <div className="text-4xl font-poppins font-bold text-magenta-500 mb-2">{item.metric}</div>
                  <div className="text-lg font-poppins font-semibold text-gray-900 mb-2">{item.label}</div>
                  <div className="text-gray-600 font-inter text-sm">{item.description}</div>
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
                Partner with Our Lab
              </h2>
              <p className="text-xl text-gray-600 font-inter mb-8">
                Experience the difference of working with a fully accredited clinical laboratory
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
                  Request Test Menu
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

export default ClinicalLabServicesDetail;