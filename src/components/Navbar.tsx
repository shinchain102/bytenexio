import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarLogo from './NavbarLogo';
import NavbarItems from './NavbarItems';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Web Design', path: '/services/web-design' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Performance Marketing', path: '/services/performance-marketing' },
    { name: 'WhatsApp Marketing', path: '/services/whatsapp-marketing' },
    { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavbarLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavbarItems 
              services={services}
              servicesOpen={servicesOpen}
              setServicesOpen={setServicesOpen}
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-indigo-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30 
            }}
            className="fixed inset-0 z-50 md:hidden bg-gradient-to-b from-gray-900/99 via-gray-900/[0.97] to-gray-900/99 backdrop-blur-lg"
          >
            <div className="relative h-full">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-800/50 text-white hover:text-indigo-400 transition-colors"
              >
                <X className="h-6 w-6" />
              </motion.button>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="flex flex-col items-center justify-center h-full px-6"
              >
                <div className="w-full max-w-xs mx-auto">
                  <NavbarItems
                    mobile
                    onItemClick={() => setIsOpen(false)}
                    services={services}
                    servicesOpen={servicesOpen}
                    setServicesOpen={setServicesOpen}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;