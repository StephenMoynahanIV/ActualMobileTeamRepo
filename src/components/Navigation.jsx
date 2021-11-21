import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand bg-danger">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            UMass Finder
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  UMass
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Favorites">
                  Favorites
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Places">
                  Places
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/People">
                  People
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
