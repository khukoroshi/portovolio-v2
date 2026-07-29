// import React from 'react'
// import clsx from 'clsx';

import "./header.css";
import ButtonMenu from "../../components/ButtonMenu";
import ButtonHead from "../../components/ButtonHead";

function Header({ contactOpen, isScroll }) {
  return (
    <div id="header">
      <header className={`mainHeader ${isScroll ? "scrolled" : ""}`}>
        <h1>
          <a href="#home" className="active">
            Haikal Firansyah
          </a>
        </h1>
        <ButtonMenu />
        <ButtonHead contactOpen={contactOpen} />
      </header>
    </div>
  );
}

export default Header;
