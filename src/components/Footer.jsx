import logo from '../assets/images/whitelogo.png';
import { Mail, MessageCircle } from 'lucide-react';

// Instagram SVG Icon Component
const InstagramIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37 Z" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

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
            <a href="https://www.instagram.com/nikov_care?igsh=MTRuZjdvbXduY2x1cQ%3D%3D&utm_source=qr" style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><InstagramIcon size={18} /> Instagram</a>
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
