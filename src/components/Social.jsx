import combo from '../assets/images/combo.PNG';
import shampoo from '../assets/images/shampoo.PNG';
import face from '../assets/images/face.PNG';
import conditioner from '../assets/images/conditioner.PNG';

const Social = () => {
  return (
    <section className="social-section">
      <div className="container">
        <span className="subtitle-caps">@nikov_care</span>
        <h2 style={{ fontSize: '4.5rem' }}>Live the <span className="italic">ritual.</span></h2>
        <a href="https://instagram.com/nikov_care" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: '600', marginTop: '1rem', display: 'inline-block', fontSize: '1.1rem' }}>
          follow @nikov_care
        </a>
        
        <div className="social-grid reveal">
          <div className="social-img"><img src={combo} alt="NIKOV Instagram" /></div>
          <div className="social-img"><img src={shampoo} alt="Social 2" /></div>
          <div className="social-img"><img src={face} alt="Social 3" /></div>
          <div className="social-img"><img src={conditioner} alt="Social 4" /></div>
        </div>

        <div style={{ marginTop: '100px' }} className="reveal">
          <h2 style={{ fontSize: '4.5rem' }}>Upgrade your daily care routine.</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Simple steps. Powerful results.</p>
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
