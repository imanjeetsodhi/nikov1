import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Experience from './components/Experience';
import Story from './components/Story';
import Reviews from './components/Reviews';
import Social from './components/Social';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  const [showBuyPill, setShowBuyPill] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowBuyPill(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        <Hero />
        <TrustBadges />
        <ProductGrid searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {/* <Features /> */}
        {/* <Story /> */}
        {/* <Experience /> */}
        <Reviews />
        <Social />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      <a href="https://wa.me/message/6DKPA33LE5ZZG1" className="whatsapp-widget" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={32} fill="currentColor" />
      </a>
      
      <a href="#products" className={`buy-now-pill ${showBuyPill ? 'visible' : ''}`}>
        Buy Now
      </a>
    </div>
  );
}

export default App;
