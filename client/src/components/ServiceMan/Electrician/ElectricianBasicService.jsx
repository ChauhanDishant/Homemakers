import React, { useState } from "react";
import axios from "axios";
import { areas } from "../AllCitiesLocation/AllCitiesLocation";
import toast from "react-hot-toast";

const ElectricianBasicService = () => {
  // Fields for the Basic Service Form
  const [customername, setCustomerName] = useState("");
  const [customeremail, setCustomerEmail] = useState("");
  const [customerphone1, setCustomerPhone1] = useState("");
  const [customerphone2, setCustomerPhone2] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [areaData, setAreaData] = useState([]);
  const [area, setArea] = useState("");
  const [customeraddress, setCustomerAddress] = useState("");
  const [serviceCharge, setServiceCharge] = useState(
    "Basic Service - ₹ 199 /-"
  );
  const [serviceType, setServiceType] = useState("Electrician");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setserviceTime] = useState("");

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);

    // You would typically fetch area data based on the city selection here.
    // Mocking area data for now:

    setAreaData(areas[city] || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.defaults.baseURL = "http://localhost:5000/";
    try {
      const response = await axios.post(
        "/homemakers/service",
        {
          customername: customername,
          customeremail: customeremail,
          customerphone1: customerphone1,
          customerphone2: customerphone2,
          selectedCity: selectedCity,
          area: area,
          customeraddress: customeraddress,
          serviceCharge: serviceCharge,
          serviceType: serviceType,
          serviceDate: serviceDate,
          serviceTime: serviceTime,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Service Requested Successfully");
        window.location.reload();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        error.response.data.errors.forEach((err) => {
          toast.error(`Error in ${err.field}: ${err.message}`); // Display each error
        });
      } else if (error.response && error.response.data.duplicate) {
        toast.error(
          "Duplicate service entry exists for the same day and time with the same service type or charge."
        );
      } else {
        toast.error("An unexpected error occurred. Please try again."); // Fallback error message
      }
    }
  };

  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto m-10 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">
          Basic Service
        </h2>
        <form className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="your-name"
                className="block text-sm font-medium text-blue-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="your-name"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name.."
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="your-email"
                className="block text-sm font-medium text-blue-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="your-email"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your@gmail.com"
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone-1"
                className="block text-sm font-medium text-blue-700"
              >
                Your Phone-1
              </label>
              <input
                type="tel"
                id="phone-1"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone Number"
                onChange={(e) => {
                  setCustomerPhone1(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="phone-2"
                className="block text-sm font-medium text-blue-700"
              >
                Your Phone-2
              </label>
              <input
                type="tel"
                id="phone-2"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone Number"
                onChange={(e) => {
                  setCustomerPhone2(e.target.value);
                }}
              />
            </div>
          </div>

          {/* City and Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="city-select"
                className="block text-sm font-medium text-blue-700"
              >
                Select a City:
              </label>
              <select
                id="city-select"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleCityChange}
                value={selectedCity}
              >
                <option value="">--Select a City--</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Vadodara">Vadodara</option>
              </select>
            </div>

            {selectedCity && (
              <div>
                <label
                  htmlFor="area-select"
                  className="block text-sm font-medium text-green-600"
                >
                  Area in {selectedCity}:
                </label>
                <select
                  id="area-select"
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                >
                  <option value="">--Select an Area--</option>
                  {areaData.map((area, index) => (
                    <option key={index} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-blue-700"
            >
              Your Address
            </label>
            <textarea
              id="address"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Address"
              onChange={(e) => {
                setCustomerAddress(e.target.value);
              }}
              rows="3"
            />
          </div>

          {/* Service Charge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="service-date"
                className="block text-sm font-medium text-blue-700"
              >
                Service Date
              </label>
              <input
                type="date"
                id="Date"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min={new Date().toISOString().split("T")[0]} // Set min to today's date
                onChange={(e) => {
                  setServiceDate(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="service-date"
                className="block text-sm font-medium text-blue-700"
              >
                Expected Time
              </label>
              <input
                type="time"
                id="Time"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => {
                  setserviceTime(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-lg font-semibold text-blue-500">
              Service Charge: <span className="text-black"> ₹ 199 /-</span>
            </div>
            <div className="text-lg font-semibold text-blue-500">
              Service Type: <span className="text-black"> Electrician</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ElectricianBasicService;
