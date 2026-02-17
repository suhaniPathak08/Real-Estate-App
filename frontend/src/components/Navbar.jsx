import React, { useState, useEffect } from 'react';

function Navbar({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="logo">DreamHomes</div>
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}>
                Home
              </a>
            </li>
            <li>
              <a href="#properties" onClick={(e) => {
                e.preventDefault();
                scrollToSection('properties');
              }}>
                Properties
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;