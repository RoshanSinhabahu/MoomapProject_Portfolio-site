import { useState, useEffect, useRef } from 'react';
import '../App.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll color change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click to close menu (on mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        window.innerWidth < 992 && // Only on mobile
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-white' : 'navbar-transparent'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">MooMap</a>

        {/* Hamburger Button */}
        <div
          className={`hamburger d-lg-none ${isOpen ? 'open' : ''}${scrolled ? ' scrolled' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop Nav */}
        <div className="d-none d-lg-flex ms-auto">
          <a className="nav-link glass-btn mx-4" href="#problem">Challenge</a>
          <a className="nav-link glass-btn mx-4" href="#technology">Technology</a>
          <a className="nav-link glass-btn mx-4" href="#aim">Target</a>
        </div>

        {/* Mobile Nav */}
        <div
          className={`navbar-collapse d-lg-none ${isOpen ? 'show' : ''}`}
          id="navbarNav"
          ref={menuRef}
        >
          <div className="navbar-nav text-center">
            <a className="nav-link glass-btn" href="#problem" onClick={() => setIsOpen(false)}>Challenge</a>
            <a className="nav-link glass-btn" href="#technology" onClick={() => setIsOpen(false)}>Technology</a>
            <a className="nav-link glass-btn" href="#aim" onClick={() => setIsOpen(false)}>Target</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
