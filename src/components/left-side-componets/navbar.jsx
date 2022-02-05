import { memo, useState } from "react";
import NavbarItem from "./navbar-item";

import Icon from "../Icon";
import "./navbar.css";
import { Logo } from "./Logo";
import { QuickTweetButton } from "./quick-tweet-button";

function Navbar() {
  const menuItems = [
    { label: "Home", icon: "home" },
    { label: "Explore", icon: "explore" },
    { label: "Notifictions", icon: "notifications" },
    { label: "Messages", icon: "messages" },
    { label: "Bookmarks", icon: "bookmark" },
    { label: "Lists", icon: "list" },
    { label: "Profile", icon: "profile" },
    { label: "More", icon: "more" },
  ];
  return (
    <div className="left-side__navbar-menu">
      <Logo />
      {menuItems.map((item) => (
        <NavbarItem
          width="1rem"
          color="red"
          icon={item.icon}
          label={item.label}
          size={20}
          color="#fff"
        />
      ))}
      <QuickTweetButton />
    </div>
  );
}
export default Navbar;
