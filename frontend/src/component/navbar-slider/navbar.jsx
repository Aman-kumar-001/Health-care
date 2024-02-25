import React from "react";
import "../navbar-slider/navbar.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();
  return (
    <div className="outer-nav">
      <div className="nav">
        <div className="logo">
          Health<sub>Care</sub>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a  onClick={() => navigate("/shop")}>SHOP</a>
            </li>
            <li>
              <a href="#">CART</a>
            </li>
            <li>
              <a href="#">DOCTORS</a>
            </li>
            <li>
              <a href="#">CONTACT-US</a>
            </li>
            <li>
              <a  className="login-button" onClick={() => navigate("/login")}>
                LOGIN/REGISTER
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="slider">
        <div className="sliding-button">
          <FaArrowLeft />
        </div>
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
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div>
          {/* <div className="first">
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
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div>

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
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="sliding-button2">
        <FaArrowRight />
      </div>
    </div>
  );
}

export default Navbar;
