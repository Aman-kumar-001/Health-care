import React from 'react'
import '../navbar-slider/navbar.css';
// import IMG from "../../images/hero-bg.png";

function Navbar() {
  return (
    <div className="outer-nav">
        <div className="nav">
            <div className="logo">Health<sub>Care</sub></div>
            <div className="nav-list">
                <ul>
                    <li><a href='#'>ABOUTUS</a></li>
                    <li><a href='#'>DEPARTMENT</a></li>
                    <li><a href='#'>DOCTORS</a></li>
                    <li><a href='#'>CONTACT-US</a></li>
                    <li><a href='#' className='login-button'>LOGIN/REGISTER</a></li>
                </ul>
            </div>
        </div>
        <div className="slider"></div>
    </div>
    
  )
}

export default Navbar;
