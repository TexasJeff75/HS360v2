import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../components/CalendlySection';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Contact information (name, email, phone number, address)",
            "Professional credentials (license numbers, NPI numbers, practice information)",
            "Account information (username, password, preferences)",
            "Communication records (emails, phone calls, chat messages)"
          ]
        },
        {
          subtitle: "Health Information",
          items: [
            "Laboratory test results and genetic information (when provided by healthcare providers)",
            "Medical history relevant to testing (as provided by healthcare providers)",
            "Health-related preferences and goals (as shared through provider consultations)"
          ]
        },
        {
          subtitle: "Technical Information",
          items: [
            "Device information (IP address, browser type, operating system)",
            "Usage data (pages visited, time spent, click patterns)",
            "Cookies and tracking technologies data"
          ]
        }
      ]
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          items: [
            "Process and analyze laboratory tests and genetic screenings",
            "Provide personalized health insights and recommendations",
            "Facilitate communication between providers and patients",
            "Manage user accounts and service access"
          ]
        },
        {
          subtitle: "Business Operations",
          items: [
            "Verify professional credentials and licensing",
            "Process payments and manage billing",
            "Provide customer support and technical assistance",
            "Improve our services and develop new features"
          ]
        },
        {
          subtitle: "Legal and Regulatory",
          items: [
            "Comply with healthcare regulations (HIPAA, CLIA, state laws)",
            "Maintain records for regulatory reporting",
            "Respond to legal requests and protect our rights",
            "Ensure platform security and prevent fraud"
          ]
        }
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Information Sharing",
      content: [
        {
          subtitle: "We Share Information With:",
          items: [
            "Healthcare providers who order tests for their patients",
            "CLIA-certified laboratories that process samples",
            "Service providers who assist with platform operations (under strict confidentiality agreements)",
            "Legal authorities when required by law or regulation"
          ]
        },
        {
          subtitle: "We Do NOT Share Information With:",
          items: [
            "Third-party marketers or advertisers",
            "Insurance companies (unless legally required)",
            "Employers or family members (without explicit consent)",
            "Social media platforms or data brokers"
          ]
        }
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "End-to-end encryption for all data transmission",
            "SOC 2 Type II compliant data centers",
            "Multi-factor authentication for provider accounts",
            "Regular security audits and penetration testing",
            "Employee training on privacy and security protocols"
          ]
        },
        {
          subtitle: "Data Storage",
          items: [
            "Health information stored in HIPAA-compliant servers",
            "Data backup and disaster recovery procedures",
            "Automatic data retention and deletion schedules",
            "Separate storage systems for different data types"
          ]
        }
      ]
    }
  ];

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
                Privacy <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">
                Your privacy and data security are our highest priorities. Learn how we protect 
                and handle your personal and health information.
              </p>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-4 text-off-white">
                  <Clock className="h-6 w-6" />
                  <span className="font-inter">Last Updated: January 15, 2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl mb-12">
                <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
                <p className="text-gray-700 font-inter leading-relaxed mb-4">
                  HealthSpan360 is committed to protecting the privacy and security of your personal and health information. 
                  As a provider of diagnostic services and research materials to licensed healthcare professionals, we understand 
                  the critical importance of maintaining the confidentiality of all information entrusted to us.
                </p>
                <p className="text-gray-700 font-inter leading-relaxed">
                  This Privacy Policy explains how we collect, use, share, and protect your information when you use our services, 
                  whether as a healthcare provider, patient, or visitor to our website. We comply with all applicable privacy laws, 
                  including HIPAA, state privacy regulations, and other relevant healthcare data protection requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Sections */}
        {sections.map((section, index) => (
          <section key={section.title} className={index % 2 === 0 ? "py-16 bg-gray-50" : "py-16 bg-white"}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-gradient-primary text-white p-3 rounded-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-poppins font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-8">
                  {section.content.map((subsection, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">{subsection.subtitle}</h3>
                      <ul className="space-y-3">
                        {subsection.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start space-x-3">
                            <div className="bg-magenta-100 text-magenta-600 rounded-full p-1 mt-1 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-current"></div>
                            </div>
                            <span className="text-gray-700 font-inter">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Your Rights Section */}
        <section className="py-16 bg-gradient-secondary text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-poppins font-bold mb-8 text-center">Your Privacy Rights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Access", description: "Request copies of your personal information" },
                  { title: "Correction", description: "Request corrections to inaccurate information" },
                  { title: "Deletion", description: "Request deletion of your personal information" },
                  { title: "Portability", description: "Request transfer of your data to another provider" },
                  { title: "Restriction", description: "Request limitations on how we use your information" },
                  { title: "Objection", description: "Object to certain uses of your personal information" }
                ].map((right, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-xl">
                    <h3 className="font-poppins font-semibold text-lg mb-2">{right.title}</h3>
                    <p className="text-white/80 font-inter text-sm">{right.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-6">Questions About Your Privacy?</h2>
              <p className="text-xl text-gray-600 font-inter mb-8 max-w-2xl mx-auto">
                Our Privacy Officer is available to answer any questions about this policy or your privacy rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@hs360.co"
                  className="inline-flex items-center bg-gradient-primary hover:from-magenta-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold transition-all"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  privacy@hs360.co
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-poppins font-semibold transition-colors"
                >
                  Contact Form
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

export default PrivacyPolicy;