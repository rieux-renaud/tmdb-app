import React from "react";
import { NavLink } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { Button } from "@aws-amplify/ui-react";

const Header = ({ signOut }) => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/coup-de-coeur"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>My seen movies</li>
          </NavLink>

          <NavLink
            to="/a-propos"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>About</li>
          </NavLink>
          <li>
            <Button onClick={signOut}>Log Out</Button>
          </li>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
