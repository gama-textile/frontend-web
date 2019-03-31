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
            Katalog
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link__gama">
            Tentang
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link__gama">
            Daftar | Masuk
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link__gama" href="/">
            Akun
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
