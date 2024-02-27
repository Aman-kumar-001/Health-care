import React, { useState } from "react";
import "../shop/shop.css";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import IMG from "../../images/d1.jpg";


function Shop() {
  const navigate = useNavigate();

  const [item , Setitem ] = useState({})

  const Getapi =  async(e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api')
 const data = await response.JSON();
 console.log(data);
}

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
                <a onClick={() => navigate("/shop")}>SHOP</a>
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
                <a className="login-button" onClick={() => navigate("/login")}>
                  LOGIN/REGISTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="shop-banner">{/* //bannner of medicine */}</div>

      <div className="shop-item">
        <div className="shop-item1">
          <div className="item-box">
            <div>
              <img src={IMG} />
            </div>
            <div>Ayurvedic</div>
            <div>RS - 250/-</div>
            <div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="shop-item2">
          <div className="item-box">
            <div>
              <img src={IMG} />
            </div>
            <div>Ayurvedic</div>
            <div>RS - 250/-</div>
            <div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="shop-item3">
          <div className="item-box">
            <div>
              <img src={IMG} />
            </div>
            <div>Ayurvedic</div>
            <div>RS - 250/-</div>
            <div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
   
  );
}

export default Shop;
