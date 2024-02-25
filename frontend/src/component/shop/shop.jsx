import React from 'react'
import "../shop/shop.css";
import {  useNavigate } from "react-router-dom";

function Shop() {
    
    const navigate = useNavigate();

  return (
   <div className="shop">
    <div className="shop-navbar">
        <div className="shop-nav">
        
        <div className="logo">
          Health<sub>Care</sub>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a  onClick={() => navigate("/shop")}>SHOP</a>
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
              <a  className="login-button" onClick={() => navigate("/login")}>
                LOGIN/REGISTER
              </a>
            </li>
          </ul>
        </div>
      </div>
        </div>
    </div>
   
  )
}

export default Shop;
