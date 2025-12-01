import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Dna, TestTube, Activity, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Peptides",
      description: "Research-use peptides for licensed practitioners with full compliance support.",
      link: "/services/peptides"
    },
    {
      icon: <Dna className="h-8 w-8" />,
      title: "Genetic Testing",
      description: "Personalized SNP analysis and peptide-response panels for precision medicine.",
      link: "/services/genetic-testing"
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Micronutrient Testing",
      description: "Advanced LC-MS/MS and ICP-MS-based testing for comprehensive wellness insights.",
      link: "/services/micronutrient-testing"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Clinical Lab Services",
      description: "Molecular diagnostics, toxicology, and specialty testing for providers.",
      link: "/services/clinical-lab-services"
    }
  ];

  const stats = [
    { number: "170", label: "Genetic Markers" },
    { number: "196", label: "Biomarkers" },
    { number: "500+", label: "Provider Partners" },
    { number: "100%", label: "Actionable" }
  ];

  // Animation variants for enhanced movement
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return (
    <>
    <SEO
      title="HealthSpan360 - Turning Insight Into Impact"
      description="Integrating peptide science, genetic insights, and advanced laboratory testing to help providers and patients achieve better health outcomes. Professional wellness and diagnostics solutions."
      keywords="peptides, genetic testing, micronutrient testing, wellness diagnostics, longevity lab, functional medicine, precision medicine, healthspan360"
    />
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-dark text-off-white">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-500/90 to-transparent"></div>
        <motion.div 
          className="absolute inset-0 opacity-10"
          variants={floatingVariants}
          animate="animate"
        >
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-magenta-500 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-poppins font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Turning <span className="bg-gradient-primary bg-clip-text text-transparent">Insight</span>
                <br />
                Into <span className="bg-gradient-primary bg-clip-text text-transparent">Impact</span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-cool-gray font-inter mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Integrating peptide science, genetic insights, and advanced laboratory testing 
                to help providers and patients achieve better health outcomes.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                  to="/providers"
                  className="group bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  For Providers
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                  to="/patients"
                  className="group bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all flex items-center justify-center"
                >
                  For Patients
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Enhanced animated light trace border */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-magenta-500 via-orange-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ padding: '2px', animationDuration: '3s' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-full bg-charcoal-500"></div>
                </motion.div>
                
                {/* Enhanced pulse ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-magenta-500/20" 
                  style={{ animationDuration: '2s' }}
                  variants={pulseVariants}
                  animate="animate"
                />
                
                <motion.img
                  src="/Logo_web.webp"
                  alt="HealthSpan360 Logo"
                  className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 object-contain transform transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ProxiGene Feature Section */}
      <section className="py-24 bg-gradient-to-br from-magenta-50 via-white to-orange-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-primary text-white px-4 py-2 rounded-full w-fit mb-6">
                <span className="font-poppins font-semibold text-sm">Featured Panel</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-poppins font-bold text-gray-900 mb-6">
                ProxiGene
              </h2>
              <p className="text-xl text-gray-600 font-inter mb-8 leading-relaxed">
                Analyze <strong className="text-magenta-600">140+ genetic variants</strong> to reveal predispositions across metabolism, cognition, emotional resilience, inflammation, nutrient absorption, aging, and food sensitivities.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Personalized peptide selection",
                  "Supplement recommendations",
                  "Lifestyle and nutritional insights",
                  "One-time genetic assessment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-inter">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services/genetic-testing"
                  className="inline-flex items-center bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105"
                >
                  Learn More About ProxiGene
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-magenta-500 via-orange-500 to-purple-500 opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="relative bg-white p-8 rounded-3xl shadow-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="h-64 w-64 lg:h-80 lg:w-80" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="xGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e91e63"/>
                        <stop offset="50%" stopColor="#f4783a"/>
                        <stop offset="100%" stopColor="#ffd700"/>
                      </linearGradient>
                      <linearGradient id="xGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffa726"/>
                        <stop offset="50%" stopColor="#f4783a"/>
                        <stop offset="100%" stopColor="#ffd700"/>
                      </linearGradient>
                    </defs>
                    <path d="M 100 50 L 200 50 L 350 250 L 450 50 L 550 50 L 400 300 L 550 450 L 450 450 L 300 250 L 150 450 L 50 450 L 200 300 Z"
                          fill="url(#xGradient1)"
                          stroke="url(#xGradient2)"
                          strokeWidth="8"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          transform="translate(-50, -25)"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Comprehensive wellness and diagnostic solutions backed by cutting-edge science
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200"
              >
                <motion.div 
                  className="bg-gradient-primary text-white p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 font-inter mb-6">{service.description}</p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                  to={service.link}
                  className="inline-flex items-center text-magenta-500 hover:text-orange-500 font-inter font-semibold group-hover:translate-x-1 transition-all"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="text-center text-white"
              >
                <motion.div 
                  className="text-4xl lg:text-5xl font-poppins font-bold mb-2"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.8)",
                      "0 0 5px rgba(255,255,255,0.5)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80 text-sm lg:text-base font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-primary text-white p-2 rounded-lg w-fit mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 font-inter mb-8 leading-relaxed">
                We bridge cutting-edge science with practical, provider-driven solutions. 
                Our commitment to compliance, accuracy, and innovation ensures that both 
                providers and patients receive the highest quality diagnostic insights.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold transition-all"
              >
                Learn About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-dark p-8 rounded-3xl text-white"
            >
              <h3 className="text-2xl font-poppins font-bold mb-6">Why Choose HealthSpan360?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <span className="font-inter">Cutting-edge peptide science and genetic insights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <span className="font-inter">Advanced laboratory testing with proven accuracy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <span className="font-inter">Compliance-forward approach for all products</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <span className="font-inter">Dedicated support for healthcare providers</span>
                </li>
              </ul>
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
              Ready to Transform Health Outcomes?
            </h2>
            <p className="text-xl text-gray-600 font-inter mb-8">
              Join our network of forward-thinking healthcare providers and discover 
              the power of personalized diagnostics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors"
              >
                Explore Services
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

import CalendlySection from '../components/CalendlySection';

export default Home;