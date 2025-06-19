import React from 'react';

const Content1 = () => {
  return (
    <div className="relative bg-[#f1f5e9] text-[#2e3730] flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Shop Now Button */}
      <button className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-[#2e3730] text-white px-6 py-2 rounded-full text-sm hover:opacity-90">
        Shop Now
      </button>

      {/* Large Text SKINCARE */}
      <p className="absolute bottom-0 text-[15vw] font-extrabold uppercase leading-none opacity-70 pointer-events-none select-none">
        SKINCARE
      </p>

      {/* Image Section */}
      <div className="relative z-10 border-2 border-blue-400 rounded-lg overflow-hidden">
        <img
          src="./ChatGPT Image Jun 15, 2025, 10_24_47 PM 2.png"
          alt="Model with product"
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]"
        />

        {/* Small notification card over image */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white flex items-center shadow-md px-4 py-2 rounded-full">
          <img src="./product-icon.png" alt="product" className="w-8 h-8 mr-2" />
          <span className="text-sm text-gray-700">
            While giving you an invigorating cleansing experience.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content1;
