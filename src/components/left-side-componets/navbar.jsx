import { memo, useState } from "react";
import NavbarItem from "./navbar-item";
import IconMenu from "../../images/logo.svg";

function Navbar() {
  const menuItems = [
    { label: "item1", icon: IconMenu },
    { label: "item2", icon: IconMenu },
    { label: "item3", icon: IconMenu },
  ];
  return (
    <div>
      {menuItems.map((item) => (
        <NavbarItem width="1rem" label={item.label} icon={item.icon} />
      ))}
    </div>
  );
}
export default Navbar;
