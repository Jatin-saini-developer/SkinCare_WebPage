import React from 'react';

const Content7 = () => {
  return (
    <section className="bg-[#FEFFF4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Image with Overlay */}
        <div className="relative w-full md:w-1/2">
          <img
            src="./mathilde-langevin-p3O5f4u95Lo-unsplash (1) 1.png"
            alt="Product FAQ"
            className="w-full h-auto object-cover rounded-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-[#E4EAD9] flex items-center px-4 py-2 rounded-full">
            <span className="inline-block w-6 h-6 bg-[#2D2D2B] rounded-full mr-2">
              
            </span>
            <span className="text-sm text-[#2D2D2B]">
              24/7 We’re Here to Help You
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          {/* Pill Label */}
          <div className="mb-4">
            <span className="inline-block bg-white border border-[#2D2D2B] rounded-full px-4 py-1 text-sm uppercase">
              Frequently Asked Question
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2B] mb-8">
            Answers to Your Skincare Questions, All in One Place.
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex justify-between items-center border border-[#2D2D2B] rounded-lg px-4 py-3">
              <p className="text-base text-[#2D2D2B]">Are your products safe for sensitive skin?</p>
              <button className="text-xl font-bold text-[#2D2D2B]">+</button>
            </div>

            {/* Item 2 - Expanded */}
            <div className="border border-[#2D2D2B] rounded-lg">
              <div className="flex justify-between items-center px-4 py-3 bg-white">
                <p className="text-base text-[#2D2D2B]">Are your products cruelty-free?</p>
                <button className="text-xl font-bold text-[#2D2D2B]">−</button>
              </div>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-[#2D2D2B]">
                  Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex justify-between items-center border border-[#2D2D2B] rounded-lg px-4 py-3">
              <p className="text-base text-[#2D2D2B]">What’s your return policy?</p>
              <button className="text-xl font-bold text-[#2D2D2B]">+</button>
            </div>

            {/* Item 4 */}
            <div className="flex justify-between items-center border border-[#2D2D2B] rounded-lg px-4 py-3">
              <p className="text-base text-[#2D2D2B]">Do you ship internationally?</p>
              <button className="text-xl font-bold text-[#2D2D2B]">+</button>
            </div>

            {/* Item 5 */}
            <div className="flex justify-between items-center border border-[#2D2D2B] rounded-lg px-4 py-3">
              <p className="text-base text-[#2D2D2B]">How do I choose the right product?</p>
              <button className="text-xl font-bold text-[#2D2D2B]">+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content7;
