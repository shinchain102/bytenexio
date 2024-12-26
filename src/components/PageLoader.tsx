import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Loader2 className="w-12 h-12 text-indigo-500" />
      </motion.div>
    </div>
  );
};

export default PageLoader;