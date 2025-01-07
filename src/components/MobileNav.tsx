import React from 'react';
import { 
  Building, Brain, MessageSquare, FileCheck, Briefcase, 
  BookOpen, Code, TrendingUp, User, LogOut
} from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const features = [
    { icon: Building, label: 'Company Recruitment' },
    { icon: Brain, label: 'AI Resume Screening' },
    { icon: MessageSquare, label: 'Smart Chatbot' },
    { icon: FileCheck, label: 'Mock Tests' },
    { icon: Briefcase, label: 'Job Portal' },
    { icon: BookOpen, label: 'Previous Papers' },
    { icon: Code, label: 'DSA Practice' },
    { icon: TrendingUp, label: 'Future Trends' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <button 
              onClick={onClose}
              className="ml-auto block text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
          </div>

          <div className="overflow-y-auto flex-1 py-4">
            <div className="px-4 py-2">
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                <User className="h-5 w-5 text-blue-600" />
                <span>Profile</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100">
                <LogOut className="h-5 w-5 text-blue-600" />
                <span>Logout</span>
              </a>
            </div>

            <div className="border-t my-2"></div>

            <div className="px-4 py-2">
              {features.map((feature, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <feature.icon className="h-5 w-5 text-blue-600" />
                  <span>{feature.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;