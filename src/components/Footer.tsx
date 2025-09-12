import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Shield, Heart, Award, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyInfo = [
    { name: 'About', href: '/about' },
    { name: 'For Providers', href: '/providers' },
    { name: 'For Patients', href: '/patients' },
    { name: 'Resources', href: '/resources' },
  ];

  const services = [
    { name: 'Genetic Testing', href: '/services/genetic-testing' },
    { name: 'Clinical Lab Services', href: '/services/clinical-lab-services' },
    { name: 'Micronutrient Testing', href: '/services/micronutrient-testing' },
    { name: 'Peptides', href: '/services/peptides' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      text: '1-800-HEALTHSPAN',
      href: 'tel:1-800-HEALTHSPAN'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      text: 'info@healthspan360.com',
      href: 'mailto:info@healthspan360.com'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: 'Licensed facilities nationwide',
      href: null
    },
  ];

  const businessHours = [
    'Monday - Friday: 8:00 AM - 8:00 PM EST',
    'Saturday: 9:00 AM - 5:00 PM EST',
    'Sunday: Emergency support only'
  ];

  const certifications = [
    { icon: <Shield className="h-6 w-6" />, text: 'CLIA Certified' },
    { icon: <Award className="h-6 w-6" />, text: 'CAP Accredited' },
    { icon: <Heart className="h-6 w-6" />, text: 'HIPAA Compliant' },
    { icon: <Users className="h-6 w-6" />, text: 'Provider Network' },
  ];

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <motion.picture
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <source srcSet="/logo.webp" type="image/webp" />
                <motion.img 
                  src="/logo.png" 
                  alt="HealthSpan360 Logo" 
                  className="h-10 w-auto"
                />
              </motion.picture>
            </Link>
            <p className="text-gray-300 font-inter leading-relaxed">
              Advancing personalized medicine through cutting-edge diagnostics and therapeutic solutions.
            </p>
            <div className="space-y-3">
              <h4 className="font-poppins font-semibold text-white mb-3">Company</h4>
              {companyInfo.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-300 hover:text-magenta-300 transition-colors font-inter"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-white">Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block text-gray-300 hover:text-magenta-300 transition-colors font-inter"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            {/* Business Hours */}
            <div className="mt-8">
              <h4 className="font-poppins font-semibold text-white mb-3 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-magenta-400" />
                Business Hours
              </h4>
              <div className="space-y-2">
                {businessHours.map((hours, index) => (
                  <p key={index} className="text-sm text-gray-300 font-inter">
                    {hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-white">Contact</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-magenta-400 mt-1">
                    {contact.icon}
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-magenta-300 transition-colors font-inter"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 font-inter">{contact.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-magenta-600/20 to-orange-600/20 p-4 rounded-lg border border-magenta-500/30">
              <h5 className="font-poppins font-semibold text-white mb-2">24/7 Emergency Support</h5>
              <p className="text-sm text-gray-300 font-inter mb-3">
                Critical patient care questions
              </p>
              <a
                href="tel:1-800-HEALTHSPAN"
                className="inline-flex items-center text-magenta-300 hover:text-magenta-200 font-inter font-medium"
              >
                <Phone className="h-4 w-4 mr-2" />
                1-800-HEALTHSPAN
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;