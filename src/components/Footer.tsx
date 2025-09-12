import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      content: "1-800-HEALTHSPAN",
      subContent: "24/7 Provider Support",
      link: "tel:1-800-HEALTHSPAN"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@healthspan360.com",
      subContent: "Response within 24 hours",
      link: "mailto:info@hs360.co"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Provider Support",
      content: "providers@hs360.co",
      subContent: "Dedicated provider assistance",
      link: "mailto:providers@hs360.co"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Corporate Office",
      content: "Available upon request",
      subContent: "Licensed facilities nationwide",
      link: null
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM EST" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM EST" },
    { day: "Sunday", hours: "Emergency support only" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              Contact <span className="bg-gradient-primary bg-clip-text text-transparent">HealthSpan360</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed">
              Ready to transform your practice with personalized diagnostics? 
              Get in touch with our expert team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-primary text-white p-3 rounded-lg flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-magenta-500 hover:text-magenta-600 font-inter font-medium"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-700 font-inter font-medium">{info.content}</p>
                        )}
                        <p className="text-gray-500 text-sm font-inter">{info.subContent}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="mt-12 bg-gradient-to-br from-gray-50 to-orange-50/20 p-6 rounded-2xl">
                  <h3 className="font-poppins font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-magenta-500" />
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    {businessHours.map((hours, index) => (
                      <div key={index} className="flex justify-between text-sm font-inter">
                        <span className="text-gray-700 font-inter">{hours.day}</span>
                        <span className="text-gray-900 font-inter font-medium">{hours.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 lg:p-12 rounded-3xl"
              >
                <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-8 flex items-center">
                  <MessageSquare className="h-8 w-8 mr-3 text-magenta-500" />
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization/Practice
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                        required
                      >
                        <option value="">Select inquiry type</option>
                        <option value="provider">Provider Partnership</option>
                        <option value="testing">Testing Services</option>
                        <option value="peptides">Peptide Information</option>
                        <option value="support">Technical Support</option>
                        <option value="general">General Information</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white"
                      placeholder="Please provide details about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                    <p>
                      <strong>Privacy Notice:</strong> Your information will be used solely to respond to your inquiry. 
                      We do not share personal information with third parties. For medical questions, please consult 
                      with a licensed healthcare provider.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-poppins font-bold mb-4">
              24/7 Emergency Support for Providers
            </h2>
            <p className="text-xl text-white/80 font-inter mb-6">
              Critical patient care questions? Our medical team is available around the clock.
            </p>
            <a
              href="tel:1-800-HEALTHSPAN"
              className="inline-flex items-center bg-white text-magenta-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency Line: 1-800-HEALTHSPAN
            </a>
          </motion.div>
        </div>
      </section>
    </div>
    {/* Calendly Section */}
    <CalendlySection />
    </>
  );
};

export default Contact;