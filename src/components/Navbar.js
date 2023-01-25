import React from "react";
import { useState } from "react";
import "./Navbar.css";
import header from "../Images/W..svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true)
  const toggleChange = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen)
  }
  return (
    <header>
      <img src={header} alt="company-logo" />
      <div onClick={toggleChange} className={isNavOpen?"burger":"burger2"}>
        <hr className="line"/>
        <hr className="line"/>
        <hr className="line"/>
      </div>
      <div >
        <h1 onClick={toggleChange} className={isNavOpen?"close":"close2"}>X</h1>
      </div>


      <nav className={isNavOpen?"navigation":"navigation2"}>
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
