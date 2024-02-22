import React from "react";
import "../navbar-slider/navbar.css";
// import IMG from "../../images/hero-bg.png";

function Navbar() {
  return (
    <div className="outer-nav">
      <div className="nav">
        <div className="logo">
          Health<sub>Care</sub>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a href="#">ABOUTUS</a>
            </li>
            <li>
              <a href="#">DEPARTMENT</a>
            </li>
            <li>
              <a href="#">DOCTORS</a>
            </li>
            <li>
              <a href="#">CONTACT-US</a>
            </li>
            <li>
              <a href="#" className="login-button">
                LOGIN/REGISTER
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="slider">
        <div className="slider-content">
          <div className="first">
            <div className="h1">
              <h1>WE PROVIDE BEST</h1>
              <h1>HEALTHCARE</h1>
            </div>
            <div className="para">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>

              
            </div>
            <div >
                <button className="slide-button">Read More</button></div>
          </div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
