// import React from 'react'
import "../css/btnHead.css";

const ButtonHead = ({ contactOpen }) => {
  return (
    <div className="btn-head">
      <nav>
        <a href="#about">about</a>
        <a href="#experient">experience</a>
        <a href="#work">work</a>
      </nav>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button id="btnPopCon" onClick={contactOpen}>
          contact
        </button>
        <div className="theme-togle">
          <input type="checkbox" name="" id="toggleTheme" />
          <div className="toggle"></div>
        </div>
      </div>
    </div>
  );
};
//
export default ButtonHead;
