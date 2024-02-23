import React from 'react'
import Navbar from '../navbar-slider/navbar';
import Department from '../department/department';
import About from '../about/about';

function Home() {
  return (
    <div>
        <Navbar />
        <Department />
        <About/>
    </div>
  )
}

export default Home;