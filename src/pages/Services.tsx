import React from 'react';
import { motion } from 'framer-motion';
import { Dna, TestTube, Activity, Users, ChevronRight, Shield, Award, Microscope, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../components/CalendlySection';
import SEO from '../components/SEO';

const Services = () => {
  const services = [
    {
      icon: <Activity className="h-12 w-12" />,
      title: "Peptides",
      subtitle: "Research-Use Products",
      description: "High-quality peptides for research purposes, available exclusively to licensed healthcare practitioners with full compliance support.",
      keyFeatures: [
        "Research-grade synthesis",
        "Purity testing & certificates", 
        "Compliance documentation",
        "Storage guidance"
      ],
      badge: "Research Only",
      badgeColor: "bg-red-500",
      link: "/services/peptides",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Dna className="h-12 w-12" />,
      title: "Genetic Testing",
      subtitle: "Personalized SNP Analysis",
      description: "Comprehensive genetic analysis to understand individual responses to peptides, nutrients, and therapeutic interventions.",
      keyFeatures: [
        "170+ genetic markers",
        "Pharmacogenomics panels",
        "Personalized recommendations",
        "Provider interpretation"
      ],
      badge: "170 Markers",
      badgeColor: "bg-blue-500",
      link: "/services/genetic-testing",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TestTube className="h-12 w-12" />,
      title: "Micronutrient Testing",
      subtitle: "Advanced LC-MS/MS Analysis",
      description: "State-of-the-art testing for comprehensive wellness insights using the most advanced analytical methods available.",
      keyFeatures: [
        "196 biomarkers analyzed",
        "LC-MS/MS & ICP-MS methods",
        "Comprehensive reporting",
        "7-14 day turnaround"
      ],
      badge: "196 Biomarkers",
      badgeColor: "bg-green-500",
      link: "/services/micronutrient-testing",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Clinical Lab Services",
      subtitle: "Molecular Diagnostics",
      description: "Comprehensive laboratory services including molecular diagnostics, toxicology, and specialty testing for healthcare providers.",
      keyFeatures: [
        "CLIA certified labs",
        "Molecular diagnostics",
        "Toxicology screening",
        "24/7 support"
      ],
      badge: "CLIA Certified",
      badgeColor: "bg-purple-500",
      link: "/services/clinical-lab-services",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Provider Partners", icon: <Users className="h-6 w-6" /> },
    { number: "99.9%", label: "Accuracy Rate", icon: <Microscope className="h-6 w-6" /> },
    { number: "100%", label: "CLIA Compliant", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <>
    <SEO
      title="Our Services - HealthSpan360"
      description="Comprehensive wellness and diagnostic solutions: peptides, genetic testing, micronutrient testing, and clinical lab services. Professional-grade diagnostics for healthcare excellence."
      keywords="peptides, genetic testing, micronutrient testing, clinical lab services, wellness diagnostics, CLIA certified, pharmacogenomics, nutrigenomics"
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
          >
            <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">
              Comprehensive diagnostic solutions that bridge cutting-edge science 
              with practical healthcare applications
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur p-4 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-2 text-gold-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-poppins font-bold">{stat.number}</div>
                  <div className="text-white/80 text-sm font-inter">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Solution</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Professional-grade diagnostics and research tools designed for healthcare excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative`}>
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                      backgroundSize: "200% 100%",
                    }}
                  />
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="bg-white/20 backdrop-blur p-3 rounded-xl"
                        whileHover={{ 
                          rotate: [0, -15, 15, 0],
                          scale: 1.1,
                          transition: { duration: 0.5 }
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-poppins font-bold mb-1">{service.title}</h3>
                        <p className="text-white/90 font-inter">{service.subtitle}</p>
                      </div>
                    </div>
                    <motion.div 
                      className={`${service.badgeColor} px-3 py-1 rounded-full text-xs font-poppins font-semibold`}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {service.badge}
                    </motion.div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="text-gray-600 font-inter text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3 mb-8">
                    {service.keyFeatures.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        </motion.div>
                        <span className="text-gray-700 font-inter">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={service.link}
                      className={`group/btn inline-flex items-center bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white px-6 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 transform group-hover:scale-105`}
                    >
                      Learn More
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>

                {/* Special Notice for Peptides */}
                {service.title === 'Peptides' && (
                  <div className="px-8 pb-8">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-amber-800">
                          <strong>Research Use Only:</strong> Available exclusively to licensed healthcare practitioners. Not intended for human consumption.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">HealthSpan360?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="h-8 w-8" />,
                title: "Scientific Excellence",
                description: "Cutting-edge research backed by peer-reviewed science and clinical validation."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Compliance First",
                description: "Unwavering commitment to regulatory compliance and ethical practices."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Provider Partnership",
                description: "Dedicated support and collaborative relationships with healthcare providers."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-primary text-white p-4 rounded-2xl mb-6 w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 font-inter leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about how our services can enhance 
              your practice and improve patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/providers"
                className="bg-white text-magenta-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors shadow-lg"
              >
                Provider Information
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all"
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

export default Services;