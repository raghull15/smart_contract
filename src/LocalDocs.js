import React, { useState, useRef, useEffect } from 'react';
import './LocalDocs.css';

function LocalDocs() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const rentOutSectionRef = useRef(null);
  const lendingmoneyRef = useRef(null);
  const aboutUsRef = useRef(null); // Reference for "About us" section

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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsSignedUp(true);
    setShowSignupForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSignedUp(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === 'rent') {
      rentOutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (searchQuery.toLowerCase() === 'property') {
      lendingmoneyRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert("No matching results found!");
    }
  };

  const scrollToAboutUs = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="rental-guide-container">
      <header className="header">
        <div className="logo">
          <img src="/image/legal shield.jpg" alt="Legal Docs Logo" />
          <span className="logo-text">Legalshield®</span>
        </div>
        <nav className="nav">
          <a href="#" >Home</a>
         {/* <a href="Home.html">Ai</a> */}

          <a href="ContactForm.html">Contact us</a>
          <a href="#" onClick={scrollToAboutUs}>About us</a>
        </nav>
        <div className="btn">
          {isLoggedIn || isSignedUp ? (
            <button className="login-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button className="signup-btn" onClick={handleSignupClick}>Sign up</button>
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
            </>
          )}
        </div>
      </header>

      <main className="main-content">
        <div className="image-container">
          <img src="/image/contract.jpg" className="house-keys-image" alt="Legal Documents Illustration" />
        </div>
        <div className="text">
          <h1 className="title">LEGAL DOCUMENTS</h1>
          <p className="description" style={{ marginBottom: '100px' }}>
            Do-it-Yourself platform for making documents online. The process of creating official documentation is now made simple, quick and affordable.
          </p>
          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">Search</button>
            </form>
          </div>
        </div>
      </main>

      <div ref={rentOutSectionRef} style={{ marginTop: '5px', backgroundColor: '#f9f9f9' }}></div>
      <div ref={lendingmoneyRef} style={{ marginTop: '5px', backgroundColor: '#f9f9f9' }}></div>
      
     

      {showLoginForm && (
        <div className="form-container">
          <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="submit-btn">Login</button>
            </form>
            <button className="close-btn" onClick={handleCloseForm}>Close</button>
          </div>
        </div>
      )}

      {showSignupForm && (
        <div className="form-container">
          <div className="form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit" className="submit-btn">Sign Up</button>
            </form>
            <button className="close-btn" onClick={handleCloseForm}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocalDocs;
