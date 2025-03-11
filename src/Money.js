import React from 'react';
import './Money.css'; // Import your CSS file

function Money() {
  return (
    <div>
      <div className="document">
        <div className="card1">
          <div className="card-content1">
            <h2>Lending Money</h2>
            <p>
              A Loan Agreement sets out the terms of a loan between individuals,
              corporations, or between an individual and a corporation. Lending
              money doesn't have to be risky. In this guide, learn about the
              documents that protect you and ensure repayment.
            </p>
            <button className="create-document-btn">Create Document</button>
          </div>
        </div>
        
        <div className="image1">
          <img src="/image/money.jpeg" className="house1" style={{ width: '500px', height: '350px' }} />
        </div>
      </div>
      <div className="about-us-section">
        <h2>About us</h2>
        <div className="about-content">
          <div className="legal-docs-info">
            <img src="/image/legal shield.jpg" className="legal-docs-logo"  />
            <span class="logo-text">Legal shield</span>
            <p>We are passionate about creating and reviewing legal documents using AI technology.</p>
          </div>
          <div className="contact-info">
            <h3>Email &amp; Phone</h3>
            <p>support@legalshield.com</p>
            <p>9959697989</p>
            <p>(Mon to Fri, From 10am to 6pm)</p>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <p>Follow us on social media to find out the latest updates.</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/dhanushh15/" className="social-icon">
                <img src="/image/insta1.webp" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/share/1DvuH7VKjq/" className="social-icon">
                <img src="/image/facebook.jpeg" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/sakthi-vel-b14730289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon">
                <img src="/image/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://x.com/Nzjk0" className="social-icon">
                <img src="/image/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
        <div className="copyright">
          Copyright 2025 by Legalshield.com. All Rights Reserved
        </div>
      </div>
    </div>
      
  );
}

export default Money;
