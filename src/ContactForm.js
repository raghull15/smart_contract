import React from 'react';


function ContactForm() {
  return (
    <div className="contact-container">
      <div className="left-section">
        <div className="image-container">
          <img src="/image/tvk.jpg" alt="Contact Us" /> 
        </div>
      </div>
      <div className="right-section">
        <div className="form-content">
          <h2>Contact us</h2>
          <p>Reach out to us for additional information</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone number" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;