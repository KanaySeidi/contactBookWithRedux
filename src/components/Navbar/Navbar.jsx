import React from "react";
import logo from "../../images/Navbar/Vector.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <img src={logo} alt="icon of MyContacts" className="logo" />
        <h2 className="nav-txt">MyContacts</h2>
      </div>
    </>
  );
};

export default Navbar;
