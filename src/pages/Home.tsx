import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Heart,
  Microscope,
  Dna,
  Activity
} from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '10,000+', label: 'Healthcare Providers', icon: <Users className="h-8 w-8" /> },
    { number: '500K+', label: 'Tests Processed', icon: <Microscope className="h-8 w-8" /> },
    { number: '99.9%', label: 'Accuracy Rate', icon: <Award className="h-8 w-8" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="h-8 w-8" /> },
  ];

  const services = [
    {
      title: 'Genetic Testing',
      description: 'Advanced genomic analysis for personalized treatment strategies and risk assessment.',
      icon: <Dna className="h-12 w-12" />,
      features: ['Pharmacogenomics', 'Disease Risk Analysis', 'Ancestry & Wellness', 'Cancer Genetics'],
      href: '/services/genetic-testing'
    },
    {
      title: 'Clinical Lab Services',
      description: 'Comprehensive laboratory testing with rapid turnaround times and precise results.',
      icon: <Microscope className="h-12 w-12" />,
      features: ['Blood Chemistry', 'Hormone Testing', 'Infectious Disease', 'Toxicology'],
      href: '/services/clinical-lab-services'
    },
    {
      title: 'Micronutrient Testing',
      description: 'Detailed analysis of vitamin, mineral, and nutrient levels for optimal health.',
      icon: <Activity className="h-12 w-12" />,
      features: ['Vitamin Panels', 'Mineral Analysis', 'Antioxidant Levels', 'Metabolic Health'],
      href: '/services/micronutrient-testing'
    },
    {
      title: 'Peptide Therapy',
      description: 'Cutting-edge peptide solutions for regenerative medicine and wellness optimization.',
      icon: <Heart className="h-12 w-12" />,
      features: ['Anti-Aging', 'Recovery & Repair', 'Cognitive Enhancement', 'Metabolic Support'],
      href: '/services/peptides'
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Internal Medicine Physician',
      content: 'HealthSpan360 has revolutionized how I approach patient care. The genetic insights have been game-changing for my practice.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Functional Medicine Practitioner',
      content: 'The comprehensive micronutrient testing provides invaluable data that helps me create truly personalized treatment plans.',
      rating: 5
    },
    {
      name: 'Dr. Lisa Rodriguez',
      role: 'Integrative Medicine Specialist',
      content: 'Fast turnaround times, accurate results, and excellent customer support. HealthSpan360 is my go-to laboratory partner.',
      rating: 5
    },
  ];

  const benefits = [
    {
      title: 'Provider-First Approach',
      description: 'Built by healthcare professionals, for healthcare professionals',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Rapid Results',
      description: '24-48 hour turnaround on most standard tests',
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock medical and technical support',
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: 'CLIA Certified',
      description: 'Highest standards of laboratory quality and compliance',
      icon: <Award className="h-8 w-8" />
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-dark text-off-white overflow-hidden flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-magenta-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-poppins font-bold leading-tight mb-8">
                Advanced{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Diagnostics
                </span>{' '}
                for{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Personalized
                </span>{' '}
                Medicine
              </h1>
              
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-12">
                Empowering healthcare providers with cutting-edge genetic testing, comprehensive lab services, 
                and innovative peptide therapies to deliver truly personalized patient care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/providers"
                  className="bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  Partner with Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <Link
                  to="/patients"
                  className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all hover:bg-white/10 flex items-center justify-center"
                >
                  Patient Information
                </Link>
              </div>
            </motion.div>

            {/* Logo/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.img 
                src="/logo.png" 
                alt="HealthSpan360 Logo" 
                className="h-64 w-auto drop-shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.6 }
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-magenta-500 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-inter font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Testing Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
              From genetic analysis to advanced peptide therapies, we provide the tools and insights 
              healthcare providers need to deliver personalized, effective treatments.
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
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="text-magenta-500 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 font-inter mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
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

      {/* Benefits Section */}
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
              Why Choose{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                HealthSpan360
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
              We're more than just a laboratory – we're your partner in delivering exceptional patient care 
              through advanced diagnostics and personalized medicine solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-primary p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-magenta-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Trusted by{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Healthcare Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
              See what healthcare providers are saying about their experience with HealthSpan360's 
              comprehensive testing solutions and personalized support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 font-inter mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <div className="font-poppins font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 font-inter text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark text-off-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-magenta-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
              Ready to Transform{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Patient Care?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-cool-gray font-inter mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of healthcare providers who trust HealthSpan360 for advanced diagnostics, 
              personalized insights, and exceptional support. Start your partnership today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/providers"
                className="bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-10 py-5 rounded-lg font-poppins font-semibold text-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Become a Provider Partner
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              
              <Link
                to="/contact"
                className="border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-lg font-poppins font-semibold text-xl transition-all hover:bg-white/10 flex items-center justify-center"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;