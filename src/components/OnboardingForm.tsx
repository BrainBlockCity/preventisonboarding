import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Activity, Brain, Heart, Pill } from 'lucide-react';
import { Logo } from './Logo';
import { RotatingFacts } from './RotatingFacts';
import { HeightInput } from './HeightInput';

interface OnboardingFormProps {
  onComplete: () => void;
}

const initialFormData = {
  gender_identity: '',
  age: '',
  heightFeet: '',
  heightInches: '',
  weight: '',
  targetWeight: '',
  preExistingConditions: [] as string[],
  bmi: '',
  sleepHours: '',
  sleepQuality: '',
  waterIntake: '',
  chronicStress: '',
  gutIssues: '',
  anxietyFrequency: '',
  depressionFrequency: '',
  autoimmune: '',
  medications: [] as string[],
  supplements: '',
  vitaminD: '',
  activityLevel: '',
  weeklyWorkouts: '',
  exerciseLimitations: '',
  currentDiet: '',
  weightLossReason: '',
  weightLossGoal: '',
  weightLossConfidence: '',
  supportSystem: ''
};

export function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (formData.heightFeet && formData.heightInches && formData.weight) {
      const heightInMeters = ((parseInt(formData.heightFeet) * 12 + parseInt(formData.heightInches)) * 0.0254);
      const weightInKg = parseInt(formData.weight) * 0.453592;
      const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
      setFormData(prev => ({ ...prev, bmi }));
    }
  }, [formData.heightFeet, formData.heightInches, formData.weight]);

  const steps = [
    {
      title: 'Basic Information',
      icon: User,
      fields: ['gender_identity', 'age', 'height', 'weight', 'targetWeight']
    },
    {
      title: 'Health Assessment',
      icon: Heart,
      fields: ['preExistingConditions', 'sleepQuality', 'waterIntake', 'chronicStress']
    },
    {
      title: 'Mental & Physical Health',
      icon: Brain,
      fields: ['gutIssues', 'anxietyFrequency', 'depressionFrequency', 'autoimmune', 'medications', 'supplements']
    },
    {
      title: 'Lifestyle & Goals',
      icon: Activity,
      fields: ['activityLevel', 'weeklyWorkouts', 'currentDiet', 'weightLossReason', 'weightLossGoal']
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderField = (field: string) => {
    switch (field) {
      case 'gender_identity':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Gender Identity</label>
            <select
              value={formData.gender_identity}
              onChange={(e) => handleInputChange('gender_identity', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
            >
              <option value="">Select gender identity</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        );

      case 'age':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
              placeholder="Enter your age"
              min="0"
              max="120"
            />
          </div>
        );

      case 'height':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Height</label>
            <HeightInput
              feet={formData.heightFeet}
              inches={formData.heightInches}
              onChange={(feet, inches) => {
                handleInputChange('heightFeet', feet);
                handleInputChange('heightInches', inches);
              }}
            />
          </div>
        );

      case 'weight':
      case 'targetWeight':
        const isTarget = field === 'targetWeight';
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {isTarget ? 'Target Weight (lbs)' : 'Current Weight (lbs)'}
            </label>
            <input
              type="number"
              value={formData[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
              placeholder={`Enter your ${isTarget ? 'target' : 'current'} weight`}
              min="0"
              max="1000"
            />
          </div>
        );

      case 'preExistingConditions':
        const conditions = [
          'Diabetes',
          'High Blood Pressure',
          'High Cholesterol',
          'Heart Disease',
          'Asthma',
          'None'
        ];
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Pre-existing Conditions</label>
            <div className="space-y-2">
              {conditions.map(condition => (
                <label key={condition} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.preExistingConditions.includes(condition)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        if (condition === 'None') {
                          handleInputChange('preExistingConditions', ['None']);
                        } else {
                          handleInputChange('preExistingConditions', 
                            [...formData.preExistingConditions.filter(c => c !== 'None'), condition]);
                        }
                      } else {
                        handleInputChange('preExistingConditions',
                          formData.preExistingConditions.filter(c => c !== condition));
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                  <span>{condition}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'sleepQuality':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Sleep Quality</label>
            <select
              value={formData.sleepQuality}
              onChange={(e) => handleInputChange('sleepQuality', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
            >
              <option value="">Select sleep quality</option>
              <option value="very_poor">Very Poor</option>
              <option value="poor">Poor</option>
              <option value="average">Average</option>
              <option value="good">Good</option>
              <option value="very_good">Very Good</option>
            </select>
          </div>
        );

      case 'waterIntake':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Daily Water Intake (glasses)</label>
            <input
              type="number"
              value={formData.waterIntake}
              onChange={(e) => handleInputChange('waterIntake', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
              placeholder="Enter number of glasses"
              min="0"
              max="20"
            />
          </div>
        );

      case 'chronicStress':
      case 'gutIssues':
      case 'autoimmune':
        const labels = {
          chronicStress: 'Do you experience chronic stress?',
          gutIssues: 'Do you experience gut health issues?',
          autoimmune: 'Do you have any autoimmune disorders?'
        };
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{labels[field as keyof typeof labels]}</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="yes"
                  checked={formData[field] === 'yes'}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="text-blue-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="no"
                  checked={formData[field] === 'no'}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="text-blue-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        );

      case 'anxietyFrequency':
      case 'depressionFrequency':
        const frequencyLabels = {
          anxietyFrequency: 'How often do you experience anxiety?',
          depressionFrequency: 'How often do you experience depression?'
        };
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {frequencyLabels[field as keyof typeof frequencyLabels]}
            </label>
            <select
              value={formData[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
            >
              <option value="">Select frequency</option>
              <option value="never">Never</option>
              <option value="rarely">Rarely</option>
              <option value="sometimes">Sometimes</option>
              <option value="often">Often</option>
              <option value="always">Always</option>
            </select>
          </div>
        );

      case 'medications':
        const medicationOptions = ['Blood Pressure', 'Cholesterol', 'Diabetes'];
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Current Medications</label>
            <div className="space-y-2">
              {medicationOptions.map(med => (
                <label key={med} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.medications.includes(med)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleInputChange('medications', [...formData.medications, med]);
                      } else {
                        handleInputChange('medications',
                          formData.medications.filter(m => m !== med));
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                  <span>{med}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 'activityLevel':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Activity Level</label>
            <select
              value={formData.activityLevel}
              onChange={(e) => handleInputChange('activityLevel', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
            >
              <option value="">Select activity level</option>
              <option value="sedentary">Sedentary</option>
              <option value="lightly_active">Lightly Active</option>
              <option value="moderately_active">Moderately Active</option>
              <option value="very_active">Very Active</option>
            </select>
          </div>
        );

      case 'weeklyWorkouts':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Weekly Workouts</label>
            <select
              value={formData.weeklyWorkouts}
              onChange={(e) => handleInputChange('weeklyWorkouts', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
            >
              <option value="">Select frequency</option>
              <option value="never">Never</option>
              <option value="occasionally">Occasionally</option>
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
            </select>
          </div>
        );

      case 'currentDiet':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Current Diet</label>
            <select
              value={formData.currentDiet}
              onChange={(e) => handleInputChange('currentDiet', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
            >
              <option value="">Select diet type</option>
              <option value="healthy">Healthy</option>
              <option value="mixed">Mixed</option>
              <option value="unhealthy">Unhealthy</option>
            </select>
          </div>
        );

      case 'weightLossReason':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Primary Weight Loss Reason</label>
            <select
              value={formData.weightLossReason}
              onChange={(e) => handleInputChange('weightLossReason', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
            >
              <option value="">Select reason</option>
              <option value="health">Health</option>
              <option value="energy">Energy</option>
              <option value="appearance">Appearance</option>
              <option value="other">Other</option>
            </select>
          </div>
        );

      case 'weightLossGoal':
        return (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Weight Loss Goal</label>
            <select
              value={formData.weightLossGoal}
              onChange={(e) => handleInputChange('weightLossGoal', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-neuromorphic-sm"
            >
              <option value="">Select goal</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const CurrentStepIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Logo />
        <RotatingFacts />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-neuromorphic"
        >
          <div className="flex items-center space-x-3 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="p-2 rounded-lg bg-blue-500 text-white"
            >
              <CurrentStepIcon className="w-6 h-6" />
            </motion.div>
            <h2 className="text-2xl font-semibold">{steps[currentStep].title}</h2>
          </div>

          <div className="space-y-6">
            {steps[currentStep].fields.map((field) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderField(field)}
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBack}
              className={`px-6 py-2 rounded-lg ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              disabled={currentStep === 0}
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white"
            >
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}