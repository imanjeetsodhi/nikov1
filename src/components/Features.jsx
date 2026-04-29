import { Leaf, ShieldCheck, Droplets, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Leaf size={32} />,
      title: 'Natural Ingredients',
      desc: 'Gentle and effective care, rooted in nature.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'No Harsh Chemicals',
      desc: 'Safe formulations for everyday use.'
    },
    {
      icon: <Droplets size={32} />,
      title: 'Deep Hydration',
      desc: 'Nourishment from root to tip, layer by layer.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Suitable for All',
      desc: 'Crafted for every skin and hair type.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="subtitle-caps">WHY NIKOV</span>
          <h2>Honest formulas. <span className="italic">Real care.</span></h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card reveal">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
