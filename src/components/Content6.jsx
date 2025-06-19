import React from 'react';

const Content6 = () => {
  return ( 
    <div>
        <section className="bg-[#F8F3ED] text-[#2D2D2B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-inter font-normal text-3xl sm:text-4xl md:text-5xl leading-snug">
          Feel Beautiful Inside and Out<br />with Every Product.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="w-[175px] h-[60px] bg-[#2D2D2B] text-white rounded-full font-medium uppercase">
            New Arrival
          </button>
          <button className="w-[175px] h-[60px] border border-[#2D2D2B] text-[#2D2D2B] bg-transparent rounded-full font-medium uppercase">
            Cleansing
          </button>
          <button className="w-[175px] h-[60px] border border-[#2D2D2B] text-[#2D2D2B] bg-transparent rounded-full font-medium uppercase">
            Acne Fighter
          </button>
          <button className="w-[175px] h-[60px] border border-[#2D2D2B] text-[#2D2D2B] bg-transparent rounded-full font-medium uppercase">
            Anti Ageing
          </button>
        </div>
      </div>
    </section>

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

export default Content6;
