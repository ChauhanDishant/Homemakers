import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import axios from "axios";
import emailjs from "emailjs-com";
import { areas } from "../AllCitiesLocation/AllCitiesLocation";
import toast from "react-hot-toast";

const PainterStandardService = () => {
  // Fields for the Basic Service Form
  const [customername, setCustomerName] = useState("");
  const [customeremail, setCustomerEmail] = useState("");
  const [customerphone1, setCustomerPhone1] = useState("");
  const [customerphone2, setCustomerPhone2] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [areaData, setAreaData] = useState([]);
  const [area, setArea] = useState("");
  const [customeraddress, setCustomerAddress] = useState("");
  const [serviceCharge, setServiceCharge] = useState("Standar Service");
  const [serviceType, setServiceType] = useState("Painter");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);

    // You would typically fetch area data based on the city selection here.
    // Mocking area data for now:
    setAreaData(areas[city] || []);
  };

  //-----------------------------------------------------
  const [cart, setCart] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const categories = [
    {
      name: "Painting Tools",
      items: [
        {
          id: "pt001",
          imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSa4r2THpk5I1JDCZejUTXk4_yVqH8EBzXWIiEGEwPoep9WPe80DZW19SOH2ePa-7czcl9frbe5ScgsxLMH-RTRciVxOww8Qiyvz8V0ct4iyCWU04vvdl5U6A&usqp=CAE",
          name: "Paint Brush Set",
          price: 50,
          description: "Set of 5, assorted sizes",
        },
        {
          id: "pt002",
          imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzR1Nlp5oDuLCf1hdw8xmcNeLGEkij9zjpVFri2rBu6sibHL1aYtRKxyQWajgVW0DVXPSbuRLmnkZprjRkWmA8YLb-9_1ESJlzU7-7Rpf_&usqp=CAE",
          name: "Paint Roller",
          price: 250,
          description: "9-inch roller with extra cover",
        },
      ],
    },
    {
      name: "Paint Types",
      items: [
        {
          id: "pt003",
          imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0hzk47r0KVVnarEy_AYmaQr06HqR-Q87QW1xrh6ejRKgE1zEsMQmW54OjoHE5wJrEZWZPhwdT0a5vTq-4pyDrps-elmze453ZivWFu3c&usqp=CAE",
          name: "Emulsion Paint",
          price: 550,
          description: "1 liter, washable",
        },
        {
          id: "pt004",
          imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTaRDH5sRzoG_0HKZF0_wS8DKqF9ue3ijPSxoKAgLHrf3oN8C1Yw2DLTW_sV2V-bUuV9T9mT36ptLYAYmgGCNpC4SAGDBvIE4x8hn2wDkc&usqp=CAE",
          name: "Enamel Paint",
          price: 170,
          description: "1 liter, glossy finish",
        },
      ],
    },
    {
      name: "Protective Gear",
      items: [
        {
          id: "pt005",
          imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSter5qp52Dg7FCgyefLeL2vTEZe9sxUvPlmHApFSjcWWhpIxjbLGknrJMYpsgivjymUr_AHxpWkwKtNzLs85bOtob2ppC0Af5ofjdVmDeSx0hZRixWZEBNGw&usqp=CAE",
          name: "Face Mask",
          price: 389,
          description: "Pack of 3, dust protection",
        },
        {
          id: "pt006",
          imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRb_bIx9mwqeZWvZTDhAdZ6BQNvW3-bhPqfUtqLbPRMkx759_EGzHPvjgTlbwUSGcPSB2F9STdf0X7MIU39ePlWXH71YE7tQtr5kGfVQX5xhA1mCn_Spssb&usqp=CAE",
          name: "Safety Gloves",
          price: 130,
          description: "Pair, latex-free",
        },
      ],
    },
    {
      name: "Cleaning Supplies",
      items: [
        {
          id: "pt007",
          imageUrl: "https://paintnhardware.com/2754-large_default/asian-paints-pu-thinner.jpg",
          name: "Paint Thinner",
          price: 295,
          description: "1 liter, solvent-based",
        },
        {
          id: "pt008",
          imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTXt8b30beBZpe8Q1k3LDoecRztsRfTdECb8_GmhimyJbvivIek_3fmNaM8YKxuCAYfj2_-St0G7rCCNl7wQjSvlX_KGD3om_Ueb7-W2LcVG2rxgzOXL4H-&usqp=CAE",
          name: "Brush Cleaner",
          price: 150,
          description: "500 ml, non-toxic",
        },
      ],
    },
  ];

  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[item.id]?.quantity || 0; // Get current quantity or default to 0
      const newQuantity = Math.max(0, currentQuantity + change); // Ensure quantity doesn't go below 0
      if (newQuantity === 0) {
        const { [item.id]: removedItem, ...newCart } = prevCart; // Remove item from cart if quantity is 0
        return newCart;
      }
      return {
        ...prevCart,
        [item.id]: {
          name: item.name,
          quantity: newQuantity,
          price: item.price,
        },
      };
    });
  };

  // Calculate total price based on cart quantities
  const calculateTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => {
      return total + item.quantity * item.price; // Sum up total price from the cart
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  const convertTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);

    const suffix = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert hour '0' to '12'

    return `${hours}:${minutes} ${suffix}`;
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    axios.defaults.baseURL = "http://localhost:5000/";
    e.preventDefault();

    const formattedServiceTime = convertTo12HourFormat(serviceTime);
    // Convert the service time to Date for easier comparison
    const [hours, minutes] = serviceTime.split(":").map(Number);
    const timeInMinutes = hours * 60 + minutes; // Convert to total minutes

    // Calculate the ranges for 10:00 AM and 9:00 PM
    const tenAM = 10 * 60; // 10:00 AM in minutes
    const ninePM = 21 * 60; // 9:00 PM in minutes

    // Check if the service time is within the valid range
    if (timeInMinutes < tenAM || timeInMinutes > ninePM) {
      alert("Service Time must be between 10:00 AM and 9:00 PM.");
      return; // Exit the function early to prevent form submission
    }

    const cartItems = Object.entries(cart).map(([id, item]) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    try {
      const response = await axios.post(
        "/homemakers/service",
        {
          customername,
          customeremail,
          customerphone1,
          customerphone2,
          selectedCity,
          area,
          customeraddress,
          serviceCharge,
          serviceType,
          serviceDate,
          serviceTime: formattedServiceTime,
          cart: cartItems,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        const templateParams = {
          to_name: customeremail,
          customername,
          serviceType,
          serviceCharge,
          serviceDate,
          serviceTime: formattedServiceTime,
          customeraddress,
          area,
          selectedCity,
        };

        emailjs
          .send(
            "Dishant Chauhan",
            "template_nka8iro",
            templateParams,
            "NFxXfztPlslsc_P7M"
          )
          .then((result) => {
            console.log(result);
            toast.success("Service Booked");
          })
          .catch((emailError) => {
            console.error("Error in sending the email", emailError);
            toast.error("Failed to Submit the Data");
          });

        // Clear form fields
        setCart({});
        setCustomerName("");
        setCustomerEmail("");
        setCustomerAddress("");
        setCustomerPhone1("");
        setCustomerPhone2("");
        setSelectedCity("");
        setArea("");
        setServiceTime(""); // Reset to an empty string
        setServiceDate("");

        alert(response.data.message); // Display success message
        closeModal(); // Close modal after submission
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting the form");
    }
  };

  return (
    <>
      <Helmet>
        <title>Professional Painter Products and Services</title>
      </Helmet>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 m-8 text-center">
            Professional Painter Solutions
          </h1>
          {categories.map((category, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-8">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-indigo-600">
                          ₹{item.price}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item, -1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold">
                            {cart[item.id]?.quantity || 0}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item, 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="fixed bottom-8 right-8 z-50">
        <button
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          onClick={openModal}
        >
          <ShoppingCart size={24} />
          <span className="ml-2">Total: ₹{totalPrice}</span>
        </button>
      </div>

      {modalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl md:max-w-3xl sm:max-w-full overflow-y-auto max-h-screen">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center sm:text-lg">
                Customer Information
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Use grid system with two columns */}
                  <input
                    type="text"
                    id="your-name"
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                    }}
                    name="customername"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name.."
                    required
                  />
                  <input
                    type="email"
                    id="your-email"
                    onChange={(e) => {
                      setCustomerEmail(e.target.value);
                    }}
                    name="customeremail"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email.."
                    required
                  />
                  <input
                    type="tel"
                    id="your-phone1"
                    onChange={(e) => {
                      setCustomerPhone1(e.target.value);
                    }}
                    name="customerphone1"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Phone Number 1.."
                    required
                  />
                  <input
                    type="tel"
                    id="your-phone2"
                    onChange={(e) => {
                      setCustomerPhone2(e.target.value);
                    }}
                    name="customerphone2"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Phone Number 2.."
                  />
                  <div className="w-full">
                    <label
                      htmlFor="city-select"
                      className="block text-sm font-medium text-green-600"
                    >
                      City:
                    </label>
                    <select
                      id="city-select"
                      value={selectedCity}
                      onChange={handleCityChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">--Select a City--</option>
                      <option value="Vadodara">Vadodara</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Rajkot">Rajkot</option>
                    </select>
                  </div>
                  {selectedCity && areaData.length > 0 && (
                    <div className="w-full">
                      <label
                        htmlFor="area-select"
                        className="block text-sm font-medium text-green-600"
                      >
                        Area in {selectedCity}:
                      </label>
                      <select
                        id="area-select"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setArea(e.target.value)}
                      >
                        <option value="">--Select an Area--</option>
                        {areaData.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <input
                    type="text"
                    id="address"
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Address.."
                    required
                  />
                  <input
                    type="date"
                    id="serviceDate"
                    onChange={(e) => setServiceDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="time"
                    id="serviceTime"
                    onChange={(e) => setServiceTime(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mt-4">
                  <div className="grid grid-cols-2">
                    <p className="text-lg font-semibold text-gray-600">
                      Appliances Charge: ₹ {totalPrice}/-
                    </p>
                    <p className="text-lg font-semibold text-gray-600">
                      Installation Charge: ₹ 499/-
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-gray-600">
                    Total Charge: ₹ {totalPrice + 499}/-
                  </p>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="submit"
                    className="bg-green-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Book Service
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PainterStandardService;
