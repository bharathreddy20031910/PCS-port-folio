import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logopcs.webp';
import {
  FiMenu, FiX, FiMapPin, FiHelpCircle, FiMail
} from 'react-icons/fi';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedin
} from 'react-icons/fa';
import './Header.css';

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

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className={`header-container ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="left-section">
        <div className="logo-and-toggle">
          <div className="logo-container">
            <img src={Logo} alt="PCS Global Logo" className="logo" />
          </div>
          <button onClick={toggleNav} className="toggle-button" aria-label="Toggle Navigation">
            {isOpen ? <FiX size={40} /> : <FiMenu size={40} />}
          </button>
        </div>
      </div>

      <div className="right-section">
        <div className="info-boxes">
          <div className="info-box">
            <FiMapPin className="info-icon" />
            <span>Merlin Infinite, Sector V, Saltlake, Kolkata</span>
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
            <a href="https://www.facebook.com/hrpcsglobal/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/pcs-global-pvt-ltd/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/pcsglobalpvtltd/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="nav-links-wrapper">
          <div className="nav-links-bg"></div>
          <div className={`nav-links ${isOpen ? 'show' : ''}`}>
            {[
              { title: "Home", path: "/" },
              {
                title: "Services", submenu: [
                  { name: "Enterprise Web Solutions", path: "/enterprise-web-solutions" },
                  { name: "Branding & Design", path: "/branding-design-solutions" },
                  { name: "Marketing & Strategy", path: "/marketing-solutions" }
                ]
              },
              {
                title: "About", submenu: [
                  { name: "Company", path: "/about" },
                  { name: "Team", path: "/our-history" },
                  { name: "Careers", path: "/about-careers" }
                ]
              },
              {
                title: "Projects", submenu: [
                  { name: "Completed", path: "/projects-completed" },
                  { name: "Ongoing", path: "/projects-ongoing" },
                  { name: "Upcoming", path: "/projects-upcoming" }
                ]
              },
              {
                title: "Contact Us", submenu: [
                  { name: "Contact Form", path: "/contact-form" },
                  { name: "Support", path: "/contact-support" },
                  { name: "Location", path: "/contact-location" }
                ]
              },
              { title: "Sign up", path: "/signup" },
            ].map((item, idx) => (
              <div key={idx} className="nav-item">
                {item.submenu ? (
                  <ul className="desktop-menu-category-list">
                    <li className="menu-category">
                      <a href="#" className="menu-title">{item.title}</a>
                      <div className="dropdown-panel">
                        <div className="downpannel_content">
                          <div className="dropdown-panel-list">
                            <div className="item dropdown_menu-title">
                              {item.submenu.map((sub, subIdx) => (
                                <Link to={sub.path} key={subIdx}><p>{sub.name}</p></Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                ) : (
                  <Link to={item.path}><p>{item.title}</p></Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
