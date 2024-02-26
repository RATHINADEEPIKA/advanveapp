import './Viewserv.css';

function View() {
  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>VIEW SERVICE FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">User ID</div>
            <div className="header-cell">User Name</div>
            <div className="header-cell">Query</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default View;
