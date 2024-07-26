import React, { useEffect, useState } from "react";
import "../shop/shop.css";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slice";
import { motion  } from "framer-motion";

function Shop() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [item, Setitem] = useState([]);
  const [cart, Gotocart] = useState({});

  const Getapi = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:8080/item");
    const data = await response.json();
    Setitem(data);
  };

  

  useEffect(() => {
    Getapi();
  }, []);

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
                <a onClick={() => navigate("/shop")}>SHOP</a>
              </li>
              <li>
                <a onClick={() => navigate("/contactus")}>CONTACT-US</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className="shop-banner">{/* //bannner of medicine */}</div>
      <div className="all-products">ALL PRODUCTS</div>
      <div className="shop-item">
        {item.map((data, index) => {
          return (
            <>
              <motion.div
                key={index}
                className="shop-item1"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 50 }}
                transition={{ duration: 0.5,
                    delay: index * 0.1,
                    repeat: 0, // Set to 1 to repeat once
                    repeatType: "loop" // Set to "loop" to repeat in a loop, or "reverse" to reverse the animation on each repeat
                  }}
              >
                <div className="item-box">
                  <div>
                    <img src={data.url} />
                  </div>
                  <div className="name">{data.name}</div>
                  <div className="price">RS: {data.price}/-</div>
                  <div>
                    <button
                      onClick={() =>
                        dispatch(
                          addItem({
                            name: data.name,
                            price: data.price,
                            img: data.url,
                          })
                        )
                      }
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          );
        })}

        <Footer />
      </div>
    </div>
  );
}

export default Shop;

//
