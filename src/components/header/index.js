import React from "react";
import './index.css';
import Navigation from "../navigation";

function Header() {
  return (
    <div className="navbar navbar-expand-md backgroundbrown">
      <div className="container-fluid">
        <button className="navbar-toggler backgroundgreen" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Navigation></Navigation>
        </div>
      </div>
    </div>
  );
}

export default Header;