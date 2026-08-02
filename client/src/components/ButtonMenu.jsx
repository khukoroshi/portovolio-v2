// import React from 'react'

import "../css/toggleMenu.css";

const ButtonMenu = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <div className="hamburger-menu">
      <input
        id="hMenu"
        type="checkbox"
        name="menu"
        checked={menuIsOpen}
        onChange={(e) => setMenuIsOpen(e.target.checked)}
      />
      <div></div>
      <div></div>
      <div></div>
      {/* <!-- <div></div> --> */}
    </div>
  );
};

export default ButtonMenu;
