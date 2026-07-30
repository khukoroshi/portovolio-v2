// import React from 'react'
// import clsx from 'clsx';
import { useState } from "react";
import "./header.css";
import ButtonMenu from "../../components/ButtonMenu";
import ButtonHead from "../../components/ButtonHead";

function Header({ contactOpen, isScroll }) {
  // State untuk menyimpan tautan navigasi yang sedang aktif
  const [activeNav, setActiveNav] = useState("#home");

  // Handler Smooth Scroll versi React Modern
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveNav(href); // Update class active

    // Cari elemen target berdasarkan ID (misal #about)
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // API Bawaan Browser untuk Smooth Scroll
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="header">
      <header className={`mainHeader ${isScroll ? "scrolled" : ""}`}>
        <h1>
          <a
            href="#home"
            className="active"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            Haikal Firansyah
          </a>
        </h1>
        <ButtonMenu />
        <ButtonHead
          activeNav={activeNav}
          handleNavClick={handleNavClick}
          contactOpen={contactOpen}
        />
      </header>
    </div>
  );
}

export default Header;
