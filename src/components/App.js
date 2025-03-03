import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  const handleCloseForm = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };

  return (
    <div className="rental-guide-container">
      <header className="header">
        <div className="logo">
          <img src="/image/tvk.jpg" alt="Legal Docs Logo" />
          <span className="logo-text">LegalDocs</span>
        </div>
        <nav className="nav">
  <a href="/home.html" target="_blank">Home</a> 
  <a href="/contact.html" target="_blank">Contact us</a>
  <a href="/about.html" target="_blank">Generative Ai</a>
</nav>
        <div className="btn">
          <button className="signup-btn" onClick={handleSignupClick}>Sign up</button>
          <button className="login-btn" onClick={handleLoginClick}>Login</button>
        </div>
      </header>

      <main className="main-content">
        <div className="image-container">
          <img src="/image/tvk.jpg" alt="House Keys" className="house-keys-image" />
        </div>
        <div className="text-content">
          <h1 className="title">A COMPLETE GUIDE TO RENTING OUT PROPERTY</h1>
          <p className="description">
            Finding success as a landlord starts with understanding your rights and obligations. In this guide, we'll cover everything you need to know to manage your rental properties.
          </p>
        </div>
      </main>

      {showLoginForm && (
        <div className="form-container">
          <div className="form">
            <h2>Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="submit-btn">Login</button>
            <button className="close-btn" onClick={handleCloseForm}>Close</button>
          </div>
        </div>
      )}

      {showSignupForm && (
        <div className="form-container">
          <div className="form">
            <h2>Sign Up</h2>
            <input type="enter your name" placeholder="enter your name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
             <input type="confirm password" placeholder="confirm Password" />
            <button className="submit-btn">Sign Up</button>
            <button className="close-btn" onClick={handleCloseForm}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
