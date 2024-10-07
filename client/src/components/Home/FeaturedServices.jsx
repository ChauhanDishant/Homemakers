import React from "react";

import { Star, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Electrical Work",
    rating: 4.8,
    image: "Service_Electrician.webp",
    description:
      "Our certified electricians handle everything from minor repairs to complex installations, ensuring safety and efficiency. We provide top-quality electrical services tailored to your specific needs.",
  },

  {
    title: "Movers and Packers",
    rating: 4.7,
    image: "Service_Movers.jpg",
    description:
      "Our movers ensure a hassle-free relocation experience, from carefully packing your belongings to safely transporting them. We handle both local and long-distance moves with care and expertise.",
  },

  {
    title: "Plumbing",
    rating: 4.9,
    image: "Service_Plumber.webp",
    description:
      "Our expert plumbers offer fast and reliable solutions for all household plumbing needs. From fixing leaks to installing fixtures, we ensure everything runs smoothly and we ensure that in future, you should not be worried. ",
  },

  {
    title: "Painting",
    rating: 4.8,
    image: "Service_Painter.jpg",
    description:
      "Revitalize your space with our professional painting services. We deliver clean lines and vibrant colors for a beautifully finished home.",
  },

  {
    title: "Carpentry",
    rating: 4.6,
    image: "Service_Carpenter.avif",
    description:
      "Our skilled carpenters handle everything from custom furniture to home repairs with precision and care. We bring craftsmanship and creativity to every project.",
  },

  {
    title: "Cleaning",
    rating: 4.7,
    image: "Service_Cleaner.jpg",
    description:
      "Our deep cleaning services leave your home spotless and sanitized. We ensure a fresh, clean environment with professional attention to detail.",
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-indigo-600">
          Our Featured Services
        </h2>
        <p className="text-4xl font-bold text-center max-w-2xl text-gray-800 mx-auto">
          Hire professionals
        </p>
        <p className="text-4xl font-bold mb-6 text-center max-w-2xl text-grayp-800 mx-auto">
          Experienced specifically for your needs{" "}
        </p>

        <p className="text-xl text-gray-500 mb-12 text-center">
          HomeMakers offers certified workers with a reliable service guarantee.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-md w-full group"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg font-semibold">
                  New
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 w-5 h-5 fill-current" />
                    <span className="ml-2 text-gray-700 font-medium">
                      {service.rating}
                    </span>
                  </div>
                  <button className="text-blue-500 font-medium flex items-center transition-colors duration-300 hover:text-blue-600">
                    Book Now
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
