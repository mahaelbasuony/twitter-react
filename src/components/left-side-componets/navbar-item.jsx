import React from "react";

function NavbarItem({ label, icon }) {
  return (
    <div>
      {label}
      <img src={icon} />
    </div>
  );
}
export default NavbarItem;
