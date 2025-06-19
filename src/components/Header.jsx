import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#F2F8EC] px-6 md:px-16 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-black">SKINCARE</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-base font-medium text-gray-800">
        <a href="/">All Products</a>
        <a href="/serum">Serum</a>
        <a href="/sunscreen">Sunscreen</a>
        <a href="/bundle">Bundle</a>
      </nav>

      {/* Right Side */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Cart */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-400">
            <img src="./bag-4-svgrepo-com 1.png" alt="Cart" className="w-5 h-5" />
          </div>
          <span className="text-base font-medium text-gray-800">Cart(1)</span>
        </div>

        {/* Wishlist */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-400">
          <img src="./heart-svgrepo-com (1) 1.png" alt="Wishlist" className="w-5 h-5" />
        </div>

        {/* Profile */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-400">
          <img src="./Group 1.png" alt="Profile" className="w-5 h-5" />
        </div>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F2F8EC] shadow-md z-50 flex flex-col items-start p-6 space-y-4 text-base font-medium text-gray-800 md:hidden">
          <a href="/">All Products</a>
          <a href="/serum">Serum</a>
          <a href="/sunscreen">Sunscreen</a>
          <a href="/bundle">Bundle</a>
          <hr className="w-full border-t" />
          <div className="flex space-x-4">
            <img src="./bag-4-svgrepo-com 1.png" alt="Cart" className="w-6 h-6" />
            <img src="./heart-svgrepo-com (1) 1.png" alt="Wishlist" className="w-6 h-6" />
            <img src="./Group 1.png" alt="Profile" className="w-6 h-6" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
