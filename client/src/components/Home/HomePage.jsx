import React from "react";
import FeaturedServices from "./FeaturedServices";
import Helmet from "react-helmet";
import { Choose } from "./Choose";
import Location from "./Location";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <section className="py-20 sm:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 lg:pr-12">
                <h1 className="text-indigo-600 font-semibold text-sm sm:text-base uppercase tracking-wide mb-3">
                  Expert Home Services at Your Doorstep
                </h1>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  Your Trusted Partner for Plumbing, Electrical, and More
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  At HomeMakers, we provide top-notch home repair services to
                  ensure your home runs smoothly. From plumbing and electrical
                  work to cleaning and painting, our skilled professionals are
                  here to help you with all your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out"
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    Explore Our Services
                  </button>
                  <button
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Get in Touch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-300 transform -rotate-6 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-indigo-400 transform rotate-3 rounded-3xl"></div>
                  <div className="relative">
                    <img
                      src="HomeBackground.jpg"
                      alt="Professional service provider"
                      className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                      style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 90%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-indigo-400 opacity-20 rounded-3xl"
                      style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 90%)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20 filter blur-3xl"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-300 rounded-full opacity-20 filter blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
        <FeaturedServices />
        <Choose />
        <Location />
      </div>
    </>
  );
}
