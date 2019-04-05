import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AccountSideNav.css";

class AccountSideNav extends Component {
  state = {
    isMyAccountOpen: false
  };

  render() {
    return (
      <div className="sidebar">
        <div className="header">
          <img className="img-fluid picture" alt="foto" src="img/logo.png" />
          <div className="desc">
            <p className="name">
              {this.props.customer.firstName} {this.props.customer.lastName}
            </p>
            <br />
            <p className="status">Customer</p>
          </div>
        </div>
        <hr />
        <nav className="sidenav">
          <ul className="mainUl">
            <li>
              <a href="/">
                <i className="material-icons">panorama_fish_eye</i> My Account
              </a>
              <ul className="secondUl">
                <li>
                  <Link to="/account/1">Account Setting</Link>
                </li>
                <li>
                  <Link to="/account/1/address">Address Setting</Link>
                </li>
                <li>
                  <a href="/">Help Center</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#about">
                <i className="material-icons">panorama_fish_eye</i> Transaction
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="material-icons">panorama_fish_eye</i> Wishlist
              </a>
            </li>
            <li>
              <a href="#clients">
                <i className="material-icons">panorama_fish_eye</i> My Points
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="material-icons">panorama_fish_eye</i> Reviewed
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="material-icons">panorama_fish_eye</i> History
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default AccountSideNav;
