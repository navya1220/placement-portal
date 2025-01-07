import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[300px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from--900/90 to-indigo-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Welcome to CareerConnect
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Your gateway to successful placements. Connect with top companies, 
          prepare effectively, and launch your career with confidence.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full 
            font-semibold hover:bg-gray-100 transition-colors">
            Explore Resources
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full 
            font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;