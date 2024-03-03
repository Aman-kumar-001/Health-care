import React from 'react'
import '../contact-us main/con-main.css';
import { useNavigate } from 'react-router-dom';


function ConMain() {

    const navigate = useNavigate();
  return (
   <div className="contactMain">
     <div className="shop-navbar">
        <div className="shop-nav">
          <div className="logo">
            Health<sub>Care</sub>
          </div>
          <div className="nav-list">
            <ul>
              <li>
                <a onClick={() => navigate("/")}>HOME</a>
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
                <a className="login-button" onClick={() => navigate("/login")}>
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

export default ConMain;
