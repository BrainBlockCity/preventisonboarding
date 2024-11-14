import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const facts = [
  "💧 Men typically need 55-75 more ounces of water daily for optimal health",
  "😴 40% of adults rarely wake up feeling rested and refreshed",
  "🏃 Only 23% of adults worldwide meet recommended exercise guidelines",
  "🧠 About 55% of Americans report feeling stressed daily",
  "❤️ Regular physical activity can reduce chronic disease risk by up to 50%",
  "🌟 A 5-10% weight reduction can significantly improve health",
  "💪 Proper hydration boosts energy levels and brain function"
];

export const RotatingFacts: React.FC = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mb-6">
      <motion.div
        className="bg-white rounded-xl p-4 shadow-neuromorphic overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 4 }}
          >
            <Lightbulb className="w-6 h-6 text-yellow-500" />
          </motion.div>
          <div className="flex-1 min-h-[1.5rem] relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentFactIndex}
                className="absolute w-full text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {facts[currentFactIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};