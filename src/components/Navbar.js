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
            <a href="google.com">Home</a>
          </li>
          <li>
            <a href="google.com">New</a>
          </li>
          <li>
            <a href="google.com">Popular</a>
          </li>
          <li>
            <a href="google.com">Trending</a>
          </li>
          <li>
            <a href="google.com">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
