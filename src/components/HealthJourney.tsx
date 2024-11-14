import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check, Award } from 'lucide-react';

export function HealthJourney() {
  const steps = [
    { title: 'Initial Assessment', completed: true },
    { title: 'Nutrition Goals', completed: false },
    { title: 'Fitness Goals', completed: false },
    { title: 'Mental Wellness', completed: false },
    { title: 'Sleep Optimization', completed: false }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-neuromorphic"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-semibold">12 Week Health Journey</h2>
        </div>
        <Award className="w-8 h-8 text-yellow-500" />
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step.completed ? 'bg-green-500' : 'bg-gray-200'
            }`}>
              {step.completed ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <span className="text-gray-600">{index + 1}</span>
              )}
            </div>
            <div className="flex-1">
              <h3 className={`font-medium ${step.completed ? 'text-green-500' : 'text-gray-600'}`}>
                {step.title}
              </h3>
              <div className="mt-1 w-full h-1 bg-gray-100 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: step.completed ? '100%' : '0%' }}
                  className="h-full bg-green-500 rounded-full"
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}