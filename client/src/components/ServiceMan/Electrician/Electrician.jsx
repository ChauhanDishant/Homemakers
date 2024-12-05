import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";

const PricingCard = ({ title, description, price, link }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-gray-900 font-bold text-2xl mb-4">{price}</div>
        <button
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={() => {
            navigate(link); // Corrected the navigate function
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

const ElectricianPricing = () => {
  const pricingOptions = [
    {
      title: "Basic Service",
      description: "Includes inspection and minor repairs.",
      price: "₹199 (Visiting Charge)",
      link: "/services/electrician/basicservice",
    },
    {
      title: "Standard Service",
      description: "Includes basic service plus wiring and installation.",
      price: "Depends on Appliance",
      link: "/services/electrician/standardservice",
    },
    {
      title: "Premium Service",
      description: "All-inclusive service with emergency repairs.",
      price: "₹499 + Appliance Charges",
      link: "/services/electrician/premiumservice",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Electrician Pricing</title>{" "}
        {/* Moved Helmet to ElectricianPricing */}
      </Helmet>
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Electrician Pricing
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the right service package for your needs.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4">
            {pricingOptions.map((option, index) => (
              <PricingCard key={index} {...option} /> // Using index as the key is fine for static data
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectricianPricing;
