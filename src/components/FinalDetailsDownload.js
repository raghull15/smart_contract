import React, { useState } from 'react';
import './FinalDetailsDownload.css';

function FinalDetailsDownload() {
  const [leaseRenewalOption, setLeaseRenewalOption] = useState('No option specified');

  const handleLeaseRenewalChange = (option) => {
    setLeaseRenewalOption(option);
  };

  return (
    <div className="final-details-download-container">
      <div className="final-details-section">
        <h2>Final Details</h2>
        <div className="lease-renewal">
          <h3>Lease Renewal</h3>
          <p>Will the tenant have the option to renew the lease?</p>
          <div className="renewal-options">
            <button
              className={`renewal-button ${leaseRenewalOption === 'No option specified' ? 'active' : ''}`}
              onClick={() => handleLeaseRenewalChange('No option specified')}
            >
              No option specified
            </button>
            <button
              className={`renewal-button ${leaseRenewalOption === 'Yes, revise standard clause' ? 'active' : ''}`}
              onClick={() => handleLeaseRenewalChange('Yes, revise standard clause')}
            >
              Yes, revise standard clause
            </button>
            <button
              className={`renewal-button ${leaseRenewalOption === 'Yes, same terms' ? 'active' : ''}`}
              onClick={() => handleLeaseRenewalChange('Yes, same terms')}
            >
              Yes, same terms
            </button>
          </div>
        </div>
      </div>

      <div className="download-section">
        <h2>Download</h2>
        <div className="leased-property">
          <h3>Leased Property</h3>
          <p>To download your Rental Agreement.click download button</p>
          <div className="download-button-container"> 
            <button className="download-button">Download</button>
          </div>
        </div>
      </div>

      <div className="about-us-section">
        <h2>About us</h2>
        <div className="about-content">
        <div className="legal-docs-info">
  <img src="/legal-docs-logo.png" class="legal-docs-logo" />
  <b class="logo-text">legal docs logo</b>
  <p>We are passionate about creating and reviewing legal documents using AI technology.</p>
</div>
          <div className="contact-info">
            <h3>Email & ph-no</h3>
            <p>support@legaldocs.com</p>
            <p>9499954629</p>
            <p>(Mon to Fri, From 10am to 6pm)</p>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <p>Follow up on social media to find out the latest updates.</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img src="/instagram.png" alt="Instagram" />
              </a>
              <a href="#" className="social-icon">
                <img src="/facebook.png" alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#" className="social-icon">
                <img src="/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>  <a href="#">Terms and Conditions</a>
        </div>
        <div className="copyright">
          Copyright 2025 by Legaldocs.com. All Rights Reserved
        </div>
      </div>
      
    </div>
  );
}

export default FinalDetailsDownload;