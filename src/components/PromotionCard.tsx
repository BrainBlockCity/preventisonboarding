import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PromotionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  color: string;
}

export const PromotionCard: React.FC<PromotionCardProps> = ({
  title,
  description,
  icon: Icon,
  buttonText,
  color
}) => {
  return (
    <motion.div
      className="p-6 rounded-2xl shadow-neuromorphic overflow-hidden relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start space-x-4">
        <motion.div
          className={`p-3 rounded-xl bg-gradient-to-br ${color}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <motion.button
            className={`px-6 py-2 rounded-lg bg-gradient-to-r ${color} text-white`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
    </motion.div>
  );
};