import { useState, useEffect } from 'react';
import '../App.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 🟢 Toggle for menu open

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-white' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">MooMap</a>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav ms-auto text-center">
            <a className="nav-link glass-btn mx-3" href="#problem" onClick={() => setIsOpen(false)}>Challenge</a>
            <a className="nav-link glass-btn mx-3" href="#technology" onClick={() => setIsOpen(false)}>Technology</a>
            <a className="nav-link glass-btn mx-3" href="#aim" onClick={() => setIsOpen(false)}>Target</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
