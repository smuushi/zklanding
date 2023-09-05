import React from 'react';
// import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <a href="/about-us" target="_blank" rel="noreferrer">About Us</a>
      </div>
      <div className="footer-section">
        <a href="/contact" target="_blank" rel="noreferrer">Contact</a>
      </div>
      <div className="footer-section">
        <a href="/faq" target="_blank" rel="noreferrer">FAQ</a>
      </div>
      <div className="footer-section">
        <a href="/terms-and-conditions" target="_blank" rel="noreferrer">Terms & Conditions</a>
      </div>
      <div className="footer-section">
        <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer;
