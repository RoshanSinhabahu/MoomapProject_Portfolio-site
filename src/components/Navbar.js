import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand fixed-top ${scrolled ? 'navbar-white' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">MooMap</a>
        <div className="navbar-nav ms-auto">
          <a className="nav-link glass-btn mx-3" href="#problem">Challange</a>
          <a className="nav-link glass-btn mx-3" href="#technology">Technology</a>
          <a className="nav-link glass-btn mx-3" href="#testimonials">Testimonials</a>
          <a className="nav-link glass-btn mx-3" href="#gallery">Gallery</a>
          <a className="nav-link glass-btn mx-3" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
