import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TestTube2, CheckCircle, ArrowRight, ChevronDown, Shield, Microscope, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalendlySection from '../../components/CalendlySection';
import SEO from '../../components/SEO';

const AllergyTestingDetail = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const allergenCategories = [
    {
      title: "Grass Pollen",
      icon: "🌾",
      count: 11,
      examples: ["Timothy grass", "Bermuda grass", "Common reed", "Rye pollen"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tree Pollen",
      icon: "🌳",
      count: 21,
      examples: ["Birch", "Oak", "Olive", "Cypress", "Ash", "Alder"],
      gradient: "from-lime-500 to-green-600"
    },
    {
      title: "Weed Pollen",
      icon: "🌿",
      count: 17,
      examples: ["Ragweed", "Mugwort", "Wall pellitory", "Russian thistle"],
      gradient: "from-yellow-500 to-green-500"
    },
    {
      title: "Mites",
      icon: "🔬",
      count: 22,
      examples: ["House dust mites", "Storage mites", "Tropical mites"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Animal Dander & Epithelia",
      icon: "🐕",
      count: 25,
      examples: ["Cat", "Dog", "Horse", "Rabbit", "Mouse", "Guinea pig"],
      gradient: "from-orange-500 to-amber-500"
    },
    {
      title: "Microorganisms",
      icon: "🦠",
      count: 14,
      examples: ["Alternaria", "Aspergillus", "Cladosporium", "Penicillium"],
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      title: "Insects & Venoms",
      icon: "🐝",
      count: 19,
      examples: ["Honeybee", "Wasp", "Cockroach", "Fire ant"],
      gradient: "from-yellow-400 to-amber-600"
    },
    {
      title: "Fruits",
      icon: "🍎",
      count: 21,
      examples: ["Apple", "Peach", "Kiwi", "Banana", "Strawberry", "Mango"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Grains",
      icon: "🌾",
      count: 16,
      examples: ["Wheat", "Barley", "Rye", "Oat", "Corn"],
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      title: "Legumes",
      icon: "🥜",
      count: 18,
      examples: ["Peanut", "Soy", "Lentil", "Pea", "Chickpea"],
      gradient: "from-brown-500 to-amber-700"
    },
    {
      title: "Nuts & Seeds",
      icon: "🌰",
      count: 36,
      examples: ["Hazelnut", "Walnut", "Cashew", "Almond", "Sesame", "Pistachio"],
      gradient: "from-stone-600 to-amber-800"
    },
    {
      title: "Spices",
      icon: "🌶️",
      count: 2,
      examples: ["Mustard"],
      gradient: "from-red-600 to-orange-600"
    },
    {
      title: "Vegetables",
      icon: "🥕",
      count: 10,
      examples: ["Celery", "Tomato", "Potato", "Garlic", "Onion"],
      gradient: "from-green-600 to-lime-600"
    },
    {
      title: "Egg",
      icon: "🥚",
      count: 7,
      examples: ["Egg white proteins", "Egg yolk proteins"],
      gradient: "from-yellow-200 to-amber-300"
    },
    {
      title: "Milk",
      icon: "🥛",
      count: 13,
      examples: ["Cow's milk", "Goat's milk", "Sheep's milk"],
      gradient: "from-blue-200 to-cyan-300"
    },
    {
      title: "Seafood",
      icon: "🦐",
      count: 29,
      examples: ["Shrimp", "Cod", "Salmon", "Tuna", "Crab", "Squid"],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Meat",
      icon: "🥩",
      count: 14,
      examples: ["Beef", "Pork", "Chicken", "Lamb", "Turkey"],
      gradient: "from-red-700 to-rose-800"
    },
    {
      title: "Others",
      icon: "⚡",
      count: 8,
      examples: ["Latex", "Weeping fig"],
      gradient: "from-slate-600 to-gray-700"
    }
  ];

  const testingFeatures = [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Molecular & Extract Analysis",
      description: "Tests both specific allergen molecules and complete extracts for comprehensive profiling"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "IgE Antibody Detection",
      description: "Measures specific IgE antibodies to identify true allergic sensitivities"
    },
    {
      icon: <TestTube2 className="h-8 w-8" />,
      title: "Blood Sample Testing",
      description: "Simple blood draw for comprehensive allergen screening"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Clinical-Grade Accuracy",
      description: "MacroArray Diagnostics ALEX3 technology for precise results"
    }
  ];

  const benefits = [
    "Personalized allergy treatment plans",
    "Precise allergen identification",
    "Reduced trial and error in management",
    "Comprehensive environmental coverage",
    "Complete food allergen panel",
    "Molecular-level diagnostics",
    "Cross-reactivity insights",
    "Improved patient outcomes"
  ];

  return (
    <>
      <SEO
        title="Allergy Testing - ALEX3 Panel - HealthSpan360"
        description="Comprehensive allergy testing with ALEX3 panel testing 295+ allergens including environmental and food allergens using molecular and extract-based IgE antibody detection."
        keywords="allergy testing, ALEX3, allergen panel, IgE testing, food allergies, environmental allergies, molecular diagnostics, comprehensive allergy testing, 295 allergens"
      />
      <div className="pt-20">
        <section className="bg-gradient-dark text-off-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold mb-6">
                Allergy <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Testing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cool-gray font-inter leading-relaxed mb-8">
                ALEX3 Comprehensive Allergen Panel - Testing 295+ Environmental and Food Allergens
              </p>
              <div className="inline-flex items-center bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                <span className="text-amber-300 font-poppins font-bold text-lg">295+ Allergens Tested</span>
              </div>
            </motion.div>
          </div>
        </section>

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
                About <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">ALEX3</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                The ALEX3 Allergy Xplorer is one of the most comprehensive allergy testing panels available,
                analyzing over 295 allergen extracts and molecular components using advanced microarray technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50/20 p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-3 rounded-xl mb-4 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 font-inter text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Allergen <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Comprehensive testing across 18 major allergen categories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allergenCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div
                    className={`bg-gradient-to-r ${category.gradient} p-6 cursor-pointer`}
                    onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-4xl">{category.icon}</span>
                        <div>
                          <h3 className="text-xl font-poppins font-bold text-white">{category.title}</h3>
                          <p className="text-white/90 font-inter text-sm">{category.count} allergens</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedCategory === category.title ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedCategory === category.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                          <h4 className="font-poppins font-semibold text-gray-700 mb-3 text-sm">Examples include:</h4>
                          <ul className="space-y-2">
                            {category.examples.map((example, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-600 font-inter text-sm">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6">
                Clinical Benefits
              </h2>
              <p className="text-xl text-white/90 font-inter max-w-3xl mx-auto">
                Comprehensive allergen profiling for improved patient management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur p-6 rounded-xl"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0 mt-1" />
                    <span className="text-white font-inter">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Testing <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Simple blood test with comprehensive results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Sample Collection", description: "Simple blood draw at any certified collection site" },
                { step: 2, title: "Laboratory Analysis", description: "ALEX3 microarray technology detects IgE antibodies" },
                { step: 3, title: "Molecular Profiling", description: "Both extracts and molecular components analyzed" },
                { step: 4, title: "Detailed Report", description: "Comprehensive results with clinical recommendations" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-poppins font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 font-inter">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50/20 rounded-3xl p-8 md:p-12 border border-amber-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-6">
                    What Sets ALEX3 Apart?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Tests both allergen extracts and molecular components",
                      "Identifies primary sensitizations vs. cross-reactivities",
                      "Covers environmental and food allergens in one test",
                      "Uses MacroArray Diagnostics advanced microarray technology",
                      "Provides actionable clinical insights for treatment"
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 font-inter text-lg">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mb-4">
                      <TestTube2 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-2">Ready to Test?</h3>
                    <p className="text-gray-600 font-inter">Schedule a consultation to learn more about ALEX3 testing</p>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all transform hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CalendlySection />
    </>
  );
};

export default AllergyTestingDetail;
