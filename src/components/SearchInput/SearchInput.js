import React, { Component } from "react";

/* import css searchinput */
import "./SearchInput.css";

class SeachInput extends Component {
  render() {
    return (
      <div className="searchinput">
        <i className="material-icons">search</i>
        <input placeholder="Cari produk" />
      </div>
    );
  }
}

export default SeachInput;
