import React from 'react';
import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <section className="relative h-[60vh] flex items-center">
      <div
        className="absolute inset-0 z-0 tech-grid"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-indigo-900/20" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">{description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;