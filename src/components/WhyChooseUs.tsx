import React from 'react';
import { motion } from 'framer-motion';

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  reasons: Reason[];
}

const WhyChooseUs = ({ reasons }: WhyChooseUsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg"
        >
          <div className="text-indigo-400 mb-4">{reason.icon}</div>
          <h4 className="text-xl font-bold mb-2 glow-text">{reason.title}</h4>
          <p className="text-gray-300">{reason.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default WhyChooseUs;