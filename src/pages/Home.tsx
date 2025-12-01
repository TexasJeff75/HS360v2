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
                  <svg className="h-64 w-64 lg:h-80 lg:w-80" viewBox="0 0 376.54 346.23" fill="none" xmlns="http://www.w3.org/2000/svg">
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