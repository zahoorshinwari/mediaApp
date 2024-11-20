import React from "react";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: "https://www.w3schools.com/w3images/mountains.jpg",
      name: "Mountain Adventure",
      description: "Explore the beautiful mountain ranges and enjoy nature.",
      link: "https://example.com/mountains",
    },
    {
      id: 2,
      image: "https://www.w3schools.com/w3images/forest.jpg",
      name: "Forest Retreat",
      description: "Relax and rejuvenate in the serene forest environment.",
      link: "https://example.com/forest",
    },
    {
      id: 3,
      image: "https://www.w3schools.com/w3images/lights.jpg",
      name: "City Lights",
      description: "Experience the vibrant nightlife and city adventures.",
      link: "https://example.com/citylights",
    },
    {
      id: 4,
      image: "https://www.w3schools.com/w3images/nature.jpg",
      name: "Nature Escape",
      description: "Reconnect with nature in this peaceful and quiet haven.",
      link: "https://example.com/nature",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto grid gap-6 px-48 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="border rounded-lg shadow-md bg-white overflow-hidden"
        >
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{card.name}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
