import { memo, useState } from "react";
import NavbarItem from "./navbar-item";

import Icon from "../Icon";
import "./navbar.css";
function Navbar() {
  const menuItems = [
    { label: "", icon: "logo", size: 30, color: "#ffffff" },
    { label: "Home", icon: "home", size: 25, color: "#ffffff" },
    { label: "Explore", icon: "explore", size: 25, color: "#ffffff" },
    {
      label: "Notifictions",
      icon: "notifications",
      size: 25,
      color: "#ffffff",
    },
    { label: "Messages", icon: "messages", size: 25, color: "#ffffff" },
    { label: "Bookmarks", icon: "bookmark", size: 25, color: "#ffffff" },
    { label: "Lists", icon: "list", size: 25, color: "#ffffff" },
    { label: "Profile", icon: "profile", size: 25, color: "#ffffff" },
    { label: "More", icon: "more", size: 25, color: "#ffffff" },
  ];
  return (
    <div className="left-side__navbar-menu">
      {menuItems.map((item) => (
        <NavbarItem
          width="1rem"
          color="red"
          icon={item.icon}
          label={item.label}
          size={item.size}
          color={item.color}
        />
      ))}
    </div>
  );
}
export default Navbar;
