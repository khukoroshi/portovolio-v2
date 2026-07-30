// import React from 'react'
import { useState } from "react";
import ExperientWork from "./ExperientWork";
import TechImage from "./TechImage";

const ContentExperient = () => {
  // 1. Simpan ID tab yang sedang aktif di state (default: "tab1")
  const [activeTab, setActiveTab] = useState("c-jnt");

  // Data menu sidebar (bisa kamu atur sesuai kebutuhan)
  const menuItems = [
    { id: "c-jnt", label: "J&T Cargo" },
    { id: "c-tech", label: "Technology" },
    // { id: "tab3", label: "Settings" },
  ];

  return (
    <div className="content-exp">
      <nav className="sidebar">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={activeTab === item.id ? "active" : ""}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className="con-nav">
        <ExperientWork activeTab={activeTab} />
        <TechImage activeTab={activeTab} />
      </div>
    </div>
  );
};

export default ContentExperient;
