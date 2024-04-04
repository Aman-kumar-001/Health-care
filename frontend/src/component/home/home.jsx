import React, { useState } from 'react'
import Navbar from '../navbar-slider/navbar';
import Department from '../department/department';
import About from '../about/about';
import Doctors from '../doctors/doctors';
import Contactus from '../contact us/contactus';
import Footer from '../footer/footer';

function Home({login}) {

  

  return (
    <div>
        <Navbar login={login} />
        <Department />
        <About/>
        <Doctors/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home;