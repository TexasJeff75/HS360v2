import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Package, AlertTriangle, Shield, Mail, Clock, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../components/CalendlySection';

const RefundPolicy = () => {
  const nonReturnableItems = [
    {
      title: "Research-use-only peptides",
      description: "Due to safety and compliance, peptides and related compounds cannot be returned or refunded once shipped.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Diagnostic test kits",
      description: "Genetic, micronutrient, and wellness kits are non-refundable once dispatched. If defective, a replacement kit may be issued.",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Digital products",
      description: "Gift cards, downloadable products, and promotional items are non-refundable.",
      icon: <CheckCircle className="h-6 w-6" />
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
                Refund <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">
                We strive to ensure your satisfaction with every purchase. 
                Please review our refund and return terms below.
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

        {/* Company Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-8 rounded-2xl">
                <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-4">HealthSpan360 LLC</h2>
                <p className="text-lg text-gray-700 font-inter">
                  At HealthSpan360 LLC, we strive to ensure your satisfaction with every purchase. 
                  Please review our refund and return terms below:
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* General Policy Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-primary text-white p-3 rounded-lg">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-poppins font-bold text-gray-900">1. General Policy</h2>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-magenta-100 text-magenta-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                    </div>
                    <span className="text-gray-700 font-inter">Refunds and returns are accepted only in accordance with this policy.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-magenta-100 text-magenta-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                    </div>
                    <span className="text-gray-700 font-inter">Products must be unused, unopened, and in their original packaging to be eligible.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-magenta-100 text-magenta-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                    </div>
                    <span className="text-gray-700 font-inter">Certain items, such as research-use-only peptides and perishable lab kits, may not be eligible for return once shipped.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Non-Returnable Items Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-primary text-white p-3 rounded-lg">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-poppins font-bold text-gray-900">2. Non-Returnable Items</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {nonReturnableItems.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-50 to-amber-50/20 p-8 rounded-2xl border border-red-100">
                    <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-6 w-fit">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-poppins font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 font-inter text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              
              {/* Section 3 - Defective or Damaged Products */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">3. Defective or Damaged Products</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 font-inter">
                    If you receive a defective or damaged item, please notify us within{' '}
                    <span className="font-semibold text-blue-700">7 business days</span> at{' '}
                    <a href="mailto:support@hs360.co" className="text-magenta-500 hover:text-magenta-600 font-semibold">
                      support@HS360.com
                    </a>
                    {' '}with your order number and photos. Approved cases may be replaced or refunded.
                  </p>
                </div>
              </motion.div>

              {/* Section 4 - Refunds */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">4. Refunds (if applicable)</h3>
                <div className="space-y-4">
                  <p className="text-gray-700 font-inter">
                    Once your return is received and inspected, we will notify you of approval or rejection.
                  </p>
                  <p className="text-gray-700 font-inter">
                    Approved refunds will be processed to your original payment method within{' '}
                    <span className="font-semibold text-green-700">5–10 business days</span>.
                  </p>
                </div>
              </motion.div>

              {/* Section 5 - Late or Missing Refunds */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">5. Late or Missing Refunds</h3>
                <p className="text-gray-700 font-inter">
                  If you haven't received your refund, first check with your bank or credit card company. 
                  If you still need assistance, contact us at{' '}
                  <a href="mailto:support@hs360.co" className="text-magenta-500 hover:text-magenta-600 font-semibold">
                    support@HS360.com
                  </a>.
                </p>
              </motion.div>

              {/* Section 6 - Exchanges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">6. Exchanges</h3>
                <p className="text-gray-700 font-inter">
                  We replace items only if defective or damaged. If you need to exchange an item for the same product, 
                  email us first for instructions.
                </p>
              </motion.div>

              {/* Section 7 - Shipping Returns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Truck className="h-6 w-6 text-orange-500" />
                  <h3 className="text-2xl font-poppins font-bold text-gray-900">7. Shipping Returns</h3>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-orange-50/20 p-6 rounded-xl mb-6">
                  <h4 className="font-poppins font-semibold text-gray-900 mb-3">Return Address:</h4>
                  <div className="text-gray-700 font-inter">
                    <p>HealthSpan360 LLC</p>
                    <p>16922 Telge Rd., Suite 2</p>
                    <p>Cypress, TX 77429</p>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 text-sm">
                    <strong>Important:</strong> You are responsible for return shipping costs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-poppins font-bold mb-6">Questions About Returns or Refunds?</h2>
              <p className="text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
                Our customer service team is here to help with any questions about our refund policy or return process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@hs360.co"
                  className="inline-flex items-center bg-white text-magenta-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  support@HS360.com
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all"
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

export default RefundPolicy;