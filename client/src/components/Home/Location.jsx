import React from "react";
import {
  MapPin,
  Zap,
  Truck,
  Wrench,
  PaintBucket,
  Hammer,
  Trash2,
} from "lucide-react";

const serviceIcons = {
  "Electrical Work": Zap,
  "Movers and Packers": Truck,
  Plumbing: Wrench,
  Painting: PaintBucket,
  Carpentry: Hammer,
  Cleaning: Trash2,
};

const Location = () => {
  const cities = [
    {
      name: "Ahmedabad",
      services: [
        "Electrical Work",
        "Movers and Packers",
        "Plumbing",
        "Painting",
        "Carpentry",
        "Cleaning",
      ],
      description:
        "HomeMakers offers a wide range of professional services across Ahmedabad, ensuring quality home repair, maintenance solutions.",
    },
    {
      name: "Rajkot",
      services: [
        "Electrical Work",
        "Plumbing",
        "Movers and Packers",
        "Carpentry",
        "Painting",
        "Cleaning",
      ],
      description:
        "In Rajkot, HomeMakers provides essential home services, including electrical repairs, plumbing solutions, and expert carpentry.",
    },
    {
      name: "Vadodara",
      services: [
        "Movers and Packers",
        "Painting",
        "Plumbing",
        "Carpentry",
        "Electrical Work",
        "Cleaning",
      ],
      description:
        "From moving assistance to plumbing fixes, HomeMakers serves Vadodara with a diverse range of reliable home services.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16 leading-tight">
          Our Services <span className="text-blue-600">by City</span>
        </h2>
        <div className="grid gap-10 lg:grid-cols-3">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center">
                  <MapPin className="mr-2" size={24} />
                  {city.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {city.description}
                </p>
                <ul className="space-y-3">
                  {city.services.map((service, idx) => {
                    const Icon = serviceIcons[service] || MapPin;
                    return (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Icon size={20} className="text-blue-500 mr-3" />
                        <span>{service}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
