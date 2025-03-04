import React, { useState, useRef } from 'react';
import './FinalDetailsDownload.css';

function FinalDetailsDownload() {
  const [leaseRenewalOption, setLeaseRenewalOption] = useState('No option specified');
  const [signatureDataUrl1, setSignatureDataUrl1] = useState(null);
  const [signatureDataUrl2, setSignatureDataUrl2] = useState(null);
  const [isDrawing1, setIsDrawing1] = useState(false);
  const [isDrawing2, setIsDrawing2] = useState(false);
  const [lastX1, setLastX1] = useState(0);
  const [lastY1, setLastY1] = useState(0);
  const [lastX2, setLastX2] = useState(0);
  const [lastY2, setLastY2] = useState(0);
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);

  const handleLeaseRenewalChange = (option) => {
    setLeaseRenewalOption(option);
  };

  // Signature 1
  const startDrawing1 = (e) => {
    const canvas = canvasRef1.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    setIsDrawing1(true);
    setLastX1(e.clientX - rect.left);
    setLastY1(e.clientY - rect.top);
  };

  const draw1 = (e) => {
    if (!isDrawing1) return;
    const canvas = canvasRef1.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(lastX1, lastY1);
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    setLastX1(e.clientX - rect.left);
    setLastY1(e.clientY - rect.top);
  };

  const stopDrawing1 = () => {
    setIsDrawing1(false);
  };

  const clearSignature1 = () => {
    const canvas = canvasRef1.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureDataUrl1(null);
  };

  const saveSignature1 = () => {
    const canvas = canvasRef1.current;
    if (!canvas) return;
    const dataURL = canvas.toDataURL('image/png');
    setSignatureDataUrl1(dataURL);
  };

  // Signature 2
  const startDrawing2 = (e) => {
    const canvas = canvasRef2.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    setIsDrawing2(true);
    setLastX2(e.clientX - rect.left);
    setLastY2(e.clientY - rect.top);
  };

  const draw2 = (e) => {
    if (!isDrawing2) return;
    const canvas = canvasRef2.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(lastX2, lastY2);
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    setLastX2(e.clientX - rect.left);
    setLastY2(e.clientY - rect.top);
  };

  const stopDrawing2 = () => {
    setIsDrawing2(false);
  };

  const clearSignature2 = () => {
    const canvas = canvasRef2.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureDataUrl2(null);
  };

  const saveSignature2 = () => {
    const canvas = canvasRef2.current;
    if (!canvas) return;
    const dataURL = canvas.toDataURL('image/png');
    setSignatureDataUrl2(dataURL);
  };

  return (
    <div className="final-details-download-container">
      <div className="final-details-section">
        <h2>Final Details</h2>
        <div className="lease-renewal">
          <h3>Lease Renewal</h3>
          <p>Will the tenant have the option to renew the lease?</p>
          <div className="renewal-options">
            <button className="renewal-button" onClick={() => handleLeaseRenewalChange('No option specified')}>No option specified</button>
            <button className="renewal-button" onClick={() => handleLeaseRenewalChange('Yes, revise standard clause')}>Yes, revise standard clause</button>
            <button className="renewal-button" onClick={() => handleLeaseRenewalChange('Yes, same terms')}>Yes, same terms</button>
          </div>
        </div>
        <div className="e-signature-container">
          <div className="e-signature" style={{display:'flex'}}>
            <div style={{marginRight:'450px'}}>
              <h3>Client</h3>
              <canvas
                ref={canvasRef1}
                id="signature-pad-1"
                width={400}
                height={200}
                style={{ border: '2px dashed black', cursor: 'crosshair' }}
                onMouseDown={startDrawing1}
                onMouseMove={draw1}
                onMouseUp={stopDrawing1}
                onMouseOut={stopDrawing1}
              />
              <div id="controls-1" style={{ marginTop: '10px' }}>
                <button id="clear-button-1" onClick={clearSignature1}>Clear</button>
                <button id="save-button-1" onClick={saveSignature1}>Save</button>
              </div>
              {signatureDataUrl1 && <img id="signature-image-1" src={signatureDataUrl1} alt="Signature 1" style={{ marginTop: '20px', maxWidth: '100%' }} />}
            </div>
            <div>
              <h3>Owner</h3>
              <canvas
                ref={canvasRef2}
                id="signature-pad-2"
                width={400}
                height={200}
                style={{ border: '2px dashed black', cursor: 'crosshair' }}
                onMouseDown={startDrawing2}
                onMouseMove={draw2}
                onMouseUp={stopDrawing2}
                onMouseOut={stopDrawing2}
              />
              <div id="controls-2" style={{ marginTop: '10px' }}>
                <button id="clear-button-2" onClick={clearSignature2}>Clear</button>
                <button id="save-button-2" onClick={saveSignature2}>Save</button>
              </div>
              {signatureDataUrl2 && <img id="signature-image-2" src={signatureDataUrl2} alt="Signature 2" style={{ marginTop: '10px', maxWidth: '100%' }} />}
            </div>
          </div>
        </div>
      </div>

      <div className="download-section">
        <h2>Download</h2>
        <div className="leased-property">
          <h3>Leased Property</h3>
          <p>To download your Rental Agreement, click download button</p>
          <div className="download-button-container">
            <button className="download-button">Download</button>
          </div>
        </div>
      </div>

      <div className="about-us-section">
        <h2>About us</h2>
        <div className="about-content">
          <div className="legal-docs-info">
            <img src="/legal.png" className="legal-docs-logo"  />
            <b className="logo-text">legal docs logo</b>
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
              <a href="https://www.instagram.com/dhanushh15/" className="social-icon">
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
          <a href="#">Privacy Policy</a> <a href="#">Terms and Conditions</a>
        </div>
        <div className="copyright">
          Copyright 2025 by Legaldocs.com. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default FinalDetailsDownload;