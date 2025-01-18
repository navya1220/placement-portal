import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  link: string;
  buttonText?: string;
}

const FeatureCard = ({ title, description, Icon, link, buttonText = 'Learn More' }: FeatureCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105
        flex flex-col border border-gray-200 hover:rotate-1 hover:scale-105"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 rounded-full mb-6 transform transition-all duration-300 hover:scale-110">
        <Icon className="h-8 w-8 text-white" />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 text-center transform transition-all duration-300 hover:text-pink-600">
        {title}
      </h3>

      <p className="text-sm md:text-base text-gray-600 mb-4 text-center flex-grow transition-all duration-300 hover:text-gray-800">
        {description}
      </p>

      <Link to={link}>
        <button 
          className="mt-auto w-full bg-gradient-to-r from-teal-400 to-indigo-500 text-white py-2 px-4 
          rounded-md text-sm md:text-base font-medium hover:from-teal-500 hover:to-indigo-600 
          transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 
          transform hover:scale-105"
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
