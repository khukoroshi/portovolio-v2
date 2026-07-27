// import React from 'react'
import "./experient.css";

const Experient = () => {
  return (
    <div id="experient" className="container">
      <section className="exper">
        <h2 className="sub-bab-h2">Experience</h2>
        <div className="content-exp">
          <nav className="sidebar">
            <ul>
              <li className="active" data-tab="c-jnt">
                J&T Cargo
              </li>
              <li data-tab="c-tech">technology</li>
            </ul>
          </nav>
          <div className="con-nav">
            <div id="c-jnt" className="tab active">
              <h2>Web developer J&T Cargo NGP014B</h2>
              <span>january - april 2024</span>
              <ul>
                <li>Membangun dan mengembangkan website profile company.</li>
                <li>Membuat website terlihat Responsive dan interaktif.</li>
                <li>
                  Menghosting website agar dapat di akses secara public [
                  <a href="https://github.com/khukoroshi/Web-JTcargo">
                    link github
                  </a>
                  ].
                </li>
              </ul>
            </div>
            <div id="c-tech" className="tab">
              <h2>teknologi yang ku pakai</h2>
              <span>2022 - sekarang</span>
              <div className="tech-con-img">
                <img src="img/logo/html-5-color/html-5-240.png" alt="" />
                <img src="img/logo/css-logo-color/css-logo-240.png" alt="" />
                <img
                  src="img/logo/javascript-color/javascript-240.png"
                  alt=""
                />
                <img src="img/logo/php.svg" alt="" />
                <img src="img/logo/python-color (1)/python-240.png" alt="" />
                <img src="img/logo/java-logo-color/java-logo-240.png" alt="" />
                <img
                  src="img/logo/mysql-logo-undefined/mysql-logo-500.png"
                  alt=""
                />
                <img src="img/logo/git-logo-color/git-logo-240.png" alt="" />
                <img src="img/logo/github-logo/github-logo-240.png" alt="" />
                <img src="img/logo/chatgpt-color/chatgpt-240.png" alt="" />
                <img src="img/logo/linux.png" alt="" />
                <img src="./img/logo/icons8-react-100.png" alt="" />
                <img src="./img/logo/icons8-nodejs-48.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="content-serti">
        <div className="cour-2" style="gap: 1em">
          <div className="img-card">
            <img src="img/MDL-504.webp" alt="Mdl-504" />
          </div>
          <div className="img-card">
            <img src="img/MDL -566.webp" alt="MDL-566" />
          </div>
          <div className="img-card">
            <img src="img/MDL-567.webp" alt="MDL-567" />
          </div>
          <div className="img-card">
            <img src="img/Screenshot_2025-09-19_21-27-09.webp" alt="hacyiv8" />
          </div>
          <div className="img-card">
            <img
              src="img/dicoding1.webp"
              alt="Introduction to Financial Literacy"
            />
          </div>
          <div className="img-card">
            <img src="img/ibm5.webp" alt="ALM-COURSE_4058918" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experient;
