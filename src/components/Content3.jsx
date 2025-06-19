// src/components/WhyProducts.jsx
import React from 'react';

const features = [
  {
    number: '01',
    title: 'Bio Ingredients',
    description:
      'Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.',
  },
  {
    number: '02',
    title: 'Everything Natural',
    description:
      'Pure ingredients for pure skin. The perfect solution for your skin care needs.',
  },
  {
    number: '03',
    title: 'All Handmade',
    description:
      'Made with love and care. Just for you. Give your skin the tender loving care it deserves.',
  },
];

const Content3 = () => (
  <section className="bg-[#F2F8EC] px-6 md:px-16 py-12">
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
      {/* Left Column */}
      <div className="flex-1">
        {/* Top Button */}
        <button className="flex items-center mb-4 px-4 py-2 border border-[#2D3B36] rounded-full text-sm font-medium text-[#2D3B36]">
          <span className="w-2 h-2 bg-[#2D3B36] rounded-full mr-2" />
          Why Our Products
        </button>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2D3B36] leading-tight mb-4">
          YOUR SKIN DESERVES<br />
          THE BEST CARE.
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-[#2D3B36] mb-8 max-w-xl">
          Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love backed by science, and inspired by nature.
        </p>

        {/* Feature List */}
        <ul className="space-y-8">
          {features.map((f) => (
            <li key={f.number} className="flex items-start">
              {/* Big lightly‑opaque number */}
              <span className="text-[3rem] md:text-[4rem] font-bold text-[#2D3B36] text-opacity-20 w-16">
                {f.number}
              </span>

              {/* Title + desc */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#2D3B36] -mt-1">
                  {f.title}
                </h3>
                <p className="text-sm md:text-base text-[#2D3B36] mt-1 max-w-lg">
                  {f.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer Links */}
        <div className="mt-12 flex justify-between text-sm md:text-base text-[#2D3B36]">
          <span className="opacity-50">SINCE 2001</span>
          <a href="#" className="font-medium hover:underline">
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Right Column: Image + Badge */}
      <div className="flex-1 relative">
        <img
          src="./Jun 15, 2025, 11_52_20 PM 2.png"
          alt="Skincare"
          className="w-full h-auto rounded-2xl object-cover shadow-lg"
        />

        {/* Award Badge */}
        <div className="absolute bottom-6 left-6 flex items-center bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
          <img
            src="./award-icon.png"
            alt="Award icon"
            className="w-6 h-6 mr-2"
          />
          <span className="text-sm md:text-base text-[#2D3B36]">
            Best Skin Care Product Award Winning
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Content3;
