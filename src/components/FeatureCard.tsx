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
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow 
      flex flex-col border border-gray-200"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>

      <p className="text-sm md:text-base text-gray-600 mb-4 text-center flex-grow">
        {description}
      </p>

      <Link to={link}>
        <button 
          className="mt-auto w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 
          rounded-md text-sm md:text-base font-medium hover:from-blue-600 hover:to-purple-700 
          transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
