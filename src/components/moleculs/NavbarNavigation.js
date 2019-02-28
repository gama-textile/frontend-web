import React from "react";

export default function NavbarNavigation() {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">
          Catalog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link loginButton" href="/">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link registerButton" href="/">
          Register
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-bell" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-shopping-cart" />
        </a>
      </li>
    </ul>
  );
}
