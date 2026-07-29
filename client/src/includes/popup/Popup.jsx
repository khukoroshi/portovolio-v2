// import React from 'react'

import "./popup.css";

const Popup = ({ contactClose, contact }) => {
  return (
    <div id="pop-con" className={`overlay-popup ${contact ? "show" : ""}`}>
      <section className="contact">
        <span id="btnClosePopCon" className="btn-close" onClick={contactClose}>
          &times;
        </span>
        <h2>Get in touch</h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="423fcfa8-7f22-459b-a21d-2963091fc530"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="con-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="con-input"
            required
          />
          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            className="con-input"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Popup;
