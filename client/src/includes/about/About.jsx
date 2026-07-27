// import React from 'react'

import "./about.css";
import provile from "../../assets/img/gprof1.webp";

const About = () => {
  return (
    <div id="about" className="container">
      <section className="a-bout">
        <h2 className="sub-bab-h2">About me</h2>
        <div className="content">
          <div className="t-about">
            <p>
              Hi! Nama saya Haikal Firansyah, seorang web developer dengan minat
              di bidang frontend dan backend. Saya lulusan SMK Al-Ihsan
              Batujajar (2025), jurusan Rekayasa Perangkat Lunak.
            </p>
            <br />
            <p>
              Saya senang mempelajari teknologi baru dan berfokus pada pembuatan
              website yang sederhana, elegan, dan fungsional. Dengan kode yang
              bersih, efisien, dan skalabel, saya ingin menghadirkan pengalaman
              pengguna yang lancar.
            </p>
            <br />
            <p>
              Web development bagi saya adalah batu loncatan menuju cita-cita
              menjadi programmer handal di bidang keamanan, peretasan etis, dan
              pengembangan game. Saya percaya setiap proyek adalah kesempatan
              belajar, dan saya selalu terbuka untuk berkolaborasi serta berbagi
              pengetahuan.
            </p>
          </div>
          <div className="i-about">
            <div className="front"></div>
            <img
              id="gbr-about"
              src={provile}
              alt="haikal picture"
              width="100%"
            />
            <div className="back"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
