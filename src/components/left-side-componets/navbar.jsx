import { memo, useState } from "react";
import NavbarItem from "./navbar-item";
import IconLogo from "../../images/logo.svg";
import IconHome from "../../images/home.svg";
import "./navbar.css";
function Navbar() {
  const menuItems = [
    { label: "", icon: IconLogo },
    { label: "Home", icon: IconHome },
    { label: "Explore", icon: IconHome },
    { label: "Notifictions", icon: IconHome },
    { label: "Messages", icon: IconHome },
    { label: "Bookmarks", icon: IconHome },
    { label: "Lists", icon: IconHome },
    { label: "Profile", icon: IconHome },
    { label: "More", icon: IconHome },
  ];
  return (
    <div className="left-side__navbar-menu">
      {menuItems.map((item) => (
        <NavbarItem width="1rem" icon={item.icon} label={item.label} />
      ))}
    </div>
  );
}
export default Navbar;
