import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing the arrow icon
import img1 from '../../../assets/safety.jpeg';

const Bussiness = () => {
  const cards = [
    {
      imgSrc: img1,
      name: 'Card 1',
      description: 'This is a detailed description for Card 1. Our solutions are designed to help businesses improve their sustainability practices, reduce waste, and increase efficiency.',
      link1: '/link1',
      link2: '/link1-more',
    },
    {
      imgSrc: img1,
      name: 'Card 2',
      description: 'This is a detailed description for Card 2. We offer tools and insights that enable businesses to make smarter, more sustainable decisions while driving innovation.',
      link1: '/link2',
      link2: '/link2-more',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Top Text Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800">We Empower Businesses to Become More Sustainable</h1>
          <p className="mt-4 text-lg text-gray-700">
            Discover the innovative solutions and sustainable practices that can transform your business into a greener, more efficient organization.
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-blue-400 text-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={card.imgSrc}
                alt={card.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold">{card.name}</h3>
                <p className="mt-2">{card.description}</p>
                
                {/* First Link with Arrow Icon */}
                <a
                  href={card.link1}
                  className="mt-4 text-blue-200 hover:text-blue-400 font-medium inline-block"
                >
                  <FaArrowRight className="inline-block mr-1 " />
                  Learn More
                </a>
                <br />

                {/* Second Link with Arrow Icon */}
                <a
                  href={card.link2}
                  className="mt-2 text-blue-200 hover:text-blue-400 font-medium inline-block"
                >
                  <FaArrowRight className="inline-block mr-1" />
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
