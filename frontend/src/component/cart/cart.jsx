import React from 'react'
import "../cart/cart.css";
import {  useNavigate } from "react-router-dom";
import MED from '../../images/Medicine.jpg';


function Cart() {

   const navigate = useNavigate();
  return (
    <div className="cart">
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
                <a onClick={() => navigate("/shop")}>SHOP</a>
              </li>
              <li>
                <a href="#">DOCTORS</a>
              </li>
              <li>
                <a href="#">CONTACT-US</a>
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


      <div className="cart-banner">
        <img src={MED}/>
      </div>


<div className='cart-heading'><h2>CART SECTION</h2></div>

      <div className="cart-item">
      <div className="cart-section">
        <div className="cart-box">
          <div className="">
            <img src={MED}/>
          </div>
          <div className="">Quantity:-1</div>
          <div className="">RS:- 2000/-</div>
          <div><button>REMOVE</button></div>
        </div>
        </div>
         <div className="total">
          <div className="">Total :- RS 2000/-</div>
         </div>
       
      </div>
    </div>
  )
}

export default Cart;