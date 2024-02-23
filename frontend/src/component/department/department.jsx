import React from "react";
import "../department/department.css";
import { FaHeartPulse } from "react-icons/fa6";
import { FaFirstAid } from "react-icons/fa";
import { GiHypodermicTest } from "react-icons/gi";
import { FaHandHoldingMedical } from "react-icons/fa";

function Department() {
  return (
    <div className="Department-box">
      <div className="box">
        <h2 className="d-h2">OUR DEPARTMENTS</h2>
        <p className="d-para">
          They are more difficult to pursue, prevents the choice of any
          discomfort, repulses the pains and sufferings that accuse
        </p>

        <div className="option">
          <div className="option1">
            <div className="d-logo">
              <FaHeartPulse />
            </div>
            <h2 className="dh2-opt">CARDIOLOGY</h2>
            <p className="dp-opt">
              fact that a reader will be distracted by the readable page when
              looking at its layout.
            </p>
          </div>
          <div className="option2">
          <div className="d-logo">
              <FaHandHoldingMedical />
            </div>
            <h2 className="dh2-opt">DIAGNOSIS</h2>
            <p className="dp-opt">
              fact that a reader will be distracted by the readable page when
              looking at its layout.
            </p>
          </div>
          <div className="option3">
          <div className="d-logo">
              < GiHypodermicTest />
            </div>
            <h2 className="dh2-opt">SURGERY</h2>
            <p className="dp-opt">
              fact that a reader will be distracted by the readable page when
              looking at its layout.
            </p>
          </div>
          <div className="option4">
          <div className="d-logo">
              <FaFirstAid />
            </div>
            <h2 className="dh2-opt">FIRST AID</h2>
            <p className="dp-opt">
              fact that a reader will be distracted by the readable page when
              looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
