import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = ({ links, visible, close, navbarMarginTop, navbarBckg, activeLinkBckg, linkTextColor }) => {
  const { pathname } = useLocation()
  return (
    <div className="navbar-wrapper" style={{ display: visible ? "flex" : "none", top: navbarMarginTop, backgroundColor: navbarBckg }}>
      {links.map((link, index) =>
        <NavLink
          style={{ backgroundColor: pathname === link.to && activeLinkBckg, color: linkTextColor }}
          onClick={() => close(false)}
          key={index}
          to={link.to}>
          {link.title}
        </NavLink>)}
    </div>
  )
}

export default Navbar;