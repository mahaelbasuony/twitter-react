import React from "react";
import "./navbar-item.css";
function NavbarItem({ label, icon }) {
  return (
    <a href="#" className="left-side__navbar-menu__item">
      <span className="logo">
        <img src={icon} className="logo__icon" />
      </span>
      <span>{label}</span>
    </a>
  );
}
export default NavbarItem;
