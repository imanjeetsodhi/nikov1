import heroImg from '../assets/images/banner.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content reveal">
          <span className="subtitle-caps">CLEAN · CONSCIOUS · CRAFTED</span>
          <h1>Clean Beauty.<br /><span className="italic cream-text">Real Results.</span></h1>
          <p>
            Elevate your daily self-care with NIKOV — simple, effective, 
            and gentle formulations made for modern skin and hair.
          </p>
          <div className="hero-actions">
            <a href="https://www.amazon.in/l/27943762031?me=A3C9CL00UOOAS3&ref_=ssf_share" className="btn btn-primary">Shop on Amazon →</a>
            <a href="https://wa.me/message/6DKPA33LE5ZZG1" className="btn btn-outline">Order on WhatsApp</a>
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
