import React from "react";
import "./Navbar.css";
import logo from "../../assets/bird_2.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Porfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
