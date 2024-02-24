import React from 'react'
import Navbar from '../navbar-slider/navbar';
import Department from '../department/department';
import About from '../about/about';
import Doctors from '../doctors/doctors';
import Contactus from '../contact us/contactus';

function Home() {
  return (
    <div>
        <Navbar />
        <Department />
        <About/>
        <Doctors/>
        <Contactus/>
    </div>
  )
}

export default Home;