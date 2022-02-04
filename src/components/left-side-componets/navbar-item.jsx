import React from "react";
import "./navbar-item.css";
import Icon from "../Icon";
function NavbarItem({ label, icon, size, color }) {
  return (
    <div className="left-side__navbar-menu__item-container">
      <a href="#" className="left-side__navbar-menu__item">
        <span className="left-side__menu__icon">
          <Icon name={icon} color={color} size={size} />
        </span>
        <span className="left-side__menu__text">{label}</span>
      </a>
    </div>
  );
}
export default NavbarItem;
