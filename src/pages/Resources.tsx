import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Download, Book, Shield, HelpCircle, ExternalLink } from 'lucide-react';
import CalendlySection from '../components/CalendlySection';
import SEO from '../components/SEO';

const Resources = () => {
  const resources = [
    {
      category: "Test Menus & Protocols",
      items: [
        { title: "Comprehensive Genetic Testing Panel", type: "PDF", size: "2.5 MB" },
        { title: "Micronutrient Testing Menu", type: "PDF", size: "1.8 MB" },
        { title: "Clinical Laboratory Services Guide", type: "PDF", size: "3.2 MB" },
        { title: "Sample Collection Protocols", type: "PDF", size: "1.2 MB" }
      ]
    },
    {
      category: "Compliance Documentation",
      items: [
        { title: "Peptide Compliance Guidelines", type: "PDF", size: "2.1 MB" },
        { title: "CLIA & CAP Certifications", type: "PDF", size: "1.5 MB" },
        { title: "Quality Assurance Protocols", type: "PDF", size: "2.8 MB" },
        { title: "Regulatory Compliance Manual", type: "PDF", size: "4.2 MB" }
      ]
    },
    {
      category: "Educational Materials",
      items: [
        { title: "Pharmacogenomics in Practice", type: "PDF", size: "3.5 MB" },
        { title: "Peptide Science Overview", type: "PDF", size: "2.9 MB" },
        { title: "Micronutrient Deficiency Guide", type: "PDF", size: "2.2 MB" },
        { title: "Personalized Medicine Handbook", type: "PDF", size: "5.1 MB" }
      ]
    }
  ];

  const faqs = [
    {
      question: "What qualifications are required to order peptides?",
      answer: "Peptides are available exclusively to licensed healthcare practitioners including MDs, DOs, NPs, PharmDs, chiropractors, and certified wellness providers. All peptide products are for research use only and not intended for human consumption."
    },
    {
      question: "How accurate are your genetic tests?",
      answer: "Our genetic testing maintains a 99.9% accuracy rate. All testing is performed in CLIA-certified, CAP-accredited laboratories using state-of-the-art equipment and validated methodologies."
    },
    {
      question: "What is the turnaround time for test results?",
      answer: "Most genetic and micronutrient tests are completed within 7-10 business days from sample receipt. Rush processing is available for urgent cases."
    },
    {
      question: "Do you provide direct-to-consumer testing?",
      answer: "No, all testing must be ordered through a licensed healthcare provider. This ensures proper interpretation of results and appropriate medical guidance."
    },
    {
      question: "What insurance coverage is available?",
      answer: "Coverage varies by insurance provider and test type. We recommend checking with your insurance company and healthcare provider about coverage options."
    },
    {
      question: "How do I become a provider partner?",
      answer: "Licensed healthcare practitioners can apply through our provider portal. The application includes verification of credentials and practice information."
    }
  ];

  const policies = [
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      updated: "Last updated: January 2025",
      link: "/privacy"
    },
    {
      title: "Terms of Service",
      description: "Terms and conditions for using our services",
      updated: "Last updated: January 2025",
      link: "/terms"
    }
  ];

  return (
    <>
    <SEO
      title="Resources - HealthSpan360"
      description="Access test menus, compliance documentation, educational materials, and FAQs. Comprehensive resources for healthcare providers using HealthSpan360 services."
      keywords="healthcare resources, genetic testing protocols, peptide compliance, laboratory documentation, provider resources, medical testing guides"
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Resources & <span className="bg-gradient-primary bg-clip-text text-transparent">Support</span>
            </h1>
            <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed">
              Access comprehensive documentation, educational materials, and support resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Framework Section */}
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
              Compliance <span className="bg-gradient-primary bg-clip-text text-transparent">Framework</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Our commitment to regulatory compliance, quality standards, and ethical practices
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-magenta-500 mr-3" />
                <h3 className="text-2xl font-poppins font-bold text-gray-900">Laboratory Accreditation</h3>
              </div>
              <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
                <p>
                  All HealthSpan360 laboratory services are performed in facilities that meet or exceed the highest industry standards for quality and compliance.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong>CLIA Certified:</strong> Clinical Laboratory Improvement Amendments certification ensures our labs meet federal regulatory standards for laboratory testing</li>
                  <li><strong>CAP Accredited:</strong> College of American Pathologists accreditation demonstrates our commitment to the highest standards of excellence in laboratory medicine</li>
                  <li><strong>State Licensed:</strong> Fully licensed to operate in all applicable jurisdictions</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-magenta-500 mr-3" />
                <h3 className="text-2xl font-poppins font-bold text-gray-900">Peptide Compliance</h3>
              </div>
              <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
                <p>
                  Our peptide products adhere to strict regulatory guidelines and are distributed exclusively through licensed healthcare practitioners.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong>Research Use Only:</strong> All peptides are clearly labeled for research use only and are not intended for human consumption</li>
                  <li><strong>Licensed Practitioners Only:</strong> Products are available exclusively to licensed healthcare professionals</li>
                  <li><strong>Quality Assurance:</strong> Every batch undergoes rigorous testing for purity, potency, and sterility</li>
                  <li><strong>Proper Documentation:</strong> Complete chain of custody and documentation for all products</li>
                  <li><strong>Regulatory Monitoring:</strong> Continuous monitoring of evolving FDA guidance and regulatory requirements</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-magenta-500 mr-3" />
                <h3 className="text-2xl font-poppins font-bold text-gray-900">Data Privacy & Security</h3>
              </div>
              <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
                <p>
                  We maintain the highest standards for protecting patient information and genetic data.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong>HIPAA Compliance:</strong> Full compliance with Health Insurance Portability and Accountability Act requirements</li>
                  <li><strong>Data Encryption:</strong> Industry-standard encryption for data in transit and at rest</li>
                  <li><strong>Access Controls:</strong> Strict role-based access controls and authentication procedures</li>
                  <li><strong>Secure Infrastructure:</strong> SOC 2 Type II compliant data centers and cloud infrastructure</li>
                  <li><strong>Genetic Privacy:</strong> Adherence to GINA (Genetic Information Nondiscrimination Act) protections</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-magenta-500 mr-3" />
                <h3 className="text-2xl font-poppins font-bold text-gray-900">Quality Management System</h3>
              </div>
              <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
                <p>
                  Our quality management system ensures consistent, reliable results and continuous improvement.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong>Standard Operating Procedures:</strong> Comprehensive SOPs for all testing and operational procedures</li>
                  <li><strong>Proficiency Testing:</strong> Regular participation in external proficiency testing programs</li>
                  <li><strong>Internal Audits:</strong> Scheduled internal quality audits and process reviews</li>
                  <li><strong>Staff Training:</strong> Ongoing training and competency assessment for all laboratory personnel</li>
                  <li><strong>Equipment Validation:</strong> Regular calibration, maintenance, and validation of all testing equipment</li>
                  <li><strong>Document Control:</strong> Comprehensive documentation and version control systems</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-magenta-500 mr-3" />
                <h3 className="text-2xl font-poppins font-bold text-gray-900">Ethical Standards</h3>
              </div>
              <div className="space-y-4 text-gray-700 font-inter leading-relaxed">
                <p>
                  We are committed to the highest ethical standards in all aspects of our business.
                </p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong>Informed Consent:</strong> Requirement for informed consent from all patients undergoing testing</li>
                  <li><strong>Transparent Communication:</strong> Clear, accurate communication about test capabilities and limitations</li>
                  <li><strong>Result Integrity:</strong> Never altering or misrepresenting test results</li>
                  <li><strong>Scientific Validity:</strong> Only offering tests with established scientific and clinical validity</li>
                  <li><strong>Continuing Education:</strong> Supporting providers with ongoing education about appropriate test utilization</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-dark text-white p-8 rounded-2xl"
            >
              <div className="text-center">
                <h3 className="text-2xl font-poppins font-bold mb-4">Questions About Compliance?</h3>
                <p className="text-white/80 font-inter mb-6 max-w-2xl mx-auto">
                  Our compliance team is available to answer any questions about our quality standards,
                  certifications, or regulatory framework.
                </p>
                <a
                  href="mailto:compliance@hs360.co"
                  className="inline-block bg-white text-magenta-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-poppins font-semibold transition-colors"
                >
                  Contact Compliance Team
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Common questions about our services and processes
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 text-magenta-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 font-inter leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
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
              Policies & <span className="bg-gradient-primary bg-clip-text text-transparent">Legal</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
              Important legal documents and policy information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl hover:shadow-lg transition-shadow group"
              >
                <Link to={policy.link} className="block">
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="h-8 w-8 text-magenta-500" />
                    <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-magenta-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3 group-hover:text-magenta-600 transition-colors">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 font-inter mb-4">{policy.description}</p>
                  <p className="text-sm text-gray-500 font-inter">{policy.updated}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-24 bg-gradient-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Need Additional Support?
            </h2>
            <p className="text-xl text-white/80 font-inter mb-8">
              Our support team is available to assist healthcare providers 
              and answer any questions about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:18774647360"
                className="bg-white text-magenta-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors"
              >
                Call Support: 1-877-GOHS360 (1-877-464-7360)
              </a>
              <a
                href="mailto:support@hs360.co"
                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all"
              >
                Email Support
              </a>
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

export default Resources;