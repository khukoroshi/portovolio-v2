// import React from 'react'
import { SocialLink, SocialDataLink } from "../../components/socialLink";
import "./bartoggle.css";

const CKiri = () => {
  return (
    <ul>
      {SocialDataLink.map((data) => (
        <SocialLink key={data.name} socialData={data} />
      ))}
    </ul>
  );
};

const CKanan = () => {
  return (
    <a href="mailto:haikalfiransyah28@gmail.com">haikalfiransyah28@gmail.com</a>
  );
};

const BarToggle = ({ posisiKanan }) => {
  return (
    // kalo true = kanan(r), false = kiri(l)
    <div
      id={`sticky-content-${posisiKanan ? "right" : "left"}`}
      className={`s-c-${posisiKanan ? "r" : "l"}`}
    >
      {posisiKanan ? <CKanan /> : <CKiri />}
      <div className="line"></div>
    </div>
  );
};

export default BarToggle;
