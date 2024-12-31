import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onHomeClick, onAboutClick, onProjectsClick, onResumeClick, onGitHubClick, onLinkedInClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="navbar">
      {/* Menu button for mobile view */}
      <div className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li className="home" onClick={() => { onHomeClick(); closeMenu(); }}>Home</li>
        <li className="home" onClick={() => { onAboutClick(); closeMenu(); }}>About</li>
        <li className="home" onClick={() => { onProjectsClick(); closeMenu(); }}>Projects</li>
        <li className="home" onClick={() => { onResumeClick(); closeMenu(); }}>Resume</li>

        {/* These will be part of the menu only in mobile view */}
        <li className="contact-item" onClick={() => { onGitHubClick(); closeMenu(); }}>GitHub</li>
        <li className="contact-item" onClick={() => { onLinkedInClick(); closeMenu(); }}>LinkedIn</li>
      </ul>
    </nav>
  );
};

export default Navbar;
