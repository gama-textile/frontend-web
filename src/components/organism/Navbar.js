import React, { Component } from "react";

import SearchInput from "../moleculs/SearchInput";
import NavbarNavigation from "../moleculs/NavbarNavigation";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-collapse collapse w-50 order-1 order-md-0 dual-collapse2">
            <div className="navbar-nav mr-auto">
              <a className="navbar-brand mx-auto" href="/">
                {/* <img src="" alt="Gamatextile" /> */}
                Gama LOGO
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
      </div>
    );
  }
}

export default Navbar;
