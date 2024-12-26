import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ExpertiseCard = ({ title, description, icon, delay = 0 }: ExpertiseCardProps) => {
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
      <div className="inline-flex items-center text-indigo-400 group-hover:translate-x-2 transition-all">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;