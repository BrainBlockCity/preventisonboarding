import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';

interface Assessment {
  name: string;
  completed: boolean;
  icon: JSX.Element;
}

const assessments: Assessment[] = [
  { name: 'GUT HEALTH', completed: true, icon: <div className="text-xl">🦠</div> },
  { name: 'ADDICTION', completed: false, icon: <div className="text-xl">🎯</div> },
  { name: 'WEIGHT MANAGEMENT', completed: true, icon: <div className="text-xl">⚖️</div> },
  { name: 'MENTAL HEALTH', completed: false, icon: <div className="text-xl">🧠</div> },
  { name: 'SLEEP HEALTH', completed: true, icon: <div className="text-xl">😴</div> }
];

export const AssessmentProgress: React.FC = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-neuromorphic mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-xl font-semibold mb-4">Assessments Completed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assessments.map((assessment, index) => (
          <motion.div
            key={assessment.name}
            className={`flex items-center p-4 rounded-xl ${
              assessment.completed
                ? 'bg-green-50 border border-green-200'
                : 'bg-gray-50 border border-gray-200'
            }`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mr-3">{assessment.icon}</div>
            <div className="flex-1">
              <h3 className="font-medium text-sm">{assessment.name}</h3>
            </div>
            {assessment.completed ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <motion.div
                whileHover={{ x: 5 }}
                className="cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};