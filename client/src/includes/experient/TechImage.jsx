// import React from 'react'

import imgHTML5 from "../../assets/img/logo/html-5.png";
import imgCSS from "../../assets/img/logo/css.png";
import imgJavaScript from "../../assets/img/logo/javascript.png";
import imgPHP from "../../assets/img/logo/php.svg";
import imgPython from "../../assets/img/logo/python.png";
import imgJava from "../../assets/img/logo/java.png";
import imgGit from "../../assets/img/logo/git.png";
import imgGitHub from "../../assets/img/logo/github.png";
import imgMySQL from "../../assets/img/logo/mysql.png";
import imgNodeJS from "../../assets/img/logo/nodejs-96.png";
import imgReactJS from "../../assets/img/logo/react.png";
import imgLinux from "../../assets/img/logo/linux.png";
import imgChatGPT from "../../assets/img/logo/chatgpt.png";

const techLogoData = [
  {
    name: "html5",
    url: imgHTML5,
  },
  {
    name: "css",
    url: imgCSS,
  },
  {
    name: "javascript",
    url: imgJavaScript,
  },
  {
    name: "php",
    url: imgPHP,
  },
  {
    name: "python",
    url: imgPython,
  },
  {
    name: "java",
    url: imgJava,
  },
  {
    name: "git",
    url: imgGit,
  },
  {
    name: "github",
    url: imgGitHub,
  },
  {
    name: "mysql",
    url: imgMySQL,
  },
  {
    name: "nodejs",
    url: imgNodeJS,
  },
  {
    name: "reactjs",
    url: imgReactJS,
  },
  {
    name: "linux",
    url: imgLinux,
  },
  {
    name: "chatGPT",
    url: imgChatGPT,
  },
];

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
