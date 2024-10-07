import React from "react";

export const Choose = () => {
  return (
    <>
      <section className="relative bg-gray-50 py-16 overflow-hidden">
        {/* Curved Background */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute bottom-0 w-full h-auto"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff" // This can be any background color of your choice
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,218.7C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto relativetext-center">
          <h2 className="text-4xl font-extrabold text-indigo-600 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
              <img
                src="./Reliable.jpg"
                alt="Experienced & Reliable"
                className="mx-auto w-24 h-24 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                Experienced & Reliable
              </h3>
              <p className="text-gray-600 text-base">
                At HomeMakers, we're a dynamic startup with a dedicated team of
                passionate professionals. Our approach empowers our workforce
                through certified training centers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
              <img
                src="./Price_Icon.png"
                alt="Transparent Pricing"
                className="mx-auto w-24 h-24 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-base">
                At HomeMakers, transparency is at the core of our pricing
                philosophy. We believe in providing clear and straightforward
                pricing, ensuring our clients understand the value they receive.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
              <img
                src="./Customer_Support.jpg"
                alt="Customer Support"
                className="mx-auto w-24 h-24 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                Customer Support
              </h3>
              <p className="text-gray-600 text-base">
                At HomeMakers, our commitment to exceptional service extends to
                our specialized customer support teams tailored for each
                service, be it plumbing, electrical, carpentry, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
