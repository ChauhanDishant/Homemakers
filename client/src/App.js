import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Navbar/Navbar";
import Signup from "./components/Signup";
import Login from "./components/login";
import Contact from "./components/Contact/Contact";
import { Mission } from "./components/Our Mission/Mission";
import { OurTeam } from "./components/Our Team/OurTeam";
import { Service } from "./components/Service/Service"; // Assuming you have a generic Service component
import Services from "./components/Services/Services";

function App() {
  const user = localStorage.getItem("token");

  let services = [
    {
      name: "Electrician",
      source: "Service_Electrician.webp",
      description:
        "Experienced electricians providing a wide range of electrical services including installations, repairs, and maintenance for residential and commercial properties.",
      content:
        "At our company, we pride ourselves on offering top-notch electrical services tailored to meet the needs of both residential and commercial properties. With a team of highly skilled and experienced electricians, we ensure that every project, big or small, is completed with the utmost precision and professionalism. Our services include:",
      paragraph:
        "Residential Installations: Whether you are building a new home or renovating an existing one, our electricians are equipped to handle all your electrical installation needs. From wiring and lighting to smart home systems, we ensure that your home is equipped with safe and efficient electrical solutions.",
    },
    {
      name: "Movers-Packers",
      source: "Service_Movers.jpg",
      description:
        "Reliable movers and packers offering efficient and secure moving services for residential and commercial clients. We handle all your belongings with care and ensure a smooth relocation process.",
    },
    {
      name: "Painter",
      source: "Service_Painter.jpg",
      description:
        "Professional painters delivering high-quality painting services for interiors and exteriors. We use premium paints and techniques to transform your space and enhance its aesthetics.",
    },
    {
      name: "Plumber",
      source: "Service_Plumber.webp",
      description:
        "Licensed plumbers providing comprehensive plumbing solutions for households and businesses. From leak repairs to pipe installations, we deliver prompt and reliable services.",
    },
    {
      name: "Security-Guard",
      source: "Security_Guard.png",
      description:
        "Trained security guards offering top-notch security services for residential complexes, commercial buildings, and events. Our guards are vigilant and dedicated to ensuring the safety of your premises.",
    },
    {
      name: "Sweeper",
      source: "Sweeper.jpg",
      description:
        "Efficient sweepers offering thorough cleaning services for homes, offices, and public spaces. We use advanced equipment and eco-friendly cleaning products to achieve spotless results.",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />

          {services.map((service) => (
            <Route
              key={service.name}
              path={`/service/${service.name.toLowerCase()}`}
              element={<Service {...service} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
