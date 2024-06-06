import React, { useState } from 'react';
import '../payment/payment.css';
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && cardNumber && cvv) {
      movetodone();
    } else {
      alert('Please fill all fields.');
    }
  };

  const movetodone = () => {
    navigate('/done');
  };

  return (
    <div className="payment-form-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h2>Payment Details</h2>
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="card-number">Card Number:</label>
        <input
          type="text"
          id="card-number"
          name="card-number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;
