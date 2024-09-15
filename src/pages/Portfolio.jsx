import React from 'react';
import '../Portfolio.css';

const projects = [
  {
    title: 'Event Planner Project',
    description: 'Utilizing the Google Calendar API, you can plan events through a streamline interface.',
    link: 'https://github.com/domspinn/Event-Planner-Project',
  },
  {
    title: 'Movie Collections',
    description: 'Like LetterBoxd, but not! Save movies you have watched and rate them too! All under an account and saved to a database.',
    link: 'https://github.com/domspinn/Movie-Collections',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
