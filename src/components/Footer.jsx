import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        {/*<div className="footer-logo">
          <img
            src="https://screenrec.com/favicon.ico"
            alt="Logo"
            className="logo-image"
          />
        </div>*/}

        {/* Navigation */}
        <nav className="footer-nav">
          <a href="#features" className="footer-link">
            Features
          </a>
          <a href="#pricing" className="footer-link">
            Pricing
          </a>
          <a href="#faq" className="footer-link">
            FAQ
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </nav>

        {/* Social icons */}
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} Roshan SInhabahu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
