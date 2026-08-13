// import React from "react";

import "../css/projectCard.css";

const AHref = ({ link, title }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="content">
      <div className="project-image">
        <div className="front"></div>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-description">
        <h2>{project.title}</h2>
        <div className="wordDesk">
          {project.description} [
          {project.github ? (
            <AHref link={project.github} title="link github" />
          ) : (
            <span>project privat</span>
          )}
          ]{project.link ? "[" : null}
          {project.link ? <AHref link={project.link} title="Demo" /> : null}
          {project.link ? "]" : null}.
        </div>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
