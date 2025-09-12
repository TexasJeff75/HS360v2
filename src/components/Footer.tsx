import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-500 text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="HealthSpan360 Logo" 
                className="h-8 w-auto"
              />
              <div>
                <span className="text-xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent block">
                  HealthSpan360
                </span>
                <span className="text-xs font-poppins text-cool-gray block">
                  Turning Insight Into Impact
                </span>
              </div>
            </Link>
            <p className="text-cool-gray text-sm font-inter">
              Bridging cutting-edge science with practical, provider-driven solutions for better health outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold mb-4 text-off-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Genetic Testing</Link></li>
              <li><Link to="/services" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Micronutrient Testing</Link></li>
              <li><Link to="/services" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Peptides</Link></li>
              <li><Link to="/services" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Clinical Lab Services</Link></li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="font-poppins font-semibold mb-4 text-off-white">For Professionals</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/providers" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Provider Onboarding</Link></li>
              <li><Link to="/providers" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Partnership Programs</Link></li>
              <li><Link to="/resources" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Test Menus</Link></li>
              <li><Link to="/resources" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Compliance Resources</Link></li>
              <li><Link to="/refund-policy" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold mb-4 text-off-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-cool-gray font-inter">1-800-HEALTHSPAN</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <a href="mailto:info@hs360.co" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">
                  info@hs360.co
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                <span className="text-cool-gray font-inter">
                  Corporate Office<br />
                  Available upon request
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-600 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-cool-gray font-inter">
              © 2025 HealthSpan360. All rights reserved. For research and professional use only.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/privacy" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">
                Terms of Service
              </Link>
              <Link to="/resources" className="text-cool-gray hover:text-orange-500 transition-colors font-inter">
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;