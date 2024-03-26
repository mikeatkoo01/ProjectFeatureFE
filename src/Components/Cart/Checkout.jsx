import React, { useState } from 'react';
import axios from 'axios';

function Checkout({ selectedCart }) {
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
    axios.post('http://localhost:8082/checkout/create', { ...formData, cart: selectedCart })
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
    <div className="container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: As it appears on the card</label>
          <input type="text" className="form-control" name="cardholderName" value={formData.cardholderName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Long Card Number: PAN</label>
          <input type="text" className="form-control" name="PAN" value={formData.PAN} onChange={handleChange} />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Card Expiry Date: MM/YY </label>
            <input type="text" className="form-control" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
          </div>
          <div className="form-group col-md-6">
            <label>CVC</label>
            <input type="text" className="form-control" name="CVC" value={formData.CVC} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label>Postcode</label>
          <input type="text" className="form-control" name="postCode" value={formData.postCode} onChange={handleChange} />
        </div>
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkout;
