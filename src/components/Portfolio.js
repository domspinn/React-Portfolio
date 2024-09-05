import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Event Planner Project',
      repoLink: 'https://github.com/domspinn/Event-Planner-Project',
    },
    {
      title: 'CMS Style Blog Site',
      repoLink: 'https://github.com/domspinn/CMS-Style-Blog-Site',
    },
  ];

  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
