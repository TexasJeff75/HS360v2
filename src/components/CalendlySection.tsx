import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

const CalendlySection = () => {
  return (
    <section className="py-16 bg-gradient-primary">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.1 }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="bg-white/20 p-4 rounded-2xl">
              <Calendar className="h-12 w-12" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our team to discuss how HealthSpan360 
            can enhance your practice and improve patient outcomes.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center space-x-2 text-white/90"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Clock className="h-5 w-5" />
              <span className="font-inter">30-minute call</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center space-x-2 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Users className="h-5 w-5" />
              <span className="font-inter">Expert consultation</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center space-x-2 text-white/90"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-5 w-5" />
              <span className="font-inter">Flexible scheduling</span>
            </motion.div>
          </motion.div>
          
          <div className="space-y-4">
            <motion.a
              href="https://calendly.com/healthspan360/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-magenta-600 hover:bg-off-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Consultation
            </motion.a>
            <p className="text-sm text-white/70 font-inter">
              Or call us directly at{' '}
              <motion.a 
                href="tel:1-800-HEALTHSPAN" 
                className="text-gold-300 hover:text-gold-500 font-semibold"
                whileHover={{ scale: 1.05 }}
                animate={{
                  textShadow: [
                    "0 0 5px rgba(255, 195, 0, 0.5)",
                    "0 0 15px rgba(255, 195, 0, 0.8)",
                    "0 0 5px rgba(255, 195, 0, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                1-800-HEALTHSPAN
              </motion.a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendlySection;