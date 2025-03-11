import React from 'react';
import './DocumentCards.css'; // Import your CSS file

function DocumentCards() {
  return (
    <div>
    <div className="document-cards-container">
      <div className="card">
        <div className="card-content">
          <h2>Rent out property</h2>
          <p>
            Whether you're a landlord owning a property or a tenant looking to rent a property, it's important that you make use of a valid rent agreement format inclusive of all the important clauses.
          </p>
          
          <button className="create-document-btn" onClick={() => window.location.href = 'Iframes.html'}> Create Document
</button>
        </div>
      </div>

      <div className="image">
          <img src="/image/rent.jpg" className="house" style={{width:'500px',height:'350px'}}/>
        </div>
      </div>
      
      </div>
  );
}

export default DocumentCards;