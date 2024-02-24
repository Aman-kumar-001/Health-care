import React from "react";
import "../contact us/contact.css";

function contactus() {
  return (
    <div className="contact">
      <div className="contact-box">
       
        <div className=" contact-form">
          <form>
          <h2 >GET IN TOUCH</h2>
            <div className="input">
              <input type="text" placeholder="Enter Your Name" />
              <input type="number" placeholder="Phone Number" />
            </div>

            <input  type="email" placeholder="email" />
            <div>
              <input type="text" placeholder="Message" />
            </div>
            <input className="sub-button" type="submit" placeholder="SEND" />
          </form>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112042.2490985924!2d77.01359239782968!3d28.650127168445703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d019eea1416d7%3A0xc4c7bcd628010c86!2sMax%20Super%20Speciality%20Hospital%2C%20Shalimar%20Bagh!5e0!3m2!1sen!2sin!4v1708790788458!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default contactus;
