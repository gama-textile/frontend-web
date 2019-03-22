import React, { Component } from "react";

/* import css */
import "./Navbar.css";

/* import component */
import SearchInput from "../SearchInput/SearchInput";
import NavbarNavigation from "../NavbarNavigation/NavbarNavigation";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-2">
        <div className="navbar-collapse collapse w-50 order-1 order-md-0 dual-collapse2">
          <div className="navbar-nav mr-auto">
            <div className="logo-container ml-5">
              <img className="img-fluid" src="img/logo.png" alt="logo" />
            </div>
            <a className="navbar-brand mx-auto" href="/">
              GAMA TEXTILE
            </a>
          </div>
        </div>

        <div className="mx-auto order-0 w-100">
          <SearchInput />
        </div>
        <div className="navbar-collapse collapse w-50 order-3 dual-collapse2">
          <NavbarNavigation />
        </div>
      </nav>
    );
  }
}

export default Navbar;
