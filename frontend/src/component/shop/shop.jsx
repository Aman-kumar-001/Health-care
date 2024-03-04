import React, { useEffect, useState } from "react";
import "../shop/shop.css";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
// import IMG from "../../images/d1.jpg";


function Shop() {
  const navigate = useNavigate();

  const [item , Setitem ] = useState([])
  const [cart , Gotocart] = useState({})

  const Getapi =  async() =>{
    // e.preventDefault();
    const response = await fetch('http://localhost:8080/item')
 const data = await response.json();
 Setitem(data);
}

// const handleAddToCart = (item) => {
//   const [url , name , price] = item;
//   Gotocart();
//   console.log(cart);
// }
// const Addtocart = async () =>{
//   const res = await fetch('http://localhost:8080/tocart', {
//     method: 'POST',
//     body:JSON.stringify(cart),
//     headers:{
//       'Content-Type' : 'application/json'
//     }
//   })
//   const data = await res.json();
//   console.log(data);
// }


useEffect(() =>{
  Getapi();
},[])

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

      <div className="shop-banner">{/* //bannner of medicine */}</div>
    <div className="all-products">ALL PRODUCTS</div>
      <div className="shop-item">
        {item.map((data,index) => {
          return(
            <>
        <div  key={index} className="shop-item1">
          <div className="item-box">
            <div>
              <img src={data.url} />
            </div>
            <div className="name">{data.name}</div>
            <div className="price">RS: {data.price}/-</div>
            <div>
              <button >ADD TO CART</button>
              {/* onClick={() => handleAddToCart(data)} */}
            </div>
          </div>
        </div>
        </>
        
       );
      })}

      
     <Footer/>
    </div>
   </div>
  );
}

export default Shop;





 // 