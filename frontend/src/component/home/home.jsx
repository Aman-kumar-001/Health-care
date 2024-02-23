import React from 'react'
import Navbar from '../navbar-slider/navbar';
import Department from '../department/department';
import About from '../about/about';
import Doctors from '../doctors/doctors';

function Home() {
  return (
    <div>
        <Navbar />
        <Department />
        <About/>
        <Doctors/>
    </div>
  )
}

export default Home;