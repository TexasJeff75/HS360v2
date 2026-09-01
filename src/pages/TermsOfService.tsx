import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle, Scale, Users, Clock, Building, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../components/CalendlySection';

const TermsOfService = () => {
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
                Terms of <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">
                Please read these terms carefully before using our services. 
                They outline your rights and responsibilities as a HealthSpan360 user.
              </p>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-4 text-off-white">
                  <Clock className="h-6 w-6" />
                  <span className="font-inter">Effective Date: January 15, 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl mb-12">
                <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-4">Overview</h2>
                <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
                  <p>
                    This website is operated by HealthSpan360 LLC ("we", "us", "our"). Throughout the site, the terms "we", "us" and "our" refer to HealthSpan360 LLC. HealthSpan360 LLC offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                  </p>
                  <p>
                    By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms apply to all users of the site, including without limitation browsers, vendors, customers, merchants, and/or contributors of content.
                  </p>
                  <p>
                    Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, you may not access the website or use any Services.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div className="text-amber-800">
                    <h3 className="font-poppins font-semibold mb-2">Important Notice</h3>
                    <p className="text-sm font-inter">
                      Any new features or tools added to the store shall also be subject to these Terms. We reserve the right to update, change, or replace any part of these Terms by posting updates to our website. Your continued use of the website constitutes acceptance of those changes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              
              {/* Section 1 - Online Store Terms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-primary text-white p-3 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-poppins font-bold text-gray-900">Section 1 - Online Store Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700 font-inter">
                  <p>By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority and you have given consent to allow any of your minor dependents to use this site.</p>
                  <p>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction. You must not transmit any worms, viruses, or destructive code.</p>
                  <p>A breach or violation of any Terms will result in an immediate termination of your Services.</p>
                </div>
              </motion.div>

              {/* Section 2 - General Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">Section 2 - General Conditions</h3>
                <div className="space-y-4 text-gray-700 font-inter">
                  <p>We reserve the right to refuse Service to anyone for any reason at any time.</p>
                  <p>You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks. Credit card information is always encrypted during transfer over networks.</p>
                  <p>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without express written permission.</p>
                </div>
              </motion.div>

              {/* Section 3 - Information Accuracy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">Section 3 - Accuracy, Completeness, and Timeliness of Information</h3>
                <p className="text-gray-700 font-inter">We are not responsible if information available on this site is not accurate, complete, or current. The material is provided for general information only and should not be relied upon without consulting primary, more accurate sources.</p>
              </motion.div>

              {/* Section 4 - Service Modifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">Section 4 - Modifications to the Service and Prices</h3>
                <ul className="space-y-2 text-gray-700 font-inter list-disc list-inside">
                  <li>Prices for products are subject to change without notice.</li>
                  <li>We reserve the right to modify or discontinue the Service at any time.</li>
                  <li>We shall not be liable for modification, price change, suspension, or discontinuance.</li>
                </ul>
              </motion.div>

              {/* Section 5 - Products/Services with Research Disclaimer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-magenta-500"
              >
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">Section 5 - Products or Services</h3>
                <div className="space-y-4 text-gray-700 font-inter">
                  <p>Certain products or Services may be available exclusively online. These may have limited quantities and are subject to return or exchange only in accordance with our Refund Policy: <Link to="/refund-policy" className="text-magenta-500 hover:text-magenta-600 underline">https://HS360.com/refund-policy</Link>.</p>
                  <p>We have made every effort to display products accurately. We cannot guarantee that your monitor's display will be accurate.</p>
                  <p>We reserve the right to limit sales to any person or jurisdiction and to discontinue products at any time.</p>
                </div>
                
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="font-poppins font-bold text-red-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Research Use / Licensed Practitioner Disclaimer
                  </h4>
                  <ul className="space-y-2 text-red-800 text-sm font-inter list-disc list-inside">
                    <li>Genetic and micronutrient testing services are for informational purposes and are not diagnostic unless performed under a licensed provider's supervision.</li>
                    <li>Genetic and micronutrient testing services are for informational purposes and are not diagnostic unless performed under a licensed provider's supervision.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Additional Sections */}
              {[
                {
                  number: 6,
                  title: "Accuracy of Billing and Account Information",
                  content: "We reserve the right to refuse any order. We may, at our discretion, limit or cancel quantities purchased per person, per household, or per order. You agree to provide current, complete, and accurate account information and promptly update it as necessary. For more details, please review our Refund Policy."
                },
                {
                  number: 7,
                  title: "Optional Tools",
                  content: "We may provide access to third-party tools \"as is\" and without warranty. Your use of them is entirely at your own risk."
                },
                {
                  number: 8,
                  title: "Third-Party Links",
                  content: "We are not responsible for the content, accuracy, or practices of third-party websites. Review their policies before engaging in transactions."
                },
                {
                  number: 9,
                  title: "User Comments, Feedback, and Other Submissions",
                  content: "By submitting comments, suggestions, or materials, you grant us the right to use them without restriction or compensation."
                },
                {
                  number: 10,
                  title: "Personal Information",
                  content: (
                    <span>
                      Your submission of personal information is governed by our Privacy Policy: 
                      <Link to="/privacy" className="text-magenta-500 hover:text-magenta-600 underline ml-1">
                        https://HS360.com/privacy-policy
                      </Link>.
                    </span>
                  )
                },
                {
                  number: 11,
                  title: "Errors, Inaccuracies, and Omissions",
                  content: "We reserve the right to correct errors, inaccuracies, or omissions and to cancel orders affected by them."
                },
                {
                  number: 12,
                  title: "Prohibited Uses",
                  content: "You are prohibited from using the site or its content for unlawful, abusive, discriminatory, fraudulent, or malicious purposes, or to interfere with the Service."
                }
              ].map((section, index) => (
                <motion.div
                  key={section.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">
                    Section {section.number} - {section.title}
                  </h3>
                  <div className="text-gray-700 font-inter">
                    {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
                  </div>
                </motion.div>
              ))}

              {/* Legal Sections */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500"
              >
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">Section 13 - Disclaimer of Warranties; Limitation of Liability</h3>
                <ul className="space-y-2 text-gray-700 font-inter list-disc list-inside">
                  <li>The Service and products are provided "as is" and "as available" without warranties of any kind.</li>
                  <li>HealthSpan360 LLC and its affiliates shall not be liable for indirect, incidental, or consequential damages.</li>
                </ul>
              </motion.div>

              {/* Final Legal Sections */}
              {[
                {
                  number: 14,
                  title: "Indemnification",
                  content: "You agree to indemnify and hold harmless HealthSpan360 LLC, its affiliates, officers, directors, and employees from any claim arising from your use of the Service or breach of these Terms."
                },
                {
                  number: 15,
                  title: "Severability",
                  content: "If any provision is found unlawful or unenforceable, it shall not affect the validity of the remaining provisions."
                },
                {
                  number: 16,
                  title: "Termination",
                  content: "These Terms remain in effect unless terminated by either party. If you fail to comply, we may terminate Services immediately."
                },
                {
                  number: 17,
                  title: "Entire Agreement",
                  content: "These Terms and related policies constitute the entire agreement between you and HealthSpan360 LLC."
                },
                {
                  number: 18,
                  title: "Governing Law",
                  content: "These Terms and any disputes shall be governed by and construed in accordance with the laws of the State of Texas, United States."
                },
                {
                  number: 19,
                  title: "Changes to Terms of Service",
                  content: "You can review the most current Terms at any time on this page. Continued use of the site constitutes acceptance of changes."
                }
              ].map((section, index) => (
                <motion.div
                  key={section.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">
                    Section {section.number} - {section.title}
                  </h3>
                  <p className="text-gray-700 font-inter">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-gradient-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Building className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-poppins font-bold">Section 20 - Contact Information</h2>
              </div>
              
              <p className="text-xl text-white/90 font-inter mb-8">
                Questions about the Terms of Service should be sent to:
              </p>
              
              <div className="bg-white/10 backdrop-blur p-8 rounded-2xl max-w-2xl mx-auto">
                <div className="space-y-4 text-white">
                  <div>
                    <h3 className="font-poppins font-bold text-xl mb-2">HealthSpan360 LLC</h3>
                    <p className="font-inter">16922 Telge Rd., Suite 2</p>
                    <p className="font-inter">Cypress, TX 77429</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 pt-4">
                    <a
                      href="mailto:support@hs360.co"
                      className="flex items-center justify-center space-x-2 text-gold-300 hover:text-gold-500 font-inter font-semibold"
                    >
                      <Mail className="h-5 w-5" />
                      <span>support@HS360.com</span>
                    </a>
                    <a
                      href="https://hs360.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-gold-300 hover:text-gold-500 font-inter font-semibold"
                    >
                      <FileText className="h-5 w-5" />
                      <span>https://HS360.com</span>
                    </a>
                  </div>
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

export default TermsOfService;