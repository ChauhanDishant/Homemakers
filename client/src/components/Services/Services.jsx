import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Carpentry",
    description: "Professional carpentry services for all your needs.",
    imgSrc: "Carpenters.jpg",
    link: "/carpentry",
  },
  {
    name: "Painter",
    description: "Expert painting services for homes and offices.",
    imgSrc: "Painters.jpg",
    link: "/painter",
  },
  {
    name: "Movers & Packers",
    description: "Safe and reliable moving and packing services.",
    imgSrc: "MoversandPackers.jpg",
    link: "/movers",
  },
  {
    name: "Electrician",
    description: "Certified electricians for all electrical work.",
    imgSrc: "Electrician.jpg",
    link: "/electrician",
  },
  {
    name: "Plumbing",
    description: "Quick and efficient plumbing solutions.",
    imgSrc: "Plumber.png",
    link: "/plumbing",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.imgSrc}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="block text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Choose Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
