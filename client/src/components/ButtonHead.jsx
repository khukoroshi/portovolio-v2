// import React from 'react'
import "../css/btnHead.css";
// import sun from "../assets/img/sun.svg";
import { useState, useEffect } from "react";
// import iconTheme
import { iconTheme } from "../data/database";
// Daftar navigasi
import { navItems } from "../data/items";

const ButtonHead = ({
  activeNav,
  handleNavClick,
  contactOpen,
  closeMenu,
  menuIsOpen,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";

    // Set atribut HTML
    document.documentElement.setAttribute("data-theme", theme);

    // Simpan ke localStorage
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <div className={`btn-head ${menuIsOpen ? "active" : ""}`}>
      <nav>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeNav === item.href ? "active" : ""}
            onClick={(e) => {
              handleNavClick(e, item.href);
              closeMenu();
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="btnConTogg">
        <button
          id="btnPopCon"
          onClick={() => {
            contactOpen();
            closeMenu();
          }}
        >
          contact
        </button>

        <div className="themeToggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? iconTheme[1] : iconTheme[0]}
        </div>
      </div>
    </div>
  );
};
//
export default ButtonHead;
