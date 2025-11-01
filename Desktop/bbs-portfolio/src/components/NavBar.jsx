import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src={Logo} alt="logo"></img>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
