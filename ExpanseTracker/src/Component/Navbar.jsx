// src/Component/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ title = "Dashboard" }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (path) => {
    setIsOpen(false); // Close menu on click
    navigate(path);
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">{title}</h1>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-buttons desktop">
        <button onClick={() => handleNavigate("/dashboard")}>Home</button>
        <button onClick={() => handleNavigate("/addAccount")}>Account</button>
        <button onClick={() => handleNavigate("/addCategory")}>Category</button>
        <button onClick={() => handleNavigate("/addTransaction")}>Transaction</button>
        <button>Budget</button>
        <button>Friend</button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="navbar-buttons mobile">
          <button onClick={() => handleNavigate("/dashboard")}>Home</button>
          <button onClick={() => handleNavigate("/addAccount")}>Account</button>
          <button onClick={() => handleNavigate("/addCategory")}>Category</button>
          <button onClick={() => handleNavigate("/addTransaction")}>Transaction</button>
          <button>Budget</button>
          <button>Friend</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
