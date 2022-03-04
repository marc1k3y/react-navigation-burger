import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = ({ links }) => {
  return (
    <div className="navbar-wrapper">
      {links.map((link, index) =>
        <NavLink key={index} to={link.to}>{link.title}</NavLink>)}
    </div>
  )
}

export default Navbar;