import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../images/Logo .svg";
import MenuShow from "./MenuShow";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo"></img>
      </Link>

      {/* Mobile Navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>

        <Link to="/menu-show" className="nav-item">
          Menu
        </Link>
        <Link to="/booking" className="nav-item">
          Reservations
        </Link>

        <Link to="/login" className="nav-item">
          Login
        </Link>
      </div>
      <Routes>
        <Route path="/"></Route>
        <Route path="/about-me"></Route>
      </Routes>
    </nav>
  );
};

export default Nav;
