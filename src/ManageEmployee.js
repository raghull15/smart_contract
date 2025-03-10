import React from 'react';
import './ManageEmployee.css'; // Import your CSS file

function ManageEmployee() {
  return (
    <div>
    <div className="document">
      <div className="card1">
        <div className="card-content1">
          <h2>Manage Employees</h2>
          <p>
          An Employment Contract, also known as an employment agreement, is a document that outlines the rights, responsibilities, and obligations of an employer and employee.
         
          </p>
          <button className="create-document-btn">Create Document</button>
        </div>
      </div>

      <div className="image1">
          <img src="/image/tvk.jpg" className="house1" style={{width:'500px',height:'350px'}}/>
        </div>
      </div>
      
      </div>
  );
}

export default ManageEmployee;