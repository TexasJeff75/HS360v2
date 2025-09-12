import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Shield, CheckCircle, FileText, Phone, Mail } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';

const ForProviders = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    suffix: '',
    email: '',
    phone: '',
    companyName: '',
    businessType: '',
    website: '',
    taxId: '',
    npiNumber: '',
    resellerLicense: '',
    resellerPermitNumber: '',
    addressLine1: '',
    city: '',
    state: '',
    zipCode: '',
    referredBy: '',
    comments: ''
  });

  const [files, setFiles] = useState({
    resellerCertificate: null as File | null,
    businessLicense: null as File | null
  });

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Revenue Enhancement",
      description: "Increase practice revenue through value-added diagnostic services and patient optimization protocols."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance Support",
      description: "Complete regulatory compliance assistance and documentation for all peptide and testing services."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Support",
      description: "Personal account management and clinical support team available 24/7 for provider questions."
    }
  ];

  const services = [
    "Comprehensive genetic testing panels",
    "Advanced micronutrient analysis",
    "Research-grade peptide access",
    "Clinical laboratory partnerships",
    "Provider education and training",
    "Marketing and patient education materials"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Provider application submitted:', formData, files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFiles(prev => ({
      ...prev,
      [fieldName]: file
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
              Join our network of forward-thinking healthcare providers and unlock 
              the power of personalized diagnostics for your practice
            </p>
            <div className="bg-white/10 backdrop-blur p-6 rounded-2xl max-w-2xl mx-auto">
              <p className="text-lg text-off-white font-inter">
                <strong>Licensed practitioners only:</strong> MD, DO, NP, PharmD, Chiropractors, 
                and certified wellness providers welcome
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 font-inter">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Services Offered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-secondary text-white p-12 rounded-3xl"
          >
            <h3 className="text-3xl font-poppins font-bold mb-8 text-center">What We Offer Your Practice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold-300 flex-shrink-0" />
                  <span className="text-white/90 font-inter">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600 font-inter">
                Join our network of healthcare professionals committed to personalized medicine
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information Section */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="suffix" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
                        Suffix
                      </label>
                      <input
                        type="text"
                        id="suffix"
                        name="suffix"
                        value={formData.suffix}
                        onChange={handleChange}
                        placeholder="MD, DO, NP, etc."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <p className="text-sm text-gray-500 mb-2">US-based mobile number</p>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                </div>
                </div>

                {/* Business Profile Section */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Business Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select Business Type</option>
                      <option value="provider">Provider</option>
                      <option value="clinic">Clinic</option>
                      <option value="pharmacy">Pharmacy</option>
                      <option value="wellness-center">Wellness Center</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                      Website *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="taxId" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tax ID / EIN *
                    </label>
                    <input
                      type="text"
                      id="taxId"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleChange}
                      placeholder="XX-XXXXXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="npiNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                      NPI Number *
                    </label>
                    <input
                      type="text"
                      id="npiNumber"
                      name="npiNumber"
                      value={formData.npiNumber}
                      onChange={handleChange}
                      placeholder="10-digit NPI number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Reseller's License Section */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Does your business have a reseller's license? *
                    </label>
                    <p className="text-sm text-gray-500 mb-4">Helps determine your eligibility for sales tax exemption.</p>
                    <div className="flex space-x-6">
                      {['Yes', 'No', 'Not sure'].map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="resellerLicense"
                            value={option}
                            checked={formData.resellerLicense === option}
                            onChange={handleChange}
                            className="h-4 w-4 text-magenta-500 border-gray-300 focus:ring-magenta-500"
                            required
                          />
                          <span className="ml-2 text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Conditional Reseller Fields */}
                  {formData.resellerLicense === 'Yes' && (
                    <>
                      <div>
                        <label htmlFor="resellerPermitNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                          Reseller's Permit Number *
                        </label>
                        <input
                          type="text"
                          id="resellerPermitNumber"
                          name="resellerPermitNumber"
                          value={formData.resellerPermitNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload Reseller's Certificate *
                        </label>
                        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-magenta-400 transition-colors">
                          <div className="space-y-1 text-center">
                            <FileText className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                              <label htmlFor="resellerCertificate" className="relative cursor-pointer bg-white rounded-md font-medium text-magenta-500 hover:text-magenta-600 focus-within:outline-none">
                                <span>Upload</span>
                                <input
                                  id="resellerCertificate"
                                  type="file"
                                  className="sr-only"
                                  onChange={handleFileChange('resellerCertificate')}
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  required
                                />
                              </label>
                              <p className="pl-1">or drag files here</p>
                            </div>
                            <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                            {files.resellerCertificate && (
                              <p className="text-sm text-green-600">Selected: {files.resellerCertificate.name}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                </div>

                {/* Business Address Section */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-2">Business Address</h3>
                  <p className="text-sm text-gray-500 mb-6">If not applicable, use your main operating address</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="addressLine1" className="block text-sm font-semibold text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        id="addressLine1"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        placeholder="Address Line 1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                          Zip Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">All fields are required</p>
                  </div>
                </div>

                {/* Verification & Referral Section */}
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Verification & Referral</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Upload Proof of Business or Professional License
                      </label>
                      <p className="text-sm text-gray-500 mb-4">Optional at this stage. Clinics may upload a business permit; individual providers may upload a license or valid ID. Required later to complete your application.</p>
                      <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-magenta-400 transition-colors">
                        <div className="space-y-1 text-center">
                          <FileText className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="businessLicense" className="relative cursor-pointer bg-white rounded-md font-medium text-magenta-500 hover:text-magenta-600 focus-within:outline-none">
                              <span>Upload</span>
                              <input
                                id="businessLicense"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange('businessLicense')}
                                accept=".pdf,.jpg,.jpeg,.png"
                              />
                            </label>
                            <p className="pl-1">or drag files here</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                          {files.businessLicense && (
                            <p className="text-sm text-green-600">Selected: {files.businessLicense.name}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="referredBy" className="block text-sm font-semibold text-gray-700 mb-2">
                        Referred by someone? Let us know!
                      </label>
                      <p className="text-sm text-gray-500 mb-4">Name or code of the person who referred you</p>
                      <p className="text-sm text-gray-500 mb-4">Optional—but filling this in may give you priority approval if applicable!</p>
                      <input
                        type="text"
                        id="referredBy"
                        name="referredBy"
                        value={formData.referredBy}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes Section */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Additional Notes</h3>
                <div>
                  <label htmlFor="comments" className="block text-sm font-semibold text-gray-700 mb-2">
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta-500 focus:border-transparent transition-colors"
                  ></textarea>
                </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-2">Compliance Notice:</p>
                      <p>By submitting this application, you certify that you are a licensed healthcare practitioner authorized to order laboratory tests and/or utilize research materials in your jurisdiction. All peptide products are for research use only and not intended for human consumption.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-12 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
            Questions About Our Provider Program?
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:1-800-HEALTHSPAN"
              className="flex items-center space-x-2 text-magenta-500 hover:text-magenta-600 font-poppins font-semibold"
            >
              <Phone className="h-5 w-5" />
              <span>1-800-HEALTHSPAN</span>
            </a>
            <a
              href="mailto:providers@healthspan360.com"
              className="flex items-center space-x-2 text-magenta-500 hover:text-magenta-600 font-poppins font-semibold"
            >
              <Mail className="h-5 w-5" />
              <span>providers@hs360.co</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    {/* Calendly Section */}
    <CalendlySection />
    </>
  );
};

export default ForProviders;