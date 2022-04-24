import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/stories"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>stories</li>
        </NavLink>

        <NavLink
          to="/features"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>features</li>
        </NavLink>

        <NavLink
          to="/pricing"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>pricing</li>
        </NavLink>
      </ul>
    </div>
  );
}
