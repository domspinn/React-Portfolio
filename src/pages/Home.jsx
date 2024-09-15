import React from 'react';
import '../Home.css';

const Home = () => {
  return (
    <section className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Your journey starts here. Explore my work and get to know me.</p>
      <div className="button-container">
        <a href="/portfolio" className="btn-primary">View My Portfolio</a>
        <a href="/about" className="btn-secondary">About Me</a>
        <a href="/contact" className="btn-secondary">Contact Me</a>
      </div>
    </section>
  );
};

export default Home;
