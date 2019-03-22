import React, { Component } from "react";
import { Link } from "react-router-dom";

/* import css Navbar Navigation */
import "./NavbarNavigation.css";

class NavbarNavigation extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Catalog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link loginButton" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link registerButton" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/account">
            Account
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="material-icons">notifications</i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cart">
            <i className="material-icons">shopping_cart</i>
          </a>
        </li>
      </ul>
    );
  }
}

export default NavbarNavigation;
