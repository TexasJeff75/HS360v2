import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const CalendlySection = () => {
  return (
    <section className="py-16 bg-gradient-primary">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Calendar className="h-12 w-12" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">Schedule a consultation with our team to discuss how HealthSpan360 can enhance your practice and improve patient outcomes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-white/90"><Clock className="h-5 w-5" /><span className="font-inter">30-minute call</span></div>
            <div className="flex items-center justify-center space-x-2 text-white/90"><Users className="h-5 w-5" /><span className="font-inter">Expert consultation</span></div>
            <div className="flex items-center justify-center space-x-2 text-white/90"><Calendar className="h-5 w-5" /><span className="font-inter">Flexible scheduling</span></div>
          </div>
          <div className="space-y-4">
            <a href="https://calendly.com/healthspan360/consultation" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-magenta-600 hover:bg-off-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-colors shadow-lg">Schedule Your Consultation</a>
            <p className="text-sm text-white/70 font-inter">Or call us directly at{' '}<a href="tel:877-GO-HS360" className="text-gold-300 hover:text-gold-500 font-semibold">877-GO-HS360</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;