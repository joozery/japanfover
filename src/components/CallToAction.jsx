
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.p
      className='text-md text-white max-w-lg mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀
    </motion.p>
  );
};

export default CallToAction;
