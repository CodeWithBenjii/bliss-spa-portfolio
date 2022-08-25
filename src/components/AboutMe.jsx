/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function AboutMe() {
  return (
    <div className="about">
      <div className="about-left">
        <img src="/image-amy.webp" alt="me" />
      </div>
      <div className="about-right">
        <h1 className="about-title">
          I’m Amy, and I’d love to work on your next project
        </h1>
        <p className="about-title">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <div className="btn-red">
          <a href="#">Free Consultation</a>
        </div>
      </div>
    </div>
  );
}
