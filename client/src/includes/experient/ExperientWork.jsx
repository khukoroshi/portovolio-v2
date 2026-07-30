// import React from "react";

const ExperientWork = ({ activeTab }) => {
  return (
    <div id="c-jnt" className={`tab ${activeTab === "c-jnt" ? "active" : ""}`}>
      <h2>Web developer J&T Cargo NGP014B</h2>
      <span>january - april 2024</span>
      <ul>
        <li>Membangun dan mengembangkan website profile company.</li>
        <li>Membuat website terlihat Responsive dan interaktif.</li>
        <li>
          Menghosting website agar dapat di akses secara public [
          <a href="https://github.com/khukoroshi/Web-JTcargo">link github</a>
          ].
        </li>
      </ul>
    </div>
  );
};

export default ExperientWork;
