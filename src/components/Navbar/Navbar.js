import React, { Component } from "react";

/*
 * import css
 * css custom field__name
 */
import "./Navbar.css";

/* import component */
import SearchInput from "../SearchInput/SearchInput";
import NavbarNavigation from "../NavbarNavigation/NavbarNavigation";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar__gama ">
        <img src="img/logo.png" className="logo__container" alt="logo" />
        <a href="/" className="navbar__branch__gama">
          Gama Textile
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menu__navbar__gama"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="menu__navbar__gama">
          <div className="col-md-7">
            <SearchInput />
          </div>
          <NavbarNavigation />
        </div>
      </nav>
    );
  }
}

export default Navbar;
