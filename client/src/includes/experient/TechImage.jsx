// import React from 'react'

import { techLogoData } from "../../data/imageData";

const Image = ({ imgData }) => {
  return <img src={imgData.url} alt={imgData.name} />;
};

const TechImage = ({ activeTab }) => {
  return (
    <div
      id="c-tech"
      className={`tab ${activeTab === "c-tech" ? "active" : ""}`}
    >
      <h2>teknologi yang ku pakai</h2>
      <span>2022 - sekarang</span>
      <div className="tech-con-img">
        {techLogoData.map((data) => (
          <Image key={data.name} imgData={data} />
        ))}
      </div>
    </div>
  );
};

export default TechImage;
