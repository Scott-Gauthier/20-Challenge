import React from "react";
import './index.css';

function Navigation() {
  return (
          <div className="navbar-nav">
            <a className="nav-link textgreen whitehover" href="#">Home</a>
            <a className="nav-link textgreen whitehover" href="#">About Me</a>
            <a className="nav-link textgreen whitehover" href="#">Portfolio</a>
            <a className="nav-link textgreen whitehover" href="#">Contact</a>
            <a className="nav-link textgreen whitehover" href="#">Resume</a>
          </div>
  );
}

export default Navigation;