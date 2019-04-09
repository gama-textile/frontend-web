import React, { Component } from "react";
import { Link } from "react-router-dom";

/* import css Navbar Navigation */
import "./NavbarNavigation.css";

class NavbarNavigation extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto nav__li__gama">
        <li className="nav-item">
          <Link to="/product-catalog" className="nav-link__gama">
            Katalog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tentang" className="nav-link__gama">
            Tentang
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link__gama"
            data-toggle="modal"
            to="#"
            data-target="#exampleModal"
          >
            Daftar | Masuk
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link__gama" to="/account">
            Akun
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link__gama" to="/notif">
            <i className="material-icons">notifications</i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link__gama" to="/cart">
            <i className="material-icons">shopping_cart</i>
          </Link>
        </li>
      </ul>
    );
  }
}

export default NavbarNavigation;
