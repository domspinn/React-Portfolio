import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Update styles for consistency

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="site-title">Your Portfolio</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
