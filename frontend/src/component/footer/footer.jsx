import React from "react";
import "../footer/footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

function footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div>
          <h2>Reach at..</h2>
        </div>
        <div>
          <FaLocationDot />
          location
        </div>
        <div>
          <MdAddIcCall /> Call +01 1234567890
        </div>
        <div>
          <IoMailUnread /> demo@gmail.com
        </div>
        <div>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="footer2">
        <div>
          <h2>ABOUT</h2>
        </div>
        <div>
          <p>
            Beatae provident nobis mollitia magnam voluptatum, unde dicta
            facilis minima veniam corporis laudantium alias tenetur eveniet
            illum reprehenderit fugit a delectus officiis blanditiis ea.
          </p>
        </div>
      </div>
      <div className="footer3">
      <div>
          <h2>Links</h2>
        </div>
        <div className="">
            <ul>
                <li>Policy</li>
                <li>Help</li>
                <li>Feedback</li>
            </ul>
        </div>
      </div>
      <div className="footer4">
      <div>
          <h2>Newsletter</h2>
        </div>

        <div >
            <input type="email" placeholder="Email"/>
            <div>
            <input className="footer-button" type="submit" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
