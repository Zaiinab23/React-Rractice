import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title">RANDOM FACTS</Link>
        <Link to="/" className="navbar-links">Home</Link>
        <Link to="/About" className="navbar-links">About Us</Link>
        <Link to="/Contact" className="navbar-links">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
