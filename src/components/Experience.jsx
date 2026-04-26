import React from 'react';
import heroImg from '../assets/images/hero.png'; // Reusing hero image for now

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-content">
          <div className="experience-text reveal">
            <span className="subtitle-caps">THE EXPERIENCE</span>
            <h2>Feel the difference.</h2>
            <p>
              Lather. Rinse. Glow. A single use is all it takes to feel the 
              softness, lightness, and clarity of NIKOV.
            </p>
            <a href="#products" className="btn btn-primary">Discover More</a>
          </div>
          <div className="experience-image reveal">
            <img src={heroImg} alt="Experience Nikov" style={{ borderRadius: '20px', width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
