import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="subtitle-caps">LOVED BY YOU</span>
          <h2>Words from our community.</h2>
        </div>
        
        <div className="review-card reveal">
          <div className="stars">
            <Star size={20} fill="#D4AF37" stroke="none" />
            <Star size={20} fill="#D4AF37" stroke="none" />
            <Star size={20} fill="#D4AF37" stroke="none" />
            <Star size={20} fill="#D4AF37" stroke="none" />
            <Star size={20} fill="#D4AF37" stroke="none" />
          </div>
          <p className="review-text">
            "My hair feels softer and healthier than ever. Truly a daily essential."
          </p>
          <p className="reviewer">Aanya R.</p>
          <span className="verified">Verified Buyer</span>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
