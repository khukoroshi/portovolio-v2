// import React from 'react'
import ProjectCard from "../../components/ProjectCard";
import "./work.css";
import { dataWork } from "../../data/database";

const Work = () => {
  return (
    <div id="work" className="container">
      <section className="work">
        <h2 className="sub-bab-h2">Some Things I’ve Built</h2>
        <div className="k-cont">
          {dataWork.map((work) => (
            <ProjectCard key={work.title} project={work} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
