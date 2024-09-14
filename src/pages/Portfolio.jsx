import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    link: 'https://github.com/yourprofile/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    link: 'https://github.com/yourprofile/project-two',
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
