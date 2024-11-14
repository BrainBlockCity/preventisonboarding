import React from 'react';
import { motion } from 'framer-motion';
import { Home, ClipboardList, FileText, Map, Library, Activity, Gift, User } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <motion.button
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
      isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-50'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </motion.button>
);

export function Sidebar() {
  const [activeItem, setActiveItem] = React.useState('Home');

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home' },
    { icon: <ClipboardList className="w-5 h-5" />, label: 'Assessments' },
    { icon: <FileText className="w-5 h-5" />, label: 'Medical Records' },
    { icon: <Map className="w-5 h-5" />, label: 'Road to Wellness' },
    { icon: <Library className="w-5 h-5" />, label: 'Library' },
    { icon: <Activity className="w-5 h-5" />, label: 'Health Tracker' },
    { icon: <Gift className="w-5 h-5" />, label: 'My Benefits' },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col">
      <div className="p-6">
        <img src="/logo.png" alt="Preventis Labs" className="w-32 mx-auto mb-8" />
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.label}
              onClick={() => setActiveItem(item.label)}
            />
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4 border-t">
        <div className="flex items-center space-x-3 px-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">Brian Christensen</div>
            <div className="text-xs text-gray-500">brian@allthe.ai</div>
          </div>
        </div>
      </div>
    </div>
  );
}