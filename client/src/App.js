import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx"; // Import Footer component
import Contact from "./components/Contact/Contact";
import { Mission } from "./components/Our Mission/Mission";
import { OurTeam } from "./components/Our Team/OurTeam";
import Home from "./components/Home/HomePage.jsx";
import Services from "./components/Services/Services.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is now placed inside BrowserRouter but outside of Routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
