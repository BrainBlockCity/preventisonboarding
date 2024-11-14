import React from 'react';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      className="w-48 relative mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/logo.png" 
        alt="Preventis Labs" 
        className="w-full h-auto"
      />
    </motion.div>
  );
}