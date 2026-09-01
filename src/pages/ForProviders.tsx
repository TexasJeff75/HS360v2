import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Shield, CheckCircle, FileText, Phone, Mail } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';

const ForProviders = () => {
  const [formData, setFormData] = useState({ name: '', practice: '', email: '', phone: '', license: '', specialty: '', message: '' });

  const benefits = [
    { icon: <TrendingUp className="h-8 w-8" />, title: "Revenue Enhancement", description: "Increase practice revenue through value-added diagnostic services and patient optimization protocols." },
    { icon: <Shield className="h-8 w-8" />, title: "Compliance Support", description: "Complete regulatory compliance assistance and documentation for all testing services." },
    { icon: <Users className="h-8 w-8" />, title: "Dedicated Support", description: "Personal account management and clinical support team available 24/7 for provider questions." }
  ];

  const services = ["Comprehensive genetic testing panels", "Advanced micronutrient analysis", "Clinical laboratory partnerships", "Provider education and training", "Marketing and patient education materials"];

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log('Provider application submitted:', formData); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  return (
    <>
    <div className="pt-20">
      <section className="bg-gradient-dark text-off-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-magenta-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-6">Partner with <span className="bg-gradient-primary bg-clip-text text-transparent">HealthSpan360</span></h1>
            <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">Join our network of forward-thinking healthcare providers and unlock the power of personalized diagnostics for your practice</p>
            <div className="bg-white/10 backdrop-blur p-6 rounded-2xl max-w-2xl mx-auto">
              <p className="text-lg text-off-white font-inter"><strong>Licensed practitioners only:</strong> MD, DO, NP, PharmD, Chiropractors, and certified wellness providers welcome</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">Provider <span className="bg-gradient-primary bg-clip-text text-transparent">Benefits</span></h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">Enhance your practice with cutting-edge diagnostics and comprehensive support</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-gradient-primary text-white p-4 rounded-xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 font-inter">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-gradient-secondary text-white p-12 rounded-3xl">
            <h3 className="text-3xl font-poppins font-bold mb-8 text-center">What We Offer Your Practice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3"><CheckCircle className="h-6 w-6 text-gold-300 flex-shrink-0" /><span className="text-white/90 font-inter">{service}</span></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">Provider Application</h2>
              <p className="text-xl text-gray-600 font-inter">Join our network of healthcare professionals committed to personalized medicine</p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" required />
                  </div>
                  <div>
                    <label htmlFor="practice" className="block text-sm font-poppins font-semibold text-gray-700 mb-2">Practice/Organization Name *</label>
                    <input type="text" id="practice" name="practice" value={formData.practice} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="license" className="block text-sm font-semibold text-gray-700 mb-2">License Number *</label>
                    <input type="text" id="license" name="license" value={formData.license} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" required />
                  </div>
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-semibold text-gray-700 mb-2">Specialty/Practice Type *</label>
                    <select id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" required>
                      <option value="">Select Specialty</option>
                      <option value="md">Medical Doctor (MD)</option>
                      <option value="do">Doctor of Osteopathy (DO)</option>
                      <option value="np">Nurse Practitioner (NP)</option>
                      <option value="pharmd">Doctor of Pharmacy (PharmD)</option>
                      <option value="dc">Doctor of Chiropractic (DC)</option>
                      <option value="wellness">Wellness Provider</option>
                      <option value="other">Other Licensed Provider</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your practice and interest in our services</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Describe your practice, patient demographics, and how you plan to integrate our services..."></textarea>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800"><p className="font-semibold mb-2">Compliance Notice:</p><p>By submitting this application, you certify that you are a licensed healthcare practitioner authorized to order laboratory tests and/or utilize research materials in your jurisdiction.</p></div>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-12 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">Submit Application</button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">Questions About Our Provider Program?</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:877-GO-HS360" className="flex items-center space-x-2 text-magenta-500 hover:text-magenta-600 font-poppins font-semibold"><Phone className="h-5 w-5" /><span>877-GO-HS360</span></a>
            <a href="mailto:providers@healthspan360.com" className="flex items-center space-x-2 text-magenta-500 hover:text-magenta-600 font-poppins font-semibold"><Mail className="h-5 w-5" /><span>providers@hs360.co</span></a>
          </div>
        </div>
      </section>
    </div>
    <CalendlySection />
    </>
  );
};

export default ForProviders;