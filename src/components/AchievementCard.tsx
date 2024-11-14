import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  value,
  icon: Icon,
  color
}) => {
  return (
    <motion.div
      className="p-6 rounded-2xl shadow-neuromorphic overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div
          className={`p-3 rounded-xl ${color}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <span className="text-2xl font-bold gradient-text from-gray-700 to-gray-900">
          {value}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <div className="mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: '75%' }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
};