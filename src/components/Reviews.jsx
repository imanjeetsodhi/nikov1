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
              "Nice products ... Really liked it. Highly recommended to all"
            </p>
            <p className="reviewer">Isha Verma</p>
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
              "Such a "wowww" products. Must Buy"
            </p>
            <p className="reviewer">Riti Raj</p>
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
              "My wife said that this is a very good product and she wants to recommend it to everyone."
            </p>
            <p className="reviewer">Vaibhav Solanki</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
