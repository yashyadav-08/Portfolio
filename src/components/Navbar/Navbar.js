import logo from "./logo.jpg";
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import contactImg from "../Navbar/contact.png";
import menu from "./menu.png";

const Navbar = () => {
  // Using useState for deciding the display of Berger Menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    // Creating navbar under nav element
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          About
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Demo
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          className="listItem"
          onClick={() => setShowMenu(false)}
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="listItem"
          onClick={() => setShowMenu(false)}
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          About
        </Link>
        <Link
          className="listItem"
          onClick={() => setShowMenu(false)}
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          className="listItem"
          onClick={() => setShowMenu(false)}
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Clients
        </Link>

        <Link
          className="listItem"
          onClick={() => setShowMenu(false)}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
