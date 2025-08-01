import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Logo from './logo.webp';
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
  FaInstagram,
  FaLinkedin
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
      setIsOpen(false);}
  };

  return (
    <div className={`header-container ${scrolled ? 'scrolled' : 'transparent'}`}>
  
      <div className="left-section">
        <div className="logo-and-toggle">
          <div className="logo-container">
            <img
              src={Logo}
              alt="PCS Global Logo"
              className="logo"
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="toggle-button"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FiX size={40} /> : <FiMenu size={40} />}
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
            <a href="mailto:support@pcsgpl.com" className="email-link">
              <span>support@pcsgpl.com</span>
            </a>
          </div>
          <div className="info-box">
            <FiHelpCircle className="info-icon" />
            <span>Need Help?</span>
          </div>
          <div className="info-box social">
            <a href="https://www.facebook.com/hrpcsglobal/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/pcs-global-pvt-ltd/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/pcsglobalpvtltd/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

       
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <div className="nav-item">
            <Link to="/"><p>Home</p></Link>
          </div>
          <div className="nav-item">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="#" className="menu-title">Services</a>
                <div className="dropdown-panel">
                  <div className="downpannel_content">
                    <div className="dropdown-panel-list">
                      <div className="item">
                        <div className="dropdown_menu-title">
                          <Link to="/enterprise-web-solutions"><p>Enterprise Web Solutions</p></Link>
                          <Link to="/branding-design-solutions"><p>Branding & Design</p></Link>
                          <Link to="/marketing-solutions"><p>Marketing & Strategy</p></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-item">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="#" className="menu-title">About</a>
                <div className="dropdown-panel">
                  <div className="downpannel_content">
                    <div className="dropdown-panel-list">
                      <div className="item">
                        <div className="dropdown_menu-title">
                          <Link to="/about"><p>Company</p></Link>
                          <Link to="/our-history"><p>Team</p></Link>
                          <Link to="/about-careers"><p>Careers</p></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-item">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="#" className="menu-title">Projects</a>
                <div className="dropdown-panel">
                  <div className="downpannel_content">
                    <div className="dropdown-panel-list">
                      <div className="item">
                        <div className="dropdown_menu-title">
                          <Link to="/projects-completed"><p>Completed</p></Link>
                          <Link to="/projects-ongoing"><p>Ongoing</p></Link>
                          <Link to="/projects-upcoming"><p>Upcoming</p></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-item">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="#" className="menu-title">Contact Us</a>
                <div className="dropdown-panel">
                  <div className="downpannel_content">
                    <div className="dropdown-panel-list">
                      <div className="item">
                        <div className="dropdown_menu-title">
                          <Link to="/contact-form"><p>Contact Form</p></Link>
                          <Link to="/contact-support"><p>Support</p></Link>
                          <Link to="/contact-location"><p>Location</p></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;