import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building, Shield, Award, Users, TrendingUp, CheckCircle, Star, Heart, Microscope } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';

const ForProviders = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: '',
    practiceType: '',
    licenseType: '',
    licenseNumber: '',
    state: '',
    npiNumber: '',
    address: '',
    city: '',
    zipCode: '',
    website: '',
    yearsInPractice: '',
    currentPatientVolume: '',
    specialties: '',
    servicesOfInterest: [],
    currentLabPartner: '',
    reasonForChange: '',
    businessLicense: null,
    medicalLicense: null,
    additionalCertifications: null,
    referralSource: '',
    additionalComments: ''
  });

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance First",
      description: "Full regulatory support and documentation for all services",
      features: ["CLIA & CAP certified", "Complete audit trail", "Regulatory updates"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Revenue Growth",
      description: "Expand your practice offerings with high-margin services",
      features: ["Competitive pricing", "Marketing support", "Training included"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Support",
      description: "24/7 medical and technical support for your practice",
      features: ["Account manager", "Clinical consultation", "Technical helpdesk"]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "99.9% accuracy with fastest turnaround times",
      features: ["Quality guarantee", "Rush processing", "Result validation"]
    }
  ];

  const practiceTypes = [
    "Family Medicine",
    "Internal Medicine", 
    "Functional Medicine",
    "Integrative Medicine",
    "Anti-Aging/Longevity",
    "Wellness Center",
    "Concierge Medicine",
    "Naturopathic Medicine",
    "Chiropractic",
    "Pharmacy",
    "Other"
  ];

  const licenseTypes = [
    "MD - Doctor of Medicine",
    "DO - Doctor of Osteopathic Medicine",
    "NP - Nurse Practitioner", 
    "PA - Physician Assistant",
    "PharmD - Doctor of Pharmacy",
    "ND - Naturopathic Doctor",
    "DC - Doctor of Chiropractic",
    "Other Healthcare License"
  ];

  const servicesOptions = [
    "Genetic Testing",
    "Micronutrient Testing",
    "Peptide Therapy",
    "Clinical Lab Services",
    "Hormone Testing",
    "Toxicology Testing"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Provider application submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (service: string) => {
    const updatedServices = formData.servicesOfInterest.includes(service)
      ? formData.servicesOfInterest.filter(s => s !== service)
      : [...formData.servicesOfInterest, service];
    
    setFormData({
      ...formData,
      servicesOfInterest: updatedServices
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    }
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
                Join our network of forward-thinking healthcare providers and unlock the power of personalized diagnostics for your practice
              </p>
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur p-8 rounded-2xl max-w-3xl mx-auto border border-white/20">
                <p className="text-lg text-white font-inter">
                  <strong>Licensed practitioners only:</strong> MD, DO, NP, PharmD, Chiropractors, and certified wellness providers welcome
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Provider Benefits */}
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
                  className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-3xl hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6 w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 font-inter mb-6">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Provider Application Form */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">Provider Application</h2>
              <p className="text-xl text-gray-600 font-inter">
                Complete the application below to join our network of healthcare providers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-8" name="provider-application" method="POST" data-netlify="true" encType="multipart/form-data">
                <input type="hidden" name="form-name" value="provider-application" />
                
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
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
                  </div>
                </div>

                {/* Practice Information */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Practice Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="practiceName" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Practice Name *
                      </label>
                      <input
                        type="text"
                        id="practiceName"
                        name="practiceName"
                        value={formData.practiceName}
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
                        {practiceTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                >
                  Submit Application
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
      <CalendlySection />
    </>
  );
};

export default ForProviders;