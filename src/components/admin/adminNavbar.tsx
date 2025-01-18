import React, { useState } from 'react';
import { LogOut, Menu } from 'lucide-react';
import MobileNav from './mobileNav';
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/roles"); 
  };

  return (
    <>
      <nav className="bg-white shadow-md px-4 py-3 fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeImages/7365058a-1c03-4bb0-8934-88aea2ae1e87.png"
              className="h-8 w-8 text-blue-600"
              alt="College Logo"
            />
            <span className="text-xl font-bold text-gray-800">
              Vignan's Institute Of Engineering For Women
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onLogout={handleLogout} 
      />
    </>
  );
};

export default AdminNavbar;

