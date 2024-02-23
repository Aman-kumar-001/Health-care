import React from "react";
import "../about/about.css";
import IMG from "../../images/about-img.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-photo">
        <img src={IMG}></img>
      </div>
      <div className="about-text">
        <div className="a-text">
          <h1 className="a-h1">ABOUT US</h1>
          <p className="a-para">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>

          <button className="a-button">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
