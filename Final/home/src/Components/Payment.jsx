
import gif from "./../assets/others/gif.gif"; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode';
import './../assets/css/Viewbook.css';

function View() {
  const [bookings, setBookings] = useState([]);
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in again.');
          return;
        }

        const response = await axios.get('http://localhost:8080/booking', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Bookings:', response.data);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    generateQRCode(totalAmount);
  }, [totalAmount]);

  const handleCheckboxChange = (bookingId, serviceName) => {
    if (selectedBookings.includes(bookingId)) {
      setSelectedBookings(selectedBookings.filter(id => id !== bookingId));
      const rate = getRate(serviceName);
      setTotalAmount(prevAmount => prevAmount - rate);
    } else {
      setSelectedBookings([...selectedBookings, bookingId]);
      const rate = getRate(serviceName);
      setTotalAmount(prevAmount => prevAmount + rate);
    }
  };

  const getRate = (serviceName) => {
    switch (serviceName) {
      case 'Emotional Support':
        return 2000;
      case 'Physical Therapy':
        return 1500;
      case 'Care Coordination':
        return 1800;
      case 'Home Safety':
        return 3000;
      case 'Daily Assistance':
        return 2000;
      case 'Technology Integration':
        return 5000;
      case 'Nutritional Guidance':
        return 1600;
      case 'Specialized Program':
        return 2000;
      case 'Rehabilitation Services':
        return 2500;
      default:
        return 1000;
    }
  };

  const generateQRCode = async (amount) => {
    try {
      const qrCodeImage = await QRCode.toDataURL(`Amount: ₹ ${amount} `);
      document.getElementById('qrCode').src = qrCodeImage;
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>MAKE PAYMENT FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">Booking ID</div>
            <div className="header-cell">User Name</div>
            <div className="header-cell">User Age</div>
            <div className="header-cell">User Email</div>
            <div className="header-cell">User Mobile Number</div>
            <div className="header-cell">Service Name</div>
            <div className="header-cell">Payment Method</div>
            <div className="header-cell">Select</div>
          </div>
          {bookings.map(booking => (
            <div className="table-row" key={booking.id}>
              <div className="data-cell">{booking.id}</div>
              <div className="data-cell">{booking.username}</div>
              <div className="data-cell">{booking.age}</div>
              <div className="data-cell">{booking.email}</div>
              <div className="data-cell">{booking.mobile}</div>
              <div className="data-cell">{booking.serviceName}</div>
              <div className="data-cell">{booking.paymentMethod}</div>
              <div className="data-cell">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(booking.id, booking.serviceName)}
                  checked={selectedBookings.includes(booking.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div style={{ color: 'black' }}>
          Total Amount: ₹ {totalAmount} 
        </div>
        <div>
        <a href={gif} target="_blank" rel="noreferrer" >
            <img  id="qrCode" alt="QR Code" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default View;