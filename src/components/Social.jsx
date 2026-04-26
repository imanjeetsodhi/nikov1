import React from 'react';
import img1 from '../assets/images/face-wash.png';
import img2 from '../assets/images/shampoo.png';
import img3 from '../assets/images/aloe-gel.png';
import img4 from '../assets/images/hero.png';

const Social = () => {
  return (
    <section className="social-section">
      <div className="container">
        <span className="subtitle-caps">@nikov</span>
        <h2>Live the ritual.</h2>
        <a href="#" style={{ color: 'var(--accent-primary)', fontWeight: '600', marginTop: '1rem', display: 'inline-block' }}>
          Follow @NIKOV
        </a>
        
        <div className="social-grid reveal">
          <div className="social-img"><img src={img1} alt="Social 1" /></div>
          <div className="social-img"><img src={img2} alt="Social 2" /></div>
          <div className="social-img"><img src={img3} alt="Social 3" /></div>
          <div className="social-img"><img src={img4} alt="Social 4" /></div>
        </div>

        <div style={{ marginTop: '100px' }} className="reveal">
          <h2>Upgrade your daily care routine.</h2>
          <p style={{ marginBottom: '2rem' }}>Simple steps. Powerful results.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="https://amazon.in" className="btn btn-primary">Shop on Amazon</a>
            <a href="https://wa.me/yournumber" className="btn btn-outline">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
