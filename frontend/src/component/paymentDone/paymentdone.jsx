import React from 'react';
import { useNavigate } from "react-router-dom";

function Paymentdone() {
const navigate = useNavigate();


    const move = () =>{
        setTimeout(()=>{
            navigate("/");   
        },4000)
    }

    move();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <h1>Order Successfully Done...</h1>
  </div>


  )
}

export default Paymentdone;