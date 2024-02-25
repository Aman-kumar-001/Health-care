import React from "react";
import "../login/login.css";
import { IoMdPerson } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import {  useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-box">
        <form>
          <label>
            <h1>REGISTER</h1>
          </label>
          <div>
            <IoMdPerson /> <input type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <IoIosMail />
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <RiLockPasswordFill />
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div>
            <RiLockPasswordFill />
            <input type="password" placeholder="Re-enter your Password" />
          </div>
          <div>
            <FaPhone />
            <input type="tel" placeholder="Phone" />
          </div>
          <div>
            <FaLocationDot />
            <input type="text" placeholder="Address" />
          </div>
          <div>
          <CiLogin/>
            <button className="register-button">REGISTER</button>
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
