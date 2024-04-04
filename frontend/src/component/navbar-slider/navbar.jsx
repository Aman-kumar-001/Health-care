import React, {  useEffect, useState } from "react";
import "../navbar-slider/navbar.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

function Navbar({login,handledata}) {

const navigate = useNavigate();

const LOGIN = "LOGIN"; // Define LOGIN constant
  const REGISTER = "REGISTER"; // Define REGISTER constant
  const LOGOUT = "LOGOUT"


  return (
    <div className="outer-nav">
      <div className="nav">
        <div className="logo">
          Health<sub>Care</sub>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a onClick={() => navigate("/cart")}>CART</a>
            </li>
            <li>
              <a  onClick={() => navigate("/shop")}>SHOP</a>
            </li>
            <li>
                <a onClick={() => navigate("/contactus")}>CONTACT-US</a>
              </li>
            <li>
             
              <a  >
              {login ? <button  onClick={() => handledata(false)} className="login-button" >LOGOUT</button> : <button className="login-button" onClick={() => navigate("/login")}>LOGIN/REGISTER</button> }
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
          
        </div>
      </div>
      <div className="sliding-button2">
        <FaArrowRight />
      </div>
    </div>
  );
}

export default Navbar;
