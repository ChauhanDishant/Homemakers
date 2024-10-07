import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx"; // Import Footer component
import Contact from "./components/Contact/Contact";
import { Mission } from "./components/Our Mission/Mission";
import Team from "./components/Team/Team.jsx";
import Home from "./components/Home/HomePage.jsx";
import Services from "./components/Services/Service.jsx";
import Signup from "./components/Authentication/Signup/Signup.jsx";
import Login from "./components/Authentication/Login/Login.jsx";
import BookingForm from "./components/BookingForm/BookingForm.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";

// Import from the Service Man
import Carpenter from "./components/ServiceMan/Carpenter/Carpenter.jsx";
import Cleaner from "./components/ServiceMan/Cleaner/Cleaner.jsx";
import Electrician from "./components/ServiceMan/Electrician/Electrician.jsx";
import ElectricianBasicService from "./components/ServiceMan/Electrician/ElectricianBasicService.jsx";
import MoversandPackers from "./components/ServiceMan/MoversandPackers/MoversandPackers.jsx";
import Painter from "./components/ServiceMan/Painter/Painter.jsx";
import Plumber from "./components/ServiceMan/Plumber/Plumber.jsx";
import ElectricianStandardService from "./components/ServiceMan/Electrician/ElectricianStandardService.jsx";
import ElectricianPremiumService from "./components/ServiceMan/Electrician/ElectricianPremiumService.jsx";
import { Toaster } from "react-hot-toast"; // Import Toaster and toast
import ProtectedRoute from "./components/Authentication/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />

          {/* Protected routes */}
          <Route
            path="/booking"
            element={<ProtectedRoute element={BookingForm} />} // Pass component reference
          />
          <Route
            path="/services/electrician/basicservice"
            element={<ProtectedRoute element={ElectricianBasicService} />}
          />
          <Route
            path="/services/electrician/standardservice"
            element={<ProtectedRoute element={ElectricianStandardService} />}
          />
          <Route
            path="/services/electrician/premiumservice"
            element={<ProtectedRoute element={ElectricianPremiumService} />}
          />
          {/* Other routes */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />

          {/* Routing for the Service Man */}
          <Route path="/services/carpenter" element={<Carpenter />} />
          <Route path="/services/cleaner" element={<Cleaner />} />
          <Route path="/services/electrician" element={<Electrician />} />
          <Route
            path="/services/moversandpackers"
            element={<MoversandPackers />}
          />
          <Route path="/services/painter" element={<Painter />} />
          <Route path="/services/plumber" element={<Plumber />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
