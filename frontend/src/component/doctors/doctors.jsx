import React from "react";
import "../doctors/doctors.css";
import doctor1 from '../../images/d1.jpg'
import doctor2 from '../../images/d2.jpg'
import doctor3 from '../../images/d3.jpg'

function doctors() {
  return (
    <div className="doctor-detail">
      <div className="doctor-heading">
        <div className="doctor-h1">
          <h1 className="doc-h1">OUR DOCTORS</h1>
          <p className="doc-para">
            Incilint sapiente illo quo praesentium officiis laudantium nostrum,
            ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium
            fuga ad voluptas aspernatur error fugiat quos facilis saepe quas
            fugit, beatae id quisquam.
          </p>
        </div>
      </div>


      <div className="doctor-img">
        <img src={doctor1}></img>
        <img src={doctor2}></img>
        <img src={doctor3}></img>
              </div>
    </div>
  );
}

export default doctors;
