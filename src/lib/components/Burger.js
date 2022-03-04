import React, { useState } from 'react';
import Navbar from './Navbar';
import "./styles/burger.css";

const Burger = ({ links, navbarBckg = "whitesmoke", activeLinkBckg = "lightgray", linkTextColor = "black" }) => {
  const [moveBurger, setMoveBurger] = useState(false)
  return (
    <div>
      <div className="burger-wrapper" onClick={() => setMoveBurger(!moveBurger)}>
        <div className="top-bun" style={{ marginBottom: moveBurger && "3px" }}></div>
        <div className="cheese" style={{ display: moveBurger ? "flex" : "none" }}></div>
        <div className="middle" style={{ marginTop: moveBurger && "3px" }}></div>
        <div className="bot-bun" style={{ marginTop: moveBurger && "3px" }}></div>
      </div>
      <Navbar
        links={links}
        visible={moveBurger}
        close={setMoveBurger}
        navbarBckg={navbarBckg}
        activeLinkBckg={activeLinkBckg}
        linkTextColor={linkTextColor} />
    </div>
  )
}

export default Burger;