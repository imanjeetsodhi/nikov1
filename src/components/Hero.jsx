import heroImg from '../assets/images/banner.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content reveal">
          <span className="subtitle-caps">BEAUTY · STYLE · EVERYDAY ESSENTIALS</span>
          <h1>Everything You Need.<br /><span className="italic cream-text">All in One Place.</span></h1>
          <p>
            Discover Hair Care, Skin Care, Makeup, 
            Accessories & more from brands you love — all at NIKOV.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/message/UZV6MQQHUIPUA1" className="btn btn-outline">Order on WhatsApp</a>
          </div>
        </div>
      </div>
      
      <div className="hero-bg reveal">
        <img src={heroImg} alt="NIKOV Products" />
      </div>

      <div className="scroll-indicator reveal">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
