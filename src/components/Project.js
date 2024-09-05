function Project({ title, imageUrl, deployedLink, repoLink }) {
    return (
      <div className="project">
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <a href={repoLink}>GitHub Repo</a>
      </div>
    );
  }
  
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
        {projects.map(project => (
          <Project key={project.title} {...project} />
        ))}
      </section>
    );
  }
  export default Portfolio;
  