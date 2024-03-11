import { useState } from 'react';
import './../assets/css/Postserv.css';
import axios from 'axios';
const Postserv = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    email: '',
    mobile: '',
    serviceName: '',
    paymentMethod: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        console.error(`Field '${key}' cannot be empty.`);
        // Handle the empty field, e.g., display an error message
        return;
      }
    }

    try {
      // Retrieve token from local storage
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Log the token to verify its value

      // Make sure token is available
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      const response = await axios.post('http://localhost:8080/booking', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Form submitted!', response.data);
      // Handle the response data as needed, e.g., show a success message

      // Clear form data after submission
      setFormData({
        username: '',
        age: '',
        email: '',
        mobile: '',
        serviceName: '',
        paymentMethod: '',
      });

      // Set submission status to true
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className="background">
      <div className='overlay8'></div>
      <div className="booking-form">
        <h2>BOOK SERVICE FORM</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} required />

          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="mobile">Mobile Number</label>
          <input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={handleChange} required />

          <label htmlFor="serviceName">Service Name</label>
          <select name="serviceName" id="serviceName" onChange={handleChange} required>
            <option value="">Select a service</option>
            <option value="Medical Care">Medical Care</option>
            <option value="Emotional Support">Emotional Support</option>
            <option value="Physical Therapy">Physical Therapy</option>
            <option value="Care Coordination">Care Coordination</option>
            <option value="Home Safety">Home Safety</option>
            <option value="Daily Assistance">Daily Assistance</option>
            <option value="Technology Integration">Technology Integration</option>
            <option value="Nutritional Guidance">Nutritional Guidance</option>
            <option value="Specialized Program">Specialized Program</option>
            <option value="Rehabilitation Services">Rehabilitation Services</option>
          </select>

          <label htmlFor="paymentMethod">Payment Method</label>
          <select name="paymentMethod" id="paymentMethod" onChange={handleChange} required>
            <option value="">Select a payment method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="GPay">GPay</option>
            <option value="PhonePe">PhonePe</option>
            <option value="Amazon Pay">Amazon Pay</option>
            <option value="Other UPI">Other UPI</option>
          </select>

          {/* Conditional rendering of the button based on submission status */}
          {isSubmitted ? (
            <button type="button" disabled>Booked</button>
          ) : (
            <button type="submit">Book Service</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Postserv;