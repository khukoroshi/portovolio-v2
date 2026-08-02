// import React from 'react'
import { useState } from "react";
import ExperientWork from "./ExperientWork";
import TechImage from "./TechImage";
import { menuItems } from "../../data/items";

const ContentExperient = () => {
  // 1. Simpan ID tab yang sedang aktif di state (default: "tab1")
  const [activeTab, setActiveTab] = useState("c-jnt");

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
