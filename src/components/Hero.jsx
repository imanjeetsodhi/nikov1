import React from 'react';
import heroImg from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content reveal">
          <span className="subtitle-caps">CLEAN · CONSCIOUS · CRAFTED</span>
          <h1>Clean Beauty.<br />Real Results.</h1>
          <p>
            Elevate your daily self-care with NIKOV — simple, effective, 
            and gentle formulations made for modern skin and hair.
          </p>
          <div className="hero-actions">
            <a href="https://amazon.in" className="btn btn-primary">Shop on Amazon →</a>
            <a href="https://wa.me/yournumber" className="btn btn-outline">Order on WhatsApp</a>
          </div>
        </div>
      </div>
      
      <div className="hero-bg reveal">
        <img src={heroImg} alt="NIKOV Products" />
      </div>

      <div className="scroll-indicator reveal">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
