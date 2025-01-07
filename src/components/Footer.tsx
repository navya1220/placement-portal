import React from 'react';
import { PlayCircle, TrendingUp } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
            <div className="space-y-2">
              <a href="https://www.youtube.com/results?search_query=interview++playlist" className="flex items-center text-gray-300 hover:text-white">
                <PlayCircle className="h-4 w-4 mr-2" />
                Interview Videos
              </a>
              <Link to="/prediction" className="flex items-center text-gray-300 hover:text-white">
  <TrendingUp className="h-4 w-4 mr-2" />
  Career Predictions
</Link>

            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">support@careerconnect.com</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CareerConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;