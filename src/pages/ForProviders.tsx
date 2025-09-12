import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Microscope, Activity, CheckCircle, ArrowRight, Star, TrendingUp, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../components/CalendlySection';

const ForProviders = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceType: '',
    licenseType: '',
    licenseNumber: '',
    practiceAddress: '',
    patientsPerMonth: '',
    interests: [],
    experience: '',
    message: ''
  });

  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Advanced Diagnostics",
      description: "Access to cutting-edge genetic testing, micronutrient analysis, and peptide research",
      features: ["170+ genetic markers", "196 biomarkers analyzed", "Research-grade peptides", "CLIA-certified labs"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Support",
      description: "Comprehensive training and ongoing support for seamless integration into your practice",
      features: ["24/7 technical support", "Clinical interpretation", "Training programs", "Marketing materials"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Practice Growth",
      description: "Expand your service offerings and increase patient satisfaction with personalized medicine",
      features: ["New revenue streams", "Patient retention", "Competitive advantage", "Referral opportunities"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Better Outcomes",
      description: "Help patients achieve optimal health through precision diagnostics and targeted interventions",
      features: ["Personalized protocols", "Evidence-based insights", "Improved compliance", "Measurable results"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Provider application submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

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
                Partner with <span className="bg-gradient-primary bg-clip-text text-transparent">HealthSpan360</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">
                Join our network of forward-thinking healthcare providers and unlock the 
                power of personalized diagnostics for your practice
              </p>
              
              {/* Licensed Practitioners Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg border border-white/30 p-8 rounded-3xl max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-300/5 to-transparent rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-300/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                
                <div className="flex items-center justify-center space-x-3 text-off-white">
                  <motion.div 
                    className="bg-gold-300/20 p-4 rounded-2xl border border-gold-300/30"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(255, 195, 0, 0.2)",
                        "0 0 30px rgba(255, 195, 0, 0.4)",
                        "0 0 20px rgba(255, 195, 0, 0.2)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Shield className="h-8 w-8 text-gold-300" />
                  </motion.div>
                  <div className="text-center relative z-10">
                    <motion.p 
                      className="font-poppins font-bold text-2xl mb-3 text-white"
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(255,255,255,0.5)",
                          "0 0 20px rgba(255,255,255,0.8)",
                          "0 0 10px rgba(255,255,255,0.5)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Licensed practitioners only:
                    </motion.p>
                    <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-xl border border-white/20">
                      <p className="font-inter text-lg text-white/95 font-medium">
                        MD, DO, NP, PharmD, Chiropractors, and certified wellness providers welcome
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Provider Benefits Section */}
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
                Provider <span className="bg-gradient-primary bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Enhance your practice with cutting-edge diagnostics and comprehensive support
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
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 w-fit group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 font-inter mb-6">{benefit.description}</p>
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

        {/* Application Form Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Network</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter">
                Complete the application below to begin your partnership with HealthSpan360
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 lg:p-12 rounded-3xl shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-8" name="provider-application" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="provider-application" />
                
                {/* Basic Information */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="practiceType" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Practice Type *
                      </label>
                      <select
                        id="practiceType"
                        name="practiceType"
                        value={formData.practiceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                        required
                      >
                        <option value="">Select practice type</option>
                        <option value="primary-care">Primary Care</option>
                        <option value="functional-medicine">Functional Medicine</option>
                        <option value="integrative-medicine">Integrative Medicine</option>
                        <option value="wellness-center">Wellness Center</option>
                        <option value="anti-aging">Anti-Aging/Longevity</option>
                        <option value="weight-management">Weight Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* License Information */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">License Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="licenseType" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        License Type *
                      </label>
                      <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                        required
                      >
                        <option value="">Select license type</option>
                        <option value="md">MD - Doctor of Medicine</option>
                        <option value="do">DO - Doctor of Osteopathic Medicine</option>
                        <option value="np">NP - Nurse Practitioner</option>
                        <option value="pharmd">PharmD - Doctor of Pharmacy</option>
                        <option value="dc">DC - Doctor of Chiropractic</option>
                        <option value="nd">ND - Naturopathic Doctor</option>
                        <option value="other">Other Licensed Practitioner</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="licenseNumber" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        License Number *
                      </label>
                      <input
                        type="text"
                        id="licenseNumber"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Practice Information */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Practice Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="practiceAddress" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Practice Address *
                      </label>
                      <input
                        type="text"
                        id="practiceAddress"
                        name="practiceAddress"
                        value={formData.practiceAddress}
                        onChange={handleChange}
                        placeholder="Full practice address including city, state, zip"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="patientsPerMonth" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Patients Per Month
                      </label>
                      <select
                        id="patientsPerMonth"
                        name="patientsPerMonth"
                        value={formData.patientsPerMonth}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                      >
                        <option value="">Select range</option>
                        <option value="1-50">1-50 patients</option>
                        <option value="51-100">51-100 patients</option>
                        <option value="101-200">101-200 patients</option>
                        <option value="201-500">201-500 patients</option>
                        <option value="500+">500+ patients</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Years in Practice
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                      >
                        <option value="">Select range</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="11-20">11-20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Areas of Interest */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Areas of Interest</h3>
                  <p className="text-gray-600 font-inter mb-4">Select all services you're interested in offering:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Genetic Testing',
                      'Peptide Therapy',
                      'Micronutrient Testing',
                      'Clinical Lab Services'
                    ].map((interest) => (
                      <label key={interest} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-magenta-300 transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="h-5 w-5 text-magenta-500 border-gray-300 rounded focus:ring-magenta-500"
                        />
                        <span className="text-gray-700 font-inter">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                    placeholder="Tell us about your practice goals, specific interests, or any questions you have..."
                  ></textarea>
                </div>

                {/* Compliance Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-blue-800">
                      <h4 className="font-poppins font-semibold mb-2">Compliance & Verification</h4>
                      <ul className="text-sm font-inter space-y-1">
                        <li>• All applications are subject to license verification</li>
                        <li>• Partnership agreements include compliance training</li>
                        <li>• All products are for professional use under practitioner supervision</li>
                        <li>• We maintain full regulatory compliance documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-poppins font-bold mb-4">Join Our Growing Network</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                {[
                  { number: "500+", label: "Provider Partners" },
                  { number: "170", label: "Genetic Markers" },
                  { number: "196", label: "Biomarkers Analyzed" },
                  { number: "99.9%", label: "Accuracy Rate" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-poppins font-bold mb-2">{stat.number}</div>
                    <div className="text-white/80 font-inter">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-poppins font-bold mx-auto mb-4">1</div>
                  <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">Application Review</h3>
                  <p className="text-gray-600 font-inter text-sm">We'll review your application and verify your credentials within 24-48 hours</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-poppins font-bold mx-auto mb-4">2</div>
                  <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">Partnership Setup</h3>
                  <p className="text-gray-600 font-inter text-sm">Complete onboarding, training, and account setup to begin offering services</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-poppins font-bold mx-auto mb-4">3</div>
                  <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">Launch & Support</h3>
                  <p className="text-gray-600 font-inter text-sm">Start serving patients with ongoing support and clinical guidance</p>
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

export default ForProviders;