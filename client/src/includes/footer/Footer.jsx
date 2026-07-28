// import React from 'react'
import { SocialLink, SocialDataLink } from "../../components/socialLink";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <ul>
          {SocialDataLink.map((data) => (
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
