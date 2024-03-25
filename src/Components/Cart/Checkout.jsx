import React, { useState } from 'react';
import axios from 'axios';

function Checkout() {
  const [formData, setFormData] = useState({
    cardholderName: '',
    PAN: '',
    expiryDate: '',
    CVC: '',
    postCode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8082/checkout/create', formData)
      .then((response) => {
        console.log('Checkout created:', response.data);
        alert('You have now completed the order.');
        setFormData({
          cardholderName: '',
          PAN: '',
          expiryDate: '',
          CVC: '',
          postCode: ''
        });
      })
      .catch((error) => {
        console.error('Error creating checkout:', error);
        alert("Payment failed - please check your details");
      });
  };

  return (
    <div>
      <h1>Card Details</h1>
      <br />
      <form style={{ fontSize: '15px' }} onSubmit={handleSubmit}>
        <label>
          Name: As it appears on the card
          <br />
          <input type="text" name="cardholderName" value={formData.cardholderName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Long Card Number: PAN
          <br />
          <input type="text" name="PAN" value={formData.PAN} onChange={handleChange} />
        </label>
        <br />
        <label>
          Card Expiry Date: mm/yy
          <br />
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          CVC
          <br />
          <input type="text" name="CVC" value={formData.CVC} onChange={handleChange} />
        </label>
        <br />
        <label>
          Postcode
          <br />
          <input type="text" name="postCode" value={formData.postCode} onChange={handleChange} />
        </label>

        <div style={{ marginTop: '20px' }}>
          <button className="btn btn-success btn-lg" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
