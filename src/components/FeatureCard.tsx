import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  link: string; // Add link as a required prop
  buttonText?: string;
}

const FeatureCard = ({ title, description, Icon, link, buttonText = 'Learn More' }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      <Link to={link}>
        <button 
          className="mt-auto w-full bg-blue-600 text-white py-2 px-4 rounded-md 
            hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:ring-opacity-50"
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
