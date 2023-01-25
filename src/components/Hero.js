import React from "react";
import HeroImg from "../Images/Hero.svg";
import imgone from "../Images/Bitmap.svg";
import imgtwo from "../Images/Bitmap-2.svg";
import imgthree from "../Images/Bitmap-3.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="main">
      <img className="img-hero" src={HeroImg} alt="#" />
      <div className="text">
        <p className="text-item">The Bright Future of Web 3.0?</p>{" "}
      </div>
      <div className="text-2">
        <p className="gunmetal">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="gunmetal-button">Read More</button>
      </div>
      <div className="black-container">
        <h1 className="container-head">New</h1>
        <div>
          <h4 className="head-two">Hydrogen VS Electric Cars</h4>
          <p className="container-text">Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr />
        </div>
        <div>
          <h4 className="head-two">The Downsides of AI Artistry</h4>
          <p className="container-text">What are the possible adverse effects of on-demand AI image generation?</p>
          <hr />
        </div>
        <div>
          <h4 className="head-two">Is VC Funding Drying Up?</h4>
          <p className="container-text">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>

      <div className="img-1">
        <img src={imgone} alt="#" />
        <div>
          <h1>01</h1>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className="img-2">
        <img src={imgtwo} alt="#" />
        <div>
          <h1>02</h1>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>

      <div className="img-3">
        <img src={imgthree} alt="#" />
        <div>
          <h1>03</h1>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
