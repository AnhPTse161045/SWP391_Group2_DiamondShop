import React from "react";
import "./Hero.css";
import backgroundImage from "../assets/diamond2.png"; // Add your background image here

export default function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Discover the Finest Diamonds</h1>
        <p>Experience luxury like never before</p>
        <a href="/shop" className="cta-btn">Shop Now</a>
      </div>
    </div>
  );
}
