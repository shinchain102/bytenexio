import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceFeatureProps {
  title: string;
  description: string;
  features: string[];
  image?: string;
  reversed?: boolean;
}

const ServiceFeature = ({ title, description, features, image, reversed = false }: ServiceFeatureProps) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <motion.div 
        initial={{ opacity: 0, x: reversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <h3 className="text-2xl font-bold mb-4 glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          {title}
        </h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <Check className="h-5 w-5 text-indigo-400" />
              <span className="text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      {image && (
        <motion.div
          initial={{ opacity: 0, x: reversed ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="cyber-border rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServiceFeature;