import React from "react";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      {/* LOGO PHOTOSNAP +  HOME */}
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <img src="./assets/img/logo-photosnap.svg" alt="logo photosnap" />
      </NavLink>

      {/* NAVIGATION */}
      <Navigation />

      {/* BUTTON */}
    </header>
  );
}
