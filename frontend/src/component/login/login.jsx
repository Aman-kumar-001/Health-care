import React, { useState } from "react";
import "../login/login.css";
import { IoMdPerson } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import {  useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user , Setuser] = useState({});

  const handlechange = (e) => {
    // e.preventDefault();
    Setuser({
      ...user,
      [e.target.name] : e.target.value
    })
    // console.log(user);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response =  await fetch('http://localhost:8080/register', {
      method: 'POST',
      body:JSON.stringify(user),
      headers:{
        'Content-Type' : 'application/json'
      }
    }).then((res) =>{
      console.log("hello");
      navigate("/register")
      const data = response.json();
    console.log(data);
    }).catch((err) => {
      console.log(err);
    })
    
  }

  return (
    <div className="login">
      <div className="login-box">
        <form >
          <label>
            <h1>REGISTER</h1>
          </label>
          <div>
            <IoMdPerson /> <input type="text" placeholder="Enter Your Name" name="username" onChange={handlechange} />
          </div>
          <div>
            <IoIosMail />
            <input type="email" placeholder="Email" name="email" onChange={handlechange}/>
          </div>
          <div>
            <RiLockPasswordFill />
            <input type="password" placeholder="Enter your Password" name="password" onChange={handlechange} />
          </div>
          <div>
            <RiLockPasswordFill />
            <input type="password" placeholder="Re-enter your Password" name="re-password" onChange={handlechange} />
          </div>
          <div>
            <FaPhone />
            <input type="tel" placeholder="Phone" name="phone" onChange={handlechange} />
          </div>
          <div>
            <FaLocationDot />
            <input type="text" placeholder="Address" name="address" onChange={handlechange}/>
          </div>
          <div>
          <CiLogin/>
            <button className="register-button"  onClick={handleSubmit}>REGISTER</button>
          </div>
          <span>or</span>
          <div>
          <CiLogin/>  <button className="register-button" onClick={() => navigate("/register")}>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
