/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function HeroSection() {
  return (
    <div className="hero-container page-layout">
      <div className="hero-text">
        <h1>Design solutions made easy</h1>
        <p>
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
      </div>
      <div className="cards-container">
        <div className="card graphic-design">
          <img src="/pattern-graphic-design.svg" className="card-image" />
          <h3 className="card-title">Graphic Design</h3>
        </div>
        <div className="card ui-ux">
          <img src="/pattern-ui-ux.svg" className="card-image" />
          <h3 className="card-title">UI/UX</h3>
        </div>
        <div className="card apps">
          <img src="/pattern-apps.svg" className="card-image" />
          <h3 className="card-title">Apps</h3>
        </div>
        <div className="card photography">
          <img src="/pattern-photography.svg" className="card-image" />
          <h3 className="card-title">Photography</h3>
        </div>
        <div className="card illustrations">
          <img src="/pattern-illustrations.svg" className="card-image" />
          <h3 className="card-title">Illustrations</h3>
        </div>
        <div className="card motion-graphics">
          <img src="/pattern-motion-graphics.svg" className="card-image" />
          <h3 className="card-title">Motion Graphics</h3>
        </div>
      </div>
    </div>
  );
}
