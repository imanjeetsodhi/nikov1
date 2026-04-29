import combo from '../assets/images/combo.png';
import shampoo from '../assets/images/shampoo.png';
import face from '../assets/images/face.png';
import conditioner from '../assets/images/conditioner.png';

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
          <div className="social-img"><img src={combo} alt="NIKOV Instagram" style={{ borderRadius: '12px' }} /></div>
          <div className="social-img"><img src={shampoo} alt="Social 2" style={{ borderRadius: '12px' }} /></div>
          <div className="social-img"><img src={face} alt="Social 3" style={{ borderRadius: '12px' }} /></div>
          <div className="social-img"><img src={conditioner} alt="Social 4" style={{ borderRadius: '12px' }} /></div>
        </div>

        <div style={{ marginTop: '100px' }} className="reveal">
          <h2 style={{ fontSize: '4.5rem' }}>Upgrade your daily care routine.</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Simple steps. Powerful results.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a href="https://amazon.in/storefront?me=A3C9CL00UOOAS3&ref_=ssf_share" className="btn btn-primary">Shop on Amazon</a>
            <a href="https://wa.me/message/6DKPA33LE5ZZG1" className="btn btn-outline">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
