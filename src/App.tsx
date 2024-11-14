import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, TestTube, Moon, Activity, Brain, Apple, Scale, Heart } from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { PromotionCard } from './components/PromotionCard';
import { AssessmentProgress } from './components/AssessmentProgress';
import { HealthJourney } from './components/HealthJourney';
import { OnboardingForm } from './components/OnboardingForm';
import { Sidebar } from './components/Sidebar';
import { generateDummyData } from './utils/mockData';

function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  if (!onboardingComplete) {
    return <OnboardingForm onComplete={() => setOnboardingComplete(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-800 mb-8"
          >
            Preventis Labs
          </motion.div>

          <AssessmentProgress />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <DashboardCard
              title="Daily Activity"
              value="8.5"
              icon={Activity}
              color="from-blue-500 to-blue-600"
              data={generateDummyData()}
            />
            <DashboardCard
              title="Sleep Quality"
              value="7.2"
              icon={Moon}
              color="from-indigo-500 to-indigo-600"
              data={generateDummyData()}
            />
            <DashboardCard
              title="Mental Wellness"
              value="9.0"
              icon={Brain}
              color="from-purple-500 to-purple-600"
              data={generateDummyData()}
            />
            <DashboardCard
              title="Heart Health"
              value="8.8"
              icon={Heart}
              color="from-red-500 to-red-600"
              data={generateDummyData()}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <PromotionCard
              title="Claim your complimentary wellness package!"
              description="Start your journey to better health with our personalized wellness package."
              icon={Gift}
              buttonText="Claim Now"
              color="from-green-500 to-green-600"
            />
            <PromotionCard
              title="Home Test Kit Available"
              description="Get comprehensive health insights from the comfort of your home."
              icon={TestTube}
              buttonText="Order Kit"
              color="from-blue-500 to-blue-600"
            />
          </div>

          <HealthJourney />
        </div>
      </div>
    </div>
  );
}

export { App };