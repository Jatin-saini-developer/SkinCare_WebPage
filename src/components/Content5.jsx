import React from 'react';

const Content5 = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border-4 border-blue-500">
        {/* Background Image */}
        <img
          src="./model.png"
          alt="Model showcasing skincare product"
          className="w-full h-auto object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Feel Beautiful Inside and Out
            <br />
            with Every Product.
          </h2>
          <button className="mt-6 bg-white text-[#2D2D2B] px-6 py-2 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content5;
