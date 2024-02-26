import { useState } from 'react';
import './Postserv.css';

const App = () => {
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    submissionDate: '',
    serviceName: '',
    paymentMode: '', // New field for payment mode
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!', formData);

    // Add logic to handle the form data, e.g., send it to a backend server
  };

  const handleAddService = () => {
    // Add logic to handle adding a service, e.g., push the service data to an array
    console.log('Service added!', formData);
  };

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>SERVICE BOOKING FORM</h2>
        <form onSubmit={handleSubmit}>
          {/* New fields for service */}
          <label htmlFor="userId">User ID</label>
          <input type="number" name="userId" id="userId" onChange={handleChange} required />

          <label htmlFor="userName">User Name</label>
          <input type="text" name="userName" id="userName" onChange={handleChange} required />

          <label htmlFor="submissionDate">Submission Date</label>
          <input type="date" name="submissionDate" id="submissionDate" onChange={handleChange} required />

          <label htmlFor="serviceName">Service Name</label>
          <select name="serviceName" id="serviceName" onChange={handleChange} required style={{ fontSize: '16px', marginTop: '8px' }}>
            <option value="" disabled selected>Select a service</option>
            <option value="medical care">Medical Care</option>
            <option value="emotional support">Emotional Support</option>
            <option value="physical therapy">Physical Therapy</option>
            <option value="care coordination">Care Coordination</option>
            <option value="home safety">Home Safety</option>
            <option value="daily assistance">Daily Assistance</option>
            <option value="technology integration">Technology Integration</option>
            <option value="nutritional guidance">Nutritional Guidance</option>
            <option value="specialized program">Specialized Program</option>
            <option value="rehabilitation services">Rehabilitation Services</option>
          </select>

          {/* New field for payment mode */}
          <label htmlFor="paymentMode">Choose Payment Mode</label>
          <select name="paymentMode" id="paymentMode" onChange={handleChange} required style={{ fontSize: '16px', marginTop: '8px' }}>
            <option value="" disabled selected>Select a payment mode</option>
            <option value="credit_card">Credit Card</option>
            <option value="cash">Cash</option>
            <option value="gpay">GPay</option>
            <option value="phonepe">PhonePe</option>
            <option value="amazon_pay">Amazon Pay</option>
            <option value="other_upi">Other UPI</option>
          </select>

        </form>
        <br></br>
        <button type="button" onClick={handleAddService}>Book Service</button>
      </div>
    </div>
  );
};

export default App;
