import { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.3; 
      document.getElementById('image-section').style.backgroundPosition = `center ${offset}px`;
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
        <div className="display-4">Intelligent Cattle Monitoring System</div>
        <div className="lead">A smarter way to track, protect, and manage your cattle.</div>
      </div>
    </header>
  );
}

export default Hero;
