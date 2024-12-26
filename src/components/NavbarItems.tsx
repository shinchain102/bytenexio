import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface NavbarItemsProps {
  mobile?: boolean;
  onItemClick?: () => void;
  services: Array<{ name: string; path: string }>;
  servicesOpen: boolean;
  setServicesOpen: (open: boolean) => void;
}

const NavbarItems = ({ 
  mobile = false, 
  onItemClick,
  services,
  servicesOpen,
  setServicesOpen 
}: NavbarItemsProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ul className={`flex text-base font-normal ${
      mobile 
        ? 'flex-col items-center space-y-6 w-full' 
        : 'items-center space-x-8'
    }`}>
      <motion.li
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        <Link
          to="/"
          onClick={onItemClick}
          className="text-white hover:text-indigo-400 transition-colors"
        >
          Home
        </Link>
      </motion.li>
      <motion.li
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/about"
          onClick={onItemClick}
          className="text-white hover:text-indigo-400 transition-colors"
        >
          About
        </Link>
      </motion.li>
      <motion.li
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="text-white hover:text-indigo-400 transition-colors flex items-center w-full"
        >
          Services
          <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
        </button>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: 10 }}
            className={mobile 
              ? "mt-2 w-full space-y-2" 
              : "absolute left-0 mt-2 w-64 rounded-lg cyber-border backdrop-blur-lg bg-gray-900/95"
            }
          >
            <div className={mobile ? "space-y-4 py-2" : "py-2"}>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={onItemClick}
                  className={`block py-2 text-base font-normal text-gray-300 hover:text-indigo-400 transition-colors ${
                    mobile 
                      ? "text-center opacity-80 hover:opacity-100" 
                      : "px-4 hover:bg-gray-800/50"
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.li>
      <motion.li
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/portfolio"
          onClick={onItemClick}
          className="text-white hover:text-indigo-400 transition-colors"
        >
          Portfolio
        </Link>
      </motion.li>
      <motion.li
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/blog"
          onClick={onItemClick}
          className="text-white hover:text-indigo-400 transition-colors"
        >
          Blog
        </Link>
      </motion.li>
      <motion.li
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/contact"
          onClick={onItemClick}
          className="text-white hover:text-indigo-400 transition-colors"
        >
          Contact
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavbarItems;