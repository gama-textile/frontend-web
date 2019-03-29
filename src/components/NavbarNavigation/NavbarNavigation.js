import React, { Component } from "react";
// import { Link } from "react-router-dom";

/* import css Navbar Navigation */
import "./NavbarNavigation.css";

class NavbarNavigation extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto nav__li__gama">
        <li className="nav-item">
          <a href="/" className="nav-link__gama">
            Catalog
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link__gama">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link__gama">
            Register | Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link__gama" href="/">
            Account
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link__gama" href="/">
            <i className="material-icons">notifications</i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link__gama" href="/cart">
            <i className="material-icons">shopping_cart</i>
          </a>
        </li>
      </ul>
    );
  }
}

export default NavbarNavigation;
