import React, { useState } from 'react';
import './leaseform.css'; 

function LeaseForm() {
  const [location, setLocation] = useState('Tamil Nadu');
  const [steps] = useState([
    { id: 'generalInfo', label: 'General Info', status: 'pending' },
    { id: 'parties', label: 'Parties', status: 'pending' },
    { id: 'property', label: 'Property', status: 'pending' },
    { id: 'terms', label: 'Terms', status: 'pending'},
    { id: 'costs', label: 'Costs', status: 'pending' },
    { id: 'clauses', label: 'Clauses', status: 'pending' },
    { id: 'finalDetails', label: 'Final Details', status: 'pending' },
    { id: 'download', label: 'Download', status: 'pending' }
  ]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="lease-form-container">
      <div className="top-bar">
        <div className="top-bar-item">
          <span className="icon">&#128187;</span> 
          <span>Answer a few simple questions</span>
        </div>
        <div className="top-bar-item">
          <span className="icon">&#9998;</span> 
          <span>Electronic Signature Service</span>
        </div>
        <div className="top-bar-item">
          <span className="icon">&#128438;</span> 
          <span>Print and download instantly</span>
        </div>
      </div>

      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={step.id} className={`step ${step.status}`}>
            <span className="step-icon">
              {step.status === 'completed' && '✓'}
              {step.status === 'error' && '✗'}
            </span>
            <span className="step-label">{step.label}</span>
            {index < steps.length - 1 && <span className="step-separator"></span>}
          </div>
        ))}
      </div>

      <div className="content">
        <div className="section">
          <h2>General Info</h2>
          <h3>Customised Lease</h3>
          <div className="form-group">
            <label htmlFor="location">Location of Property:</label>
            <select id="location" value={location} onChange={handleLocationChange}>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="kerala">kerala</option>
            </select>
          </div>
          <p className="note">
            Different states and union territories have different rules and regulations. Your Commercial Rental Agreement will be customised for {location}.
          </p>
          <p className="note">Remember the current location is Chennai, Tamil Nadu, India.</p>
        </div>
      </div>
    </div>
  );
}

export default LeaseForm;