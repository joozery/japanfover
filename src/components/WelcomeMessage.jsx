
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      className='text-xl md:text-2xl text-white max-w-2xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀
    </motion.p>
  );
};

export default WelcomeMessage;
