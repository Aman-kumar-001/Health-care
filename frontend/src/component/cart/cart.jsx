import React, { useEffect, useState } from 'react'
import "../cart/cart.css";
import {  useNavigate } from "react-router-dom";
import MED from '../../images/Medicine.jpg';
import Footer from '../footer/footer';
import {useSelector ,useDispatch} from "react-redux";
import { removeItem } from '../../redux/slice';


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);
  console.log(cartItems);

  const total = Math.floor(cartItems.cart.reduce((a, b) => a + b.price, 0));

   const navigate = useNavigate();

   const handlePayment = async () => {
    const userId = "user_id"; // Replace this with actual user ID
    const items = cartItems.cart.map(item => ({
      itemId: item.id,
      name: item.name,
      quantity: 1, // Adjust quantity as per your cart logic
      price: item.price
    }));

    const orderDetails = {
      userId: userId,
      items: items,
      totalAmount: total
    };
    console.log(orderDetails);

    try {
      const response = await fetch('http://localhost:8080/placeorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Handle successful order placement
        navigate("/payment"); // Navigate to the payment page
      } else {
        console.error('Error placing order');
        // Handle order placement error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle fetch error
    }
  };

  const handleAdditionalFunction = () => {
    navigate("/payment");
    console.log("Additional function executed");
  };

  const handleButtonClick = () => {
    handlePayment();
    handleAdditionalFunction();
  };
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
                <a onClick={() => navigate("/cart")}>CART</a>
              </li>
              <li>
              <a  onClick={() => navigate("/shop")}>SHOP</a>
            </li>
            <li>
                <a onClick={() => navigate("/contactus")}>CONTACT-US</a>
              </li>
              {/* <li>
                <a className="login-button" onClick={() => navigate("/login")}>
                  LOGIN/REGISTER
                </a>
              </li> */}
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

        { Array.isArray(cartItems.cart)&&cartItems.cart.map((items ,index)=> {
          return (
            <>
         <div className="cart-box" key={index}>
         <div className="">
           <img src={items.img}/>
         </div>
         <div className="quantity">{items.name}</div>
         <div className="price">RS:-{items.price}</div>
         <div><button onClick={() => dispatch(removeItem({ id : items.index ,name: items.name}))}>REMOVE</button></div>
       </div>
       </>
          );
        })} 
        

       
        
        </div>
         <div className="total">
          <div className="button">Total :- RS {total}/-</div>
         
          <div className="button2" onClick={handleButtonClick}>PAY NOW</div>
         </div>
       
      </div>

      <Footer />
    </div>
  )
}

export default Cart;