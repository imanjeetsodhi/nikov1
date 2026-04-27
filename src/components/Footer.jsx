import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src={logo} alt="NIKOV" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p>Simple, effective self-care.</p>
          </div>
          
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="https://wa.me/message/6DKPA33LE5ZZG1">WhatsApp</a>
            <a href="https://www.instagram.com/nikov_care?igsh=MTRuZjdvbXduY2x1cQ%3D%3D&utm_source=qr">Instagram</a>
            <p>info.nikovsales@gmail.com</p>
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
