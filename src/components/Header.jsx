import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="site-title">My Portfolio</h1>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
