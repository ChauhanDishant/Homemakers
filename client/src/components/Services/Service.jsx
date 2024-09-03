import React from "react";
import { Zap, Droplet, Truck, Hammer, PaintBucket } from "lucide-react";
import { MdDryCleaning } from "react-icons/md";
import { Choose } from "../Home/Choose";
import { useNavigate } from "react-router";

const ServiceCard = ({ title, icon: Icon, description, link }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-50">
        <div className="mb-4 flex justify-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Icon className="h-8 w-8" />
          </div>
        </div>
        <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="mb-6 text-center text-gray-600">{description}</p>
        <button
          className="w-full rounded-md bg-blue-600 py-2 text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => {
            navigate(link);
          }}
        >
          Book Service
        </button>
      </div>
    </div>
  );
};

const Service = () => {
  const services = [
    {
      title: "Electrician",
      icon: Zap,
      description:
        "Expert electrical services for all your home and business needs.",
      link: "/services/electrician",
    },
    {
      title: "Plumber",
      icon: Droplet,
      description:
        "Professional plumbing solutions to keep your pipes flowing smoothly.",
      link: "/services/plumber",
    },
    {
      title: "Cleaner",
      icon: MdDryCleaning,
      description: "Thorough cleaning services to make your space sparkle.",
      link: "/services/cleaner",
    },
    {
      title: "Movers and Packers",
      icon: Truck,
      description:
        "Reliable moving and packing services for a stress-free relocation.",
      link: "/services/moversandpackers",
    },
    {
      title: "Carpenter",
      icon: Hammer,
      description:
        "Skilled carpentry work for custom furniture and home improvements.",
      link: "/services/carpenter",
    },
    {
      title: "Painter",
      icon: PaintBucket,
      description:
        "Professional painting services to transform your living spaces.",
      link: "/services/painter",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-100 to-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:mb-20">
            <span className="mb-2 block text-xl font-semibold text-blue-600">
              Our Services
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-[40px]">
              What We Offer
            </h2>
            <p className="mx-auto max-w-[710px] text-base text-gray-700">
              Discover our range of professional services designed to meet all
              your home maintenance and improvement needs.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap mb-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <Choose />
      </section>
    </>
  );
};

export default Service;
