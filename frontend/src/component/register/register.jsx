import React, { useState } from 'react';
import '../register/register.css';
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import {  useNavigate  } from "react-router-dom";

function Register({Ondata}) {

  const navigate = useNavigate();

  const [user , setloginUser] = useState({})

  const  handlechange = (e) =>{
     setloginUser({
         ...user,
         [e.target.name] : e.target.value
     })
     console.log(user)
    //  e.preventDefault();
  }

  const [auth , setAuth] = useState();

  const loginAuth = (data) =>{
    setAuth(data);
    // console.log(auth);
    Ondata(auth);
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      body:JSON.stringify(user),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    
    loginAuth(data);

   
  }

  return (
    <div className="register">
      <div className="register-box">
        <form>
          <h1>LOGIN</h1>
          <div>
          <IoIosMail /> <input type='email' placeholder='EMAIL' name='email' onChange={handlechange}/>
          </div>
          <div>
         <RiLockPasswordFill /><input type='password' placeholder='PASSWORD' name='password' onChange={handlechange} />
          </div>
          <div>
            < CiLogin/><button className='login-button' onClick={handleSubmit} >LOGIN</button>
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
// 