import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing arrow icon
import img1 from '../../../assets/safety.jpeg';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Industry = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: img1, name: 'Safety Equipment', link: '/link1' },
    { src: img1, name: 'Industrial Tools', link: '/link2' },
    { src: img1, name: 'Construction Gear', link: '/link3' },
    { src: img1, name: 'Machinery Parts', link: '/link4' },
    { src: img1, name: 'Heavy Equipment', link: '/link5' },
  ];

  const visibleImages = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-sky-100 py-8">
      {/* Wrapper with max-width */}
      <div className="max-w-4xl mx-auto">
        {/* Top Section with Text and Links */}
        <div className="flex justify-between items-center mb-6">
          {/* Left Text */}
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-800">Explore Our Industry Solutions</h1>
            <p className="mt-2 text-gray-600">
              Learn more about the innovative solutions we provide for businesses and industries.
            </p>
          </div>

          {/* Right Links */}
          <div className="flex flex-col items-end space-y-2">
            <a
              href="/link1"
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition"
            >
              <FaArrowRight className="mr-2" /> View All Industries
            </a>
            <a
              href="/link2"
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition"
            >
              <FaArrowRight className="mr-2" /> Product Search
            </a>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3 shadow-md focus:outline-none"
          >
            <MdKeyboardArrowLeft />
          </button>
          <div className="overflow-hidden w-full mx-4 rounded-lg shadow-lg border border-gray-200">
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-1/3 p-4 text-left bg-white flex flex-col items-start"
                >

                  <img
                    src={image.src}
                    alt={image.name}
                    className="rounded-lg w-full h-40 object-cover mt-4"
                  />
                  {/* Name */}
                  <p className="mt-2 text-gray-800 font-semibold">
                    {image.name}
                  </p>
                  {/* Link with Arrow Icon */}
                  <a
                    href={image.link}
                    className="flex items-center justify-start text-blue-600 hover:text-blue-800 font-medium mt-6"
                  >
                    <FaArrowRight className="mr-1" />
                    Discover More
                  </a>
                  {/* Image */}

                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="text-white bg-blue-600 hover:bg-blue-500 rounded-full p-3 shadow-md focus:outline-none"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Industry;
