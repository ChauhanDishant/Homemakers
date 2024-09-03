import React, { useState } from "react";

const BookingForm = () => {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">
        Book a Service
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Select Service
          </label>
          <select
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="carpentry">Carpentry</option>
            <option value="plumbing">Plumbing</option>
            <option value="painting">Painting</option>
            <option value="moving">Moving</option>
            <option value="packing">Packing</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Select Date and Time
          </label>
          <input
            type="date"
            className="w-full border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Enter Your Details
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-3 rounded-lg font-semibold hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 focus:ring-4 focus:ring-indigo-300"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
