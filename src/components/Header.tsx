import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    {
      name: 'Services',
      href: '#',
      current: location.pathname.startsWith('/services'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'Genetic Testing', href: '/services/genetic-testing' },
        { name: 'Clinical Lab Services', href: '/services/clinical-lab-services' },
        { name: 'Micronutrient Testing', href: '/services/micronutrient-testing' },
        { name: 'Peptides', href: '/services/peptides' },
      ]
    },
    { name: 'For Providers', href: '/providers', current: location.pathname === '/providers' },
    { name: 'For Patients', href: '/patients', current: location.pathname === '/patients' },
    { name: 'Resources', href: '/resources', current: location.pathname === '/resources' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img 
              src="/logo.png" 
              alt="HealthSpan360 Logo" 
              className="h-10 w-auto"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={handleServicesClick}
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                        item.current
                          ? 'text-magenta-600'
                          : isScrolled
                          ? 'text-gray-700 hover:text-magenta-600'
                          : 'text-white hover:text-magenta-200'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-magenta-50 hover:text-magenta-600 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-magenta-600'
                        : isScrolled
                        ? 'text-gray-700 hover:text-magenta-600'
                        : 'text-white hover:text-magenta-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg border border-gray-100 mt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={handleServicesClick}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-magenta-50 hover:text-magenta-600 rounded-md text-sm font-medium transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-magenta-50 hover:text-magenta-600 rounded-md transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        item.current
                          ? 'text-magenta-600 bg-magenta-50'
                          : 'text-gray-700 hover:bg-magenta-50 hover:text-magenta-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;