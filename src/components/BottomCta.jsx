/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function BottomCta() {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <h4>Book a call with me</h4>
          <p>
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <div className="btn-red">
          <a href="#">Free Consultation</a>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <img src="/logo.svg" alt="The Sites logo" />{" "}
        </div>
        <div className="bottom-right">
          <a href="#">Free Consultation</a>
        </div>
      </div>
    </div>
  );
}
