import React from "react";
import "./Navbar.css";
import header from "../Images/W..svg";

const Navbar = () => {
  return (
    <header>
      <img src={header} alt="company-logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
