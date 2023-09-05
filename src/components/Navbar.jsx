import React from 'react';
// import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="home">
        <a href="/">zkSpin</a>
      </div>
      <div className="navbar-links">
        <a href="https://justinzhang.substack.com/p/exploring-the-landscape-of-blockchain" target="_blank" rel="noreferrer">Whitepaper (Substack)</a>
        <a href="/path/to/whitepaper.pdf" target="_blank" rel="noreferrer">Whitepaper (PDF)</a>
        <a href="https://twitter.com/zkspin" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://t.me/your_telegram_channel" target="_blank" rel="noreferrer">Telegram</a>
      </div>
    </div>
  );
}

export default Navbar;
