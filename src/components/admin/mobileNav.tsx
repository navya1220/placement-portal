import React from 'react';
import { X, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-4 py-2">
          <Link to="/about" className="block py-2 text-gray-600 hover:text-blue-600" onClick={onClose}>
            About Us
          </Link>
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="flex items-center w-full py-2 text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;

