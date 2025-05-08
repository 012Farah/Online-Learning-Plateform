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
import NotFound from './Pages/NotFound.jsx';




export default function App() {

 
  
  return (
    
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWithNavbar element={HomePage} />} />
        <Route path="/index" element={<RouteWithNavbar element={HomePage} />} />
        <Route path="/home" element={<RouteWithNavbar element={HomePage} />} />
        <Route path="/homepage" element={<RouteWithNavbar element={HomePage} />} />
        <Route path="/about-us" element={<RouteWithNavbar element={AboutUs} />} />
        <Route path="/contact-us" element={<RouteWithNavbar element={ContactUs} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/blog" element={<RouteWithNavbar element={Blog} />} />
        <Route path="/blog/:id" element={<RouteWithNavbar element={Singlepage} />} />
        <Route path="/404" element={<NotFound />} /> 
            <Route path="*" element={<NotFound />} /> 
        <Route path="/admin" element={<Layout />}> 
          <Route index element={<Homedash />} />
          <Route path="setting" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}
// function to add the navbar to specifc pages
function RouteWithNavbar({ element: Component, ...rest }) {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}
