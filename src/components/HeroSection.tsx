'use client'

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[300px] flex items-center overflow-hidden">
      {/* Background Image with Animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-600/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to CampusConnect
        </motion.h1>
        <motion.p 
          className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your gateway to successful placements. Connect with top companies, 
          prepare effectively, and launch your career with confidence.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full 
              text-sm sm:text-base font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 
              shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Resources
          </motion.button>
          <motion.button 
            className="border-2 border-white text-white px-4 sm:px-6 py-2 rounded-full 
              text-sm sm:text-base font-semibold hover:bg-white/20 transition-all duration-300 
              shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

