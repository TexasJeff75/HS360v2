import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Activity, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/providers', label: 'For Providers' },
    { path: '/patients', label: 'For Patients' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-3">
            <motion.img 
              src="/Logo_web.webp" 
              alt="HealthSpan360 Logo" 
              className="h-10 w-auto"
              whileHover={{ 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            />
            <div>
              <motion.span 
                className="text-2xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent block"
                whileHover={{
                  textShadow: "0 0 8px rgba(214, 0, 164, 0.5)"
                }}
              >
                HealthSpan360
              </motion.span>
              <span className="text-xs font-poppins text-cool-gray -mt-1 block">
                Turning Insight Into Impact
              </span>
            </div>
          </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-magenta-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
              </motion.div>
            ))}

            {/* Shop Button */}
            <motion.a
              href="https://store.hs360.co"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2 rounded-lg font-semibold text-white bg-gradient-primary hover:shadow-lg hover:shadow-magenta-500/50 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Shop</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden border-t border-gray-200"
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          {isMenuOpen && (
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-magenta-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                </motion.div>
              ))}

              {/* Mobile Shop Button */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <a
                  href="https://store.hs360.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-lg font-semibold text-white bg-gradient-primary hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Shop</span>
                </a>
              </motion.div>
            </nav>
          )}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;