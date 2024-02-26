import './Viewserv.css';

function View() {
  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>VIEW PAYMENT FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">Payment ID</div>
            <div className="header-cell">User ID</div>
            <div className="header-cell">Status</div>
            <div className="header-cell">Total Amount</div>
            <div className="header-cell">Payment Date</div>
            <div className="header-cell">Mode Of Payment</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default View;
