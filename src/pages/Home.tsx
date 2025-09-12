import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Dna, TestTube, Activity, Users, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Dna className="h-8 w-8" />,
      title: "Genetic Testing",
      description: "Personalized SNP analysis and peptide-response panels for precision medicine.",
      link: "/services"
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Micronutrient Testing",
      description: "Advanced LC-MS/MS and ICP-MS-based testing for comprehensive wellness insights.",
      link: "/services"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Peptides",
      description: "Research-use peptides for licensed practitioners with full compliance support.",
      link: "/services"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Clinical Lab Services",
      description: "Molecular diagnostics, toxicology, and specialty testing for providers.",
      link: "/services"
    }
  ];

  const stats = [
    { number: "170", label: "Genetic Markers" },
    { number: "196", label: "Biomarkers" },
    { number: "500+", label: "Provider Partners" },
    { number: "100%", label: "Actionable" }
  ];

  return (
    <>
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-dark text-off-white">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-500/90 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-magenta-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
                Turning <span className="bg-gradient-primary bg-clip-text text-transparent">Insight</span>
                <br />
                Into <span className="bg-gradient-primary bg-clip-text text-transparent">Impact</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter mb-8 leading-relaxed">
                Integrating peptide science, genetic insights, and advanced laboratory testing 
                to help providers and patients achieve better health outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/providers"
                  className="group bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  For Providers
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/patients"
                  className="group bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all flex items-center justify-center"
                >
                  For Patients
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Animated light trace border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-magenta-500 via-orange-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" 
                     style={{ padding: '2px', animationDuration: '3s' }}>
                  <div className="w-full h-full rounded-full bg-charcoal-500"></div>
                </div>
                
                {/* Subtle pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-magenta-500/20 animate-ping" 
                     style={{ animationDuration: '2s' }}></div>
                
                <img 
                  src="/logo.png" 
                  alt="HealthSpan360 Logo" 
                  className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200"
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 font-inter mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-magenta-500 hover:text-orange-500 font-inter font-semibold group-hover:translate-x-1 transition-all"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl lg:text-5xl font-poppins font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm lg:text-base font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
              className="bg-gradient-secondary p-8 rounded-3xl text-white"
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