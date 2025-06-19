import React, { useRef, useEffect } from 'react';
import '../App.css';  // make sure this file is imported

const HeaderContent = () => {
  // The paragraph we want to animate
  const paraRef = useRef(null);
  
  // Split your paragraph into words
  const text = "Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.";
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (paraRef.current) observer.observe(paraRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#F2F8EC] px-6 md:px-16 py-12 flex flex-col md:flex-row items-center gap-8 md:gap-0">
      
      {/* Left Text with word spans */}
      <div className="w-full md:w-1/3 text-center md:text-left text-sm md:text-base leading-relaxed text-gray-700">
        <p
          id="animated-paragraph"
          ref={paraRef}
          className="transition-all duration-500"
        >
          {words.map((word, idx) => (
            <span
              key={idx}
              className="inline-block transition-all duration-500 ease-out mr-1"
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      {/* Center Heading */}
      <h1 className="w-full md:w-1/3 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 text-center">
        GLOW<br />NATUR-<br />ALLY
      </h1>

      {/* Right Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <img
          src="./skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.png"
          alt="Product"
          className="w-32 md:w-40 lg:w-48 object-contain"
        />
      </div>
    </section>
  );
};

export default HeaderContent;
