import comboImg from '../assets/images/combo.png';
import bgBanner from '../assets/images/experienceBanner.png';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="experience-section"
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(252, 249, 243, 0.95) 30%, rgba(252, 249, 243, 0.1) 100%), url(${bgBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
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
            <img src={comboImg} alt="NIKOV Combo" style={{ borderRadius: 'var(--border-radius)', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
