import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";


import Navbar from "./components/Navbar";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import { HomePage } from "./Pages/HomePage.jsx";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
<<<<<<< Updated upstream

        <Route path="/" element={<HomePage />} />
        <Route path="/index" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home-page" element={<HomePage />} />
>>>>>>> Stashed changes
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgotPassword />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}
