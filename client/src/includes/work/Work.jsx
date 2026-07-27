// import React from 'react'
import ProjectCard from "../../components/ProjectCard";
import "./work.css";
import companyProfile from "../../assets/img/jnt_cargo.webp";
import webGallery from "../../assets/img/galery_web.webp";
import toDo from "../../assets/img/todo_list.webp";

const dataWork = [
  {
    title: "Web Profile Company tes1",
    description:
      "Ini adalah project website pertama ku di perusahaan J&T Cargo NGP014B, yaitu sebuah web profile company yang minimalis dan sudah responsive.",
    github: "https://github.com/khukoroshi/Web-JTcargo",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: companyProfile,
  },
  {
    title: "Web Profile Company tes2",
    description:
      "Ini adalah project website pertama ku di perusahaan J&T Cargo NGP014B, yaitu sebuah web profile company yang minimalis dan sudah responsive.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: webGallery,
  },
  {
    title: "Web Profile Company tes3",
    description:
      "Ini adalah project website pertama ku di perusahaan J&T Cargo NGP014B, yaitu sebuah web profile company yang minimalis dan sudah responsive.",
    github: "https://github.com/khukoroshi/Web-JTcargo",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: toDo,
  },
];

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
