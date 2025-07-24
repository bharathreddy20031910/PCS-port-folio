import React, { useState, useEffect } from 'react'
import {
  FiMenu,
  FiX,
  FiMapPin,
  FiHelpCircle,
  FiMail,
} from 'react-icons/fi'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  return (
    <div className={`header-container ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="left-section">
        <div className="logo-and-toggle">
          <div className="logo-container">
            <img
              src="./src/assets/logo.webp"
              alt="PCS Global Logo"
              className="logo"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="toggle-button"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FiX size={50} /> : <FiMenu size={50} />}
          </button>
        </div>
      </div>

      <div className="right-section">
        <div className="info-boxes">
          <div className="info-box">
            <FiMapPin className="info-icon" />
            <span>Merlin Infinite, Sector V, Saltlake, Kolkata, West Bengal</span>
          </div>
          <div className="info-box">
            <FiMail className="info-icon" />
            <span>support@pcsglobal.in</span>
          </div>
          <div className="info-box">
            <FiHelpCircle className="info-icon" />
            <span>Need Help?</span>
          </div>
          <div className="info-box social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <div className="nav-item" onClick={() => scrollToSection('home')}><span>Home</span></div>
          <div className="nav-item" onClick={() => scrollToSection('services')}><span>Services</span></div>
          <div className="nav-item" onClick={() => scrollToSection('about')}><span>About</span></div>
          <div className="nav-item" onClick={() => scrollToSection('projects')}><span>Projects</span></div>
          <div className="nav-item" onClick={() => scrollToSection('contact')}><span>Contact Us</span></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
