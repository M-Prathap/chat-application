import React from "react";
import ContactList from "./ContactList";
import Logo from "../assets/Logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img className = "Image" src={Logo} alt="Chat Logo" />
      </div>
      <input type="text" placeholder="Search" className="search-bar" />
      <ContactList />
    </div>
  );
};

export default Sidebar;
