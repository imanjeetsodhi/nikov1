import React from 'react';

const TrustBadges = () => {
  const badges = [
    { text: ["NO HARSH", "CHEMICALS"] },
    { text: ["SUITABLE FOR", "DAILY USE"] },
    { text: ["LOVED BY", "CUSTOMERS"] }
  ];

  return (
    <section className="trust-badges-section reveal">
      <div className="container">
        <div className="trust-badges-grid">
          {badges.map((badge, index) => (
            <div key={index} className="trust-badge-item">
              <div className="badge-text">
                {badge.text[0]} <br />
                {badge.text[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
