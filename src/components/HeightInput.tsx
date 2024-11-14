import React from 'react';

interface HeightInputProps {
  feet: string;
  inches: string;
  onChange: (feet: string, inches: string) => void;
}

export const HeightInput: React.FC<HeightInputProps> = ({ feet, inches, onChange }) => {
  return (
    <div className="flex space-x-2">
      <div className="flex-1">
        <input
          type="number"
          min="0"
          max="8"
          value={feet}
          onChange={(e) => onChange(e.target.value, inches)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Feet"
        />
      </div>
      <div className="flex-1">
        <input
          type="number"
          min="0"
          max="11"
          value={inches}
          onChange={(e) => onChange(feet, e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Inches"
        />
      </div>
    </div>
  );
};