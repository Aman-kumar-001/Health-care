import React from 'react';
import '../register/register.css';
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import {  useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="register-box">
        <form>
          <h1>LOGIN</h1>
          <div>
          <IoIosMail /> <input type='email' placeholder='EMAIL'/>
          </div>
          <div>
         <RiLockPasswordFill /><input type='password' placeholder='PASSWORD' />
          </div>
          <div>
            < CiLogin/><button className='login-button'>LOGIN</button>
          </div>
          <span>OR</span>
          <div>
            < CiLogin/><button className='login-button' onClick={() => navigate('/login')}>REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;
