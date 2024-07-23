import  { useState } from 'react';
import '../App.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav id="desk-nav">
        <div className="logo">Ameen</div>
        <div>
          <ul className="nav-link">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* --------HUMBURBAR--------- */}

      <nav id="hambur-nav">
        <div className="logo">Ameen</div>
        <div className="hambur-menu">
          <div className={`hambur-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#project" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

