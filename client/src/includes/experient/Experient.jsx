// import React from 'react'
import "./experient.css";
import ContentExperient from "./ContentExperient";
import ContentSertivikat from "./ContentSertivikat";

const Experient = () => {
  return (
    <div id="experient" className="container">
      <section className="exper">
        <h2 className="sub-bab-h2">Experience</h2>
        <ContentExperient />
      </section>
      <ContentSertivikat />
    </div>
  );
};

export default Experient;
