import React, { useState } from 'react';
import { FaSearch, FaGlobe, FaUserAlt, FaEnvelope, FaShareAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-center items-center fixed w-full mt-2 z-30">
      {/* Navbar */}
      <nav className="grid grid-cols-12 gap-4 p-4 bg-gray-400 text-white w-full max-w-4xl rounded-lg relative z-30">
        {/* Left side - Links and Icons (First 9 columns) */}
        <div className="col-span-9 flex justify-between items-center">
          <div className="hidden lg:flex flex-wrap space-x-4">
            <a href="#" className="hover:text-blue-500">pakistan</a>
            <a href="#" className="hover:text-blue-500">who we are</a>
            <a href="#" className="hover:text-blue-500">products</a>
            <a href="#" className="hover:text-blue-500">investors</a>
            <a href="#" className="hover:text-blue-500">careers</a>
            <a href="#" className="hover:text-blue-500">media</a>
          </div>

          <div className="hidden lg:flex space-x-4">
            <FaSearch className="text-xl hover:text-blue-500 cursor-pointer" />
            <FaGlobe className="text-xl hover:text-blue-500 cursor-pointer" />
            <FaUserAlt className="text-xl hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Right side - Text and Icons (Last 3 columns) */}
        <div className="col-span-3 flex justify-end items-center space-x-3">
          <div className="text-sm text-white whitespace-nowrap">Some Text Here</div>
          <div className="flex space-x-4">
            <FaEnvelope className="text-xl hover:text-blue-500 cursor-pointer" />
            <FaShareAlt className="text-xl hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Hamburger Menu (only visible on tablet and smaller screens) */}
        <div className="lg:hidden absolute left-4">
          <button onClick={toggleMenu} className="text-white text-2xl">
            &#9776;
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[4rem] left-0 right-0 z-10 bg-gray-800 bg-opacity-75 flex justify-center items-center transition-all duration-500 ease-in-out">
          <div className="bg-gray-900 text-white p-4 rounded-lg w-3/4 max-w-md shadow-xl space-y-4">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-white text-2xl">
                &times;
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-4 text-center">
              <a href="#" className="text-lg hover:text-blue-500 transition-all duration-200">pakistan</a>
              <a href="#" className="text-lg hover:text-blue-500 transition-all duration-200">who we are</a>
              <a href="#" className="text-lg hover:text-blue-500 transition-all duration-200">products</a>
              <a href="#" className="text-lg hover:text-blue-500 transition-all duration-200">investors</a>
              <a href="#" className="text-lg hover:text-blue-500 transition-all duration-200">careers</a>
              <a href="#" className="text-lg hover:text-blue-500 transition-all duration-200">media</a>
            </div>

            {/* Icons */}
            <div className="flex justify-center space-x-6 mt-4">
              <FaSearch className="text-2xl hover:text-blue-500 cursor-pointer" />
              <FaGlobe className="text-2xl hover:text-blue-500 cursor-pointer" />
              <FaUserAlt className="text-2xl hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
