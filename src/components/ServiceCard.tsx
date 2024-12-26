import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg group hover:bg-gray-800/60 transition-all"
    >
      <div className="text-indigo-400 mb-4 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 group-hover:translate-x-2 transition-transform"
      >
        Learn more
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;