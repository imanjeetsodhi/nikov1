import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="logo">NIKOV</div>
        
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#features">Why NIKOV</a>
          <a href="#experience">Story</a>
          <a href="#reviews">Reviews</a>
          <a href="#products" className="shop-now-link">Shop Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
