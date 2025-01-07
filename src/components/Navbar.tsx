import React, { useState } from 'react';
import { GraduationCap, User, LogOut, Menu } from 'lucide-react';
import MobileNav from './MobileNav';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md px-4 py-3 fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">CareerConnect</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
            
            
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
      />
    </>
  );
};

export default Navbar;