// import React from 'react'

import "../css/work.css";

const Work = () => {
  return (
    <div id="work" class="container">
      <section class="work">
        <h2 class="sub-bab-h2">Some Things I’ve Built</h2>
        <div class="k-cont">
          <div class="content">
            <div class="project-description">
              <h2>Web profile company</h2>
              <span>
                Ini adalah project website pertama ku di perusahaan J&T Cargo
                NGP014B, yaitu sebuah web profile company yang minimalis dan
                sudah responsive [
                <a href="https://github.com/khukoroshi/Web-JTcargo">
                  link github
                </a>
                ].
              </span>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>tailwind CSS</li>
              </ul>
            </div>
            <div class="project-image">
              <div class="front"></div>
              <img src="img/Annotation 2025-09-21 215025.webp" alt="" />
            </div>
          </div>
          <div class="content">
            <div class="project-description">
              <h2>Web To-Do List</h2>
              <span>
                Ini adalah sebuah website yang ku buat ketika ujian kompetensi
                di sekolah, sebuah To-Do List sederhana dengan sistem Login dan
                Register, dan waktu deadline.
              </span>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
              </ul>
            </div>
            <div class="project-image">
              <div class="front"></div>
              <img src="img/Screenshot_21-9-2025_21443_localhost.webp" alt="" />
            </div>
          </div>
          <div class="content">
            <div class="project-description">
              <h2>Web Galery</h2>
              <span>
                ini adalah sebuah website tugas sekolah membuat web galery
                sederhana dengan fitur CRUD, Login & Register.
              </span>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
              </ul>
            </div>
            <div class="project-image">
              <div class="front"></div>
              <img src="img/Screenshot_23-9-2025_073_localhost.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
