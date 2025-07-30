import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.hero-section');
      if (!section) return;

      const offset = window.scrollY * -0.2;
      section.style.backgroundPosition = `center ${offset}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="home"
      className="hero-section d-flex align-items-center justify-content-center text-white"
    >
      <div className="container text-center">
        <div className="header-text" data-aos="zoom-out">Intelligent Cattle Monitoring System</div>
        <div className="caption-text" data-aos="zoom-out" data-aos-delay="300">A smarter way to track, protect, and manage your cattle.</div>
      </div>
    </header>
  );
}

export default Hero;
