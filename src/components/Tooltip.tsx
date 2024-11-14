import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

interface TooltipProps {
  content: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: React.FC<TooltipProps> = ({ content, position = 'right' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2'
  };

  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-blue-500 hover:text-blue-600"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <Info className="w-5 h-5" />
      </motion.button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`absolute z-50 w-64 p-3 text-sm text-white bg-blue-600 rounded-lg shadow-lg ${positionStyles[position]}`}
          >
            <div className="relative">
              {content}
              <div className="absolute w-3 h-3 bg-blue-600 transform rotate-45"
                style={{
                  [position === 'top' ? 'bottom' : position === 'bottom' ? 'top' : 'top']: 
                  position === 'top' || position === 'bottom' ? '-6px' : '50%',
                  [position === 'left' ? 'right' : position === 'right' ? 'left' : 'left']: 
                  position === 'left' || position === 'right' ? '-6px' : '50%',
                  transform: `${position === 'left' || position === 'right' ? 'translateY(-50%)' : 'translateX(-50%)'} rotate(45deg)`
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};