import React from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
  return (
    // <h1>Header</h1>
    <nav>
      <h1>Techman</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};
