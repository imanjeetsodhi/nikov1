import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src={logo} alt="NIKOV" />
        </div>
        
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Why NIKOV</a>
          <a href="#story" onClick={() => setIsMenuOpen(false)}>Story</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a href="#products" className="shop-now-link" onClick={() => setIsMenuOpen(false)}>Shop Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
