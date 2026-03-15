import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Package, Shield, Truck } from 'lucide-react';
import SEO from '../components/SEO';

const Store = () => {
  return (
    <>
      <SEO
        title="Store | HealthSpan360"
        description="Shop HealthSpan360 products and services. Browse our selection of health and wellness offerings."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-magenta-600 via-magenta-500 to-pink-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ShoppingBag className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                HealthSpan360 Store
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Browse our selection of health and wellness products
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: <Package className="h-8 w-8" />, title: 'Quality Products', description: 'Carefully curated health and wellness products' },
                { icon: <Shield className="h-8 w-8" />, title: 'Trusted & Verified', description: 'All products meet our rigorous quality standards' },
                { icon: <Truck className="h-8 w-8" />, title: 'Fast Shipping', description: 'Quick and reliable delivery to your door' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-magenta-100 text-magenta-600 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon Content */}
            <motion.div
              className="text-center py-16 bg-gray-50 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-magenta-500" />
              <h2 className="text-2xl font-poppins font-bold text-gray-900 mb-4">
                Products Coming Soon
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                We're currently stocking our store with the best health and wellness products. Check back soon for our full product lineup.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Store;
