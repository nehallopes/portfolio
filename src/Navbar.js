import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={navbarClasses.join(' ')}>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#home" className="nav-links">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-links">About</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio" className="nav-links">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-links">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
