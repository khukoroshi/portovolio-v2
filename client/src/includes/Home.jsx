// import React from 'react'
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/home.css";

function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FrontEnd", "BackEnd"],
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="auto-type" ref={el}></span>;
}

const Home = () => {
  return (
    <div id="home">
      <div className="home">
        <h1>HI, I'M HAIKAL</h1>
        <p className="animated-text">
          WEB DEVELOPER [ <TypingText /> ]
        </p>
        <div className="panah">
          <div className="kanan"></div>
          <div className="kiri"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
