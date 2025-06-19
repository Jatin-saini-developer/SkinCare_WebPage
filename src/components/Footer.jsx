import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#2D3B36] text-[#FEFFF4] overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[200px] sm:text-[250px] md:text-[300px] font-extrabold text-[#FEFFF4]/10 uppercase leading-none">
          SKINCARE
        </span>
      </div>

      {/* Foreground Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Join The Skincare Community Now.
          </h2>
          <nav className="flex space-x-8 text-sm">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">YouTube</a>
          </nav>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-1">
            <p className="text-sm">Get in Touch</p>
            <p className="text-2xl sm:text-3xl font-semibold">contact.skincare.com</p>
          </div>
          <nav className="flex space-x-8 text-sm">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;