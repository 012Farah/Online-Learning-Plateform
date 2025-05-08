import { Link } from "react-router-dom";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyApp
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/about-us" className="nav-links">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-in" className="nav-links">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Courses" className="nav-links">
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
