import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessTimelineProps {
  steps: Step[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-indigo-500/50" />
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className="cyber-border p-6 rounded-lg backdrop-blur-sm bg-gray-900/40">
                <div className="text-indigo-400 mb-4">{step.icon}</div>
                <h4 className="text-xl font-bold mb-2 glow-text">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
            <div className="hidden md:block w-4 h-4 rounded-full bg-indigo-500 relative z-10">
              <div className="absolute inset-0 rounded-full animate-ping bg-indigo-400/50" />
            </div>
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;