import React from 'react';
import './Construction.css'; // Import your CSS file

function Construction() {
  return (
    <div>
    <div className="document-cards-container">
      <div className="card">
        <div className="card-content">
          <h2>Construction Contract</h2>
          <p>
          A contractor is a skilled person (or organisation) who provides
            services for other parties. Often, individual contractors are
            self-employed and run their own business. If an organisation hires
            a contractor, they hire the contractor as an external worker,
            rather than as an employee, for a set time (or project).
          </p>
          <button className="create-document-btn">Create Document</button>
        </div>
      </div>

      <div className="image">
          <img src="/image/tvk.jpg" className="house" style={{width:'500px',height:'350px'}}/>
        </div>
      </div>
      
      </div>
  );
}

export default Construction;