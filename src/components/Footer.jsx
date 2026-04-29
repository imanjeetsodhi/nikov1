import logo from '../assets/images/whitelogo.png';
import { Mail, Share2, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src={logo} alt="NIKOV" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Simple, effective self-care.</p>
          </div>
          
          <div className="footer-col">
            <h5 style={{ color: '#FFFFFF' }}>Connect</h5>
            <a href="https://wa.me/message/6DKPA33LE5ZZG1" style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MessageCircle size={18} /> WhatsApp</a>
            <a href="https://www.instagram.com/nikov_care?igsh=MTRuZjdvbXduY2x1cQ%3D%3D&utm_source=qr" style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Share2 size={18} /> Instagram</a>
            <a href="mailto:info.nikovsales@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={18} /> info.nikovsales@gmail.com</a>
          </div>
          
          <div className="footer-col">
            <h5 style={{ color: '#FFFFFF' }}>Legal</h5>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Terms & Conditions</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Shipping & Returns</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>© 2026 NIKOV. All rights reserved. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
