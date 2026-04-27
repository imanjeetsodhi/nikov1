import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="subtitle-caps">LOVED BY YOU</span>
          <h2>Words from <span className="italic">our Community.</span></h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="review-card reveal" style={{ padding: '3rem 2rem', background: 'var(--white)', borderRadius: 'var(--border-radius)' }}>
            <div className="stars">
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
            </div>
            <p className="review-text" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              "My hair feels softer and healthier than ever. Truly a daily essential."
            </p>
            <p className="reviewer">Aanya R.</p>
            <span className="verified">Verified Buyer</span>
          </div>

          <div className="review-card reveal" style={{ padding: '3rem 2rem', background: 'var(--white)', borderRadius: 'var(--border-radius)' }}>
            <div className="stars">
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
            </div>
            <p className="review-text" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              "The face wash gives such a natural glow. No dryness at all!"
            </p>
            <p className="reviewer">Ishaan K.</p>
            <span className="verified">Verified Buyer</span>
          </div>

          <div className="review-card reveal" style={{ padding: '3rem 2rem', background: 'var(--white)', borderRadius: 'var(--border-radius)' }}>
            <div className="stars">
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
              <Star size={20} fill="#D4AF37" stroke="none" />
            </div>
            <p className="review-text" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              "Nikov products have replaced my entire shelf. Highly recommended."
            </p>
            <p className="reviewer">Meera P.</p>
            <span className="verified">Verified Buyer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
