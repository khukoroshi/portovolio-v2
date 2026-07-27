// import React from "react";

import "../css/projectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="content">
      <div className="project-image">
        <div className="front"></div>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-description">
        <h2>{project.title}</h2>
        <span className="wordDesk">
          {project.description}[
          {project.github ? (
            <a href={project.github}>link github</a>
          ) : (
            <span>project privat</span>
          )}
          ].
        </span>
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
