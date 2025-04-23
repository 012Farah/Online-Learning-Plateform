import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import { HomePage } from "./Pages/HomePage.jsx";
import Homedash from "./Admin/Homedash/Homedash.jsx";
import Settings from "./Admin/setting/setting.jsx";
import Layout from "./Admin/Layout/Layout.jsx";
import  { Blog } from "./Pages/Blog.jsx";
import Singlepage from "./Pages/Singlepage.jsx";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/index" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Singlepage />} />

       

        <Route path="/admin" element={<Layout />}>
        <Route index element={<Homedash />} />
        <Route path="setting" element={<Settings />} />
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
