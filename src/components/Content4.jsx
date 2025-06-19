import React from 'react';

const Content4 = () => {
  return (
    <div className="bg-[#F8F3ED] text-[#2D2D2B] min-h-screen py-12 px-4 sm:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 relative flex flex-col items-center">
        {/* Pill Label */}
        <div className="absolute top-0 left-0 mt-2 ml-2">
          <span className="inline-block bg-white border border-[#2D2D2B] rounded-full px-4 py-1 text-sm uppercase">
            Best Selling Products
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl text-center leading-tight px-4">
          Skincare That Brings Out Your Natural Radiance
        </h1>

        {/* Arrows */}
        <div className="absolute top-0 right-0 mt-2 mr-2 flex space-x-4">
          <button className="w-10 h-10 sm:w-12 sm:h-12 border border-[#2D2D2B] rounded-full flex items-center justify-center hover:bg-[#2D2D2B] hover:text-[#F8F3ED] transition duration-300">
            ←
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 border border-[#2D2D2B] rounded-full flex items-center justify-center hover:bg-[#2D2D2B] hover:text-[#F8F3ED] transition duration-300">
            →
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-center gap-0 md:gap-[-100px] lg:gap-[-150px]">
        {/* Left Card */}
        <div className="relative z-10 md:translate-y-12 group w-full sm:w-[280px] md:w-[300px] lg:w-[400px] overflow-hidden mb-8 md:mb-0">
          <img
            src="./filip-knezevic-k-ElrinXWAk-unsplash 1.png"
            alt="ALYA SKIN CLEANSER"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2">
            <h3 className="text-lg sm:text-xl font-bold uppercase">ALYA SKIN CLEANSER</h3>
            <p className="text-base sm:text-lg">From $29.99</p>
          </div>
        </div>

        {/* Center Card */}
        <div className="relative z-30 group w-full sm:w-[300px] md:w-[350px] lg:w-[450px] overflow-hidden mb-8 md:mb-0">
          <img
            src="./cierra-henderson-LWIQp-0_b98-unsplash (1) 1.png"
            alt="RITUAL OF SAKURA"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2">
            <h3 className="text-lg sm:text-xl font-bold uppercase">RITUAL OF SAKURA</h3>
            <p className="text-base sm:text-lg">From $27.99</p>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative z-20 md:translate-y-8 group w-full sm:w-[280px] md:w-[300px] lg:w-[400px] overflow-hidden">
          <img
            src="./mathilde-langevin-p3O5f4u95Lo-unsplash (1) 1.png"
            alt="THE BODY LOTION"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 px-4 py-2">
            <h3 className="text-lg sm:text-xl font-bold uppercase">THE BODY LOTION</h3>
            <p className="text-base sm:text-lg">From $19.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
