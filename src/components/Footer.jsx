import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>NIKOV</div>
            <p>Simple, effective self-care.</p>
          </div>
          
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="https://wa.me/yournumber">WhatsApp</a>
            <a href="#">Instagram</a>
            <p>hello@nikov.com</p>
          </div>
          
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Shipping & Returns</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 NIKOV. All rights reserved. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
