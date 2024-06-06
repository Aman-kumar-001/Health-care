import React from 'react';
import '../payment/payment.css';


function payment() {
  return (
    <div className="payment-form-container">
      <form className="payment-form">
        <h2>Payment Details</h2>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="card-number">Card Number:</label>
        <input type="text" id="card-number" name="card-number" required />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" required />

        <button type="submit">Submit Payment</button>
      </form>
    </div>
    

  )
}

export default payment;