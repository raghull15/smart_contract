import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: 'Welcome to the Legal Document AI Chatbot!', sender: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isSignedUp, setIsSignedUp] = useState(false); 
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

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    const messageText = userInput.trim();
    if (messageText) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: messageText, sender: 'user' },
      ]);
      setUserInput('');
      getBotResponse(messageText);
    }
  };

  const getBotResponse = (message) => {
    const responses = {
      'hello': 'Hello! How can I help you?',
      'contract': "Sure, let's start generating your contract. What type of contract do you need?",
      'lease': 'Okay, a lease agreement. Please provide the property address and lease term.',
      'agreement': 'Please specify the type of agreement you need.',
      'default': "I'm still learning. Could you please be more specific?",
    };

    const lowerMessage = message.toLowerCase();
    let response = responses[lowerMessage] || responses['default'];

    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: response, sender: 'bot' },
      ]);
    }, 500);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Uploaded file:', file);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: `File uploaded: ${file.name}`, sender: 'user' },
      ]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
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

  return (
    <div className="rental-guide-container">
      <header className="header">
        <div className="logo">
          <img src="/image/tvk.jpg" alt="Legal Docs Logo" />
          <span className="logo-text">LegalDocs</span>
        </div>
        <nav className="nav">
          <a href="#" target="_blank">Home</a>
          <a href="contact.html" target="_blank">Contact us</a>
          <a href="#" onClick={scrollToBottom}>About us</a>
        </nav>
        <div className="btn">
          {isLoggedIn || isSignedUp ? (
            <button className="login-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <button className="signup-btn" onClick={handleSignupClick}>
                Sign up
              </button>
              <button className="login-btn" onClick={handleLoginClick}>
                Login
              </button>
            </>
          )}
        </div>
      </header>

      <main className="main-content">
        <div className="image-container">
          <img src="/image/tvk.jpg" alt="House Keys" className="house-keys-image" />
        </div>
        <div className="text-content">
          <h1 className="title">A COMPLETE GUIDE TO RENTING OUT PROPERTY</h1>
          <p className="description" style={{ marginBottom: '30px' }}>
            Finding success as a landlord starts with understanding your rights and obligations. In this guide, we'll cover everything you need to know to manage your rental properties.
          </p>
          <div id="chat-container" ref={chatContainerRef}>
            <div id="chat-messages">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div id="input-container">
              <input
                type="text"
                id="user-input"
                placeholder="Type your message..."
                value={userInput}
                onChange={handleInputChange}
              />
              <button id="send-button" onClick={handleSendMessage}>
                Generate
              </button>
              <button id="upload-button" onClick={triggerFileInput}>
                +
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
            </div>
          </div>
        </div>
      </main>

      {showLoginForm && (
        <div className="form-container">
          <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
            <button className="close-btn" onClick={handleCloseForm}>
              Close
            </button>
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
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
            <button className="close-btn" onClick={handleCloseForm}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;