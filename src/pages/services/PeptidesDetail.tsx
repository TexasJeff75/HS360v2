import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Award, Users, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../../components/CalendlySection';

const PeptidesDetail = () => {
  const peptideCategories = [
    {
      title: "Weight Loss & Metabolism",
      peptides: [
        { name: "2X Blend (CJC NO DAC 5mg/Ipamorelin 5mg)", amount: "10mg" },
        { name: "2X Blend (Tesamorelin 5mg/Ipamorelin 5mg)", amount: "10mg" },
        { name: "2X Blend (Tesamorelin 10mg/Ipamorelin 5mg)", amount: "15mg" },
        { name: "3X Blend (Tesamorelin 5mg/Ipamorelin 2.5mg/MGF 500mcg)", amount: "8mg" },
        { name: "4X Blend (Tesamorelin 5mg/Ipamorelin 2.5mg/GHRP-2 5mg/MGF 500mcg)", amount: "13mg" },
        { name: "AOD-9604", amount: "6mg" },
        { name: "Cagrilintide", amount: "5mg / 10mg" },
        { name: "GLP-1 (R, S, T variants, tablets)", amount: "5mg – 300mg" },
        { name: "Survodutide", amount: "6mg" },
        { name: "Tesamorelin", amount: "8mg / 10mg" },
        { name: "Tesofensine", amount: "15mg / 50mg" },
        { name: "Tesofensine/Dihexa combo", amount: "315mg" },
        { name: "Weight Loss Blend", amount: "2283.75mg" },
        { name: "Brain Blend (Dihexa, Tesofensine, BPC-157)", amount: "622.5mg" },
        { name: "5-Amino-1MQ", amount: "3600mg" },
        { name: "Wolverine Blend", amount: "20mg" }
      ]
    },
    {
      title: "Cognitive & Neuroprotection",
      peptides: [
        { name: "BDNF", amount: "10mg" },
        { name: "Curcumin", amount: "600mg" },
        { name: "DSIP", amount: "5mg" },
        { name: "KLOW", amount: "80mg" },
        { name: "MOTS-c", amount: "10mg" },
        { name: "NAD+ (Biofermented/Synthetic)", amount: "1000mg" },
        { name: "PE-22-28", amount: "10mg" },
        { name: "Semax", amount: "5mg / 30mg" },
        { name: "Selank", amount: "5mg / 10mg" },
        { name: "SS-31", amount: "10mg / 15mg" },
        { name: "SLU-PP-332", amount: "15mg / 60mg" },
        { name: "Glow 42", amount: "42mg" },
        { name: "Glow 65", amount: "65mg" }
      ]
    },
    {
      title: "Muscle Growth, Repair & Recovery",
      peptides: [
        { name: "BPC-157", amount: "15mg" },
        { name: "IGF-1 LR3", amount: "1mg" },
        { name: "Follistatin 344", amount: "1mg" },
        { name: "Hexarelin", amount: "5mg" },
        { name: "Ipamorelin", amount: "10mg" },
        { name: "MGF", amount: "5mg" },
        { name: "MK-677", amount: "1500mg" },
        { name: "TB-500", amount: "5mg / 10mg" },
        { name: "Sermorelin", amount: "5mg / 10mg" },
        { name: "Thymagen", amount: "10mg" },
        { name: "Thymalin", amount: "20mg" },
        { name: "VIP 2mg / BPC-157 500mcg", amount: "75mg" }
      ]
    },
    {
      title: "Cardio & Organ Support",
      peptides: [
        { name: "Cardiogen", amount: "25mg" },
        { name: "Cartalax", amount: "25mg" },
        { name: "ARA-290", amount: "16mg" }
      ]
    },
    {
      title: "Immune & Anti-Inflammatory",
      peptides: [
        { name: "KPV", amount: "5mg" },
        { name: "LL-37", amount: "5mg" },
        { name: "LL-37 Complex", amount: "5mg" },
        { name: "TA-1", amount: "10mg" },
        { name: "TA-1 Complex", amount: "16.4mg" }
      ]
    },
    {
      title: "Sexual Function & Tanning",
      peptides: [
        { name: "PT-141", amount: "5mg / 10mg" },
        { name: "Oxytocin", amount: "5mg / 10mg" },
        { name: "Melanotan II", amount: "10mg" }
      ]
    }
  ];

  const overviewCategories = [
    {
      title: "Growth Hormone Peptides",
      description: "Research peptides that may influence growth hormone pathways",
      examples: ["GHRP-2", "GHRP-6", "Ipamorelin", "CJC-1295"]
    },
    {
      title: "Anti-Aging Peptides",
      description: "Compounds studied for potential longevity and cellular health benefits",
      examples: ["Epitalon", "GHK-Cu", "TB-500", "BPC-157"]
    },
    {
      title: "Metabolic Peptides",
      description: "Research compounds targeting metabolic pathways and weight management",
      examples: ["AOD-9604", "Fragment 176-191", "Tesamorelin"]
    },
    {
      title: "Cognitive Peptides",
      description: "Nootropic peptides studied for cognitive enhancement potential",
      examples: ["Noopept", "Selank", "Semax", "Dihexa"]
    }
  ];

  const compliancePoints = [
    "All peptides are for research use only",
    "Available exclusively to licensed healthcare practitioners",
    "Not intended for human consumption",
    "Comprehensive purity testing and certificates of analysis",
    "Proper storage and handling documentation provided",
    "Full regulatory compliance documentation"
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
                Research <span className="bg-gradient-primary bg-clip-text text-transparent">Peptides</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">
                High-quality peptides for research purposes, available exclusively to licensed healthcare practitioners and pharmacists
              </p>
              <div className="bg-red-600/90 border-2 border-red-400 backdrop-blur p-8 rounded-2xl max-w-4xl mx-auto shadow-2xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Shield className="h-8 w-8 text-red-600 flex-shrink-0" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-poppins font-bold text-white mb-3">
                      COMPLIANCE NOTICE
                    </p>
                    <p className="text-lg text-red-100 font-inter leading-relaxed">
                      <strong className="text-white">RESEARCH USE ONLY:</strong> All peptide products are for research purposes only and are not intended for human consumption. 
                      Available exclusively to licensed healthcare practitioners and pharmacists.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Complete Peptide Catalog */}
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
                Complete Peptide <span className="bg-gradient-primary bg-clip-text text-transparent">Catalog</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-3xl"
            >
              <div className="space-y-12">
                {peptideCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6 pb-2 border-b-2 border-magenta-200">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.peptides.map((peptide, index) => (
                        <motion.div
                          key={`${peptide.name}-${index}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.02 }}
                          viewport={{ once: true }}
                          className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1 pr-3">
                              <h4 className="font-poppins font-semibold text-gray-900 text-sm leading-tight mb-1">
                                {peptide.name}
                              </h4>
                            </div>
                            <div className="bg-magenta-100 text-magenta-700 px-2 py-1 rounded-full text-xs font-poppins font-bold flex-shrink-0">
                              {peptide.amount}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Categories Section */}

        {/* Compliance & Quality */}
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
                Quality & <span className="bg-gradient-primary bg-clip-text text-transparent">Compliance</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Rigorous standards ensure the highest quality and regulatory compliance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-6">Compliance Standards</h3>
                <ul className="space-y-4">
                  {compliancePoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-inter">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-red-50 border border-red-200 p-8 rounded-2xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-poppins font-bold text-red-900 mb-3">Important Disclaimers</h4>
                    <div className="space-y-3 text-red-800 font-inter">
                      <p>• Peptides are for research use only</p>
                      <p>• Not intended for human or animal consumption</p>
                      <p>• Available only to licensed healthcare practitioners</p>
                      <p>• Proper storage and handling required</p>
                      <p>• Not evaluated by the FDA</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practitioner Requirements */}
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
                Practitioner Requirements
              </h2>
              <p className="text-xl text-white/80 font-inter mb-12 max-w-3xl mx-auto">
                To ensure responsible research use, peptides are available only to qualified professionals
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                  <Users className="h-12 w-12 text-gold-300 mx-auto mb-6" />
                  <h3 className="text-xl font-poppins font-bold mb-4">Licensed Practitioners</h3>
                  <p className="text-white/80 font-inter">MD, DO, NP, PharmD, Chiropractors, and certified wellness providers</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                  <Shield className="h-12 w-12 text-gold-300 mx-auto mb-6" />
                  <h3 className="text-xl font-poppins font-bold mb-4">Verification Required</h3>
                  <p className="text-white/80 font-inter">License verification and credential authentication for all accounts</p>
                </div>
                <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
                  <Award className="h-12 w-12 text-gold-300 mx-auto mb-6" />
                  <h3 className="text-xl font-poppins font-bold mb-4">Research Purpose</h3>
                  <p className="text-white/80 font-inter">Commitment to research use only and proper handling protocols</p>
                </div>
              </div>
            </motion.div>
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
                Ready to Access Research Peptides?
              </h2>
              <p className="text-xl text-gray-600 font-inter mb-8">
                Join our network of licensed practitioners committed to advancing peptide research
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/providers"
                  className="inline-flex items-center bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105"
                >
                  Apply as Provider
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors"
                >
                  Contact Us
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

export default PeptidesDetail;