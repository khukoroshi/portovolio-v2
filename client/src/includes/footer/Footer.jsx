// import React from 'react'
import SocialLink from "../../components/SocialLink";
import { socialDataLink } from "../../data/database";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <ul>
          {socialDataLink.map((data) => (
            <SocialLink key={data.name} socialData={data} />
          ))}
        </ul>
        <p>Created By Haikal Firansyah</p>
        <p>2025</p>
      </footer>
    </div>
  );
};

export default Footer;
