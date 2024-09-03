import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ShoppingCart, Plus, Minus, Image as ImageIcon } from "lucide-react";

const ElectricianStandardService = () => {
  const [cart, setCart] = useState({});

  const categories = [
    {
      name: "Switchboards and Sockets",
      items: [
        {
          id: "sb001",
          imageUrl: "/Electrician_SwitchBoard.jpg",
          name: "Standard Switchboard",
          price: 500,
          description: "2-module switchboard",
        },
        {
          id: "sk001",
          imageUrl: "/Electrician_Socket.jpeg",
          name: "Modular Socket",
          price: 250,
          description: "5A socket",
        },
      ],
    },
    {
      name: "Fans",
      items: [
        {
          id: "fn001",
          imageUrl: "/Electrician_CeilingFan.jpg",
          name: "Ceiling Fan",
          price: 2000,
          description: "3-blade, 1200mm",
        },
        {
          id: "fn002",
          imageUrl: "/Electrician_WallFan.jpg",
          name: "Wall Fan",
          price: 1500,
          description: "400mm sweep",
        },
      ],
    },
    {
      name: "Wiring",
      items: [
        {
          id: "wr001",
          imageUrl: "/Electrician_WiringCable.jpg",
          name: "Electrical Wiring Cable",
          price: 1000,
          description: "1 roll, 100 meters",
        },
        {
          id: "wr002",
          imageUrl: "/Electrician_WiringKit.jpg",
          name: "Wiring Kit",
          price: 500,
          description: "Includes connectors and tools",
        },
      ],
    },
    {
      name: "Doorbell",
      items: [
        {
          id: "db001",
          imageUrl: "/Electrician_Doorbell.jpg",
          name: "Basic Doorbell",
          price: 300,
          description: "Simple wired doorbell",
        },
        {
          id: "db002",
          imageUrl: "/Electrician_WirelessDoorbell.jpg",
          name: "Wireless Doorbell",
          price: 800,
          description: "Wireless doorbell with chime",
        },
      ],
    },
    {
      name: "Light",
      items: [
        {
          id: "lt001",
          imageUrl: "/Electrician_LedBulb.jpg",
          name: "LED Bulb",
          price: 150,
          description: "9W, warm white",
        },
        {
          id: "lt002",
          imageUrl: "/Electrician_CeilingLight.jpg",
          name: "Ceiling Light",
          price: 1200,
          description: "Flush mount ceiling light",
        },
      ],
    },
  ];

  const handleQuantityChange = (itemId, change) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: Math.max(0, (prevCart[itemId] || 0) + change),
    }));
  };

  // Calculate total price based on cart quantities
  const calculateTotalPrice = () => {
    return categories.reduce((total, category) => {
      return (
        total +
        category.items.reduce((categoryTotal, item) => {
          const quantity = cart[item.id] || 0;
          return categoryTotal + quantity * item.price;
        }, 0)
      );
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      <Helmet>
        <title>Professional Electrical Products and Services</title>
      </Helmet>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 m-8 text-center">
            Professional Electrical Solutions
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
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold">
                            {cart[item.id] || 0}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
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
      <div className="fixed bottom-8 right-8">
        <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
          <ShoppingCart size={24} />
          <span className="ml-2 text-lg font-semibold">
            ₹{totalPrice.toLocaleString()}
          </span>
        </button>
      </div>
    </>
  );
};

export default ElectricianStandardService;
