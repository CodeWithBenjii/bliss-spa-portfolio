/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function MyWork() {
  return (
    <div className="my-work">
      <h4 className="my-work-subtitle">My Work</h4>

      <div className="my-work-slider">
        <img src="/image-slide-1.jpg" />
        <img src="/image-slide-2.jpg" />
        <img src="/image-slide-3.jpg" />
        <img src="/image-slide-4.jpg" />
        <img src="/image-slide-5.jpg" />
      </div>
      <div className="my-work-slider-btn">
        <span className="my-work-slider-btn-span-left">
          <img src="/icon-arrow-left.svg" />
        </span>
        <span className="my-work-slider-btn-span-right">
          <img src="/icon-arrow-right.svg" />
        </span>
      </div>
    </div>
  );
}
