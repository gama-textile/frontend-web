import React, { Component } from "react";

export default class SearchInput extends Component {
  render() {
    return (
      <div className="searchinput">
        <form>
          <div className="frorm-group has-search">
            <span className="fas fa-search form-control-search" />
            <input className="searchinput-input form-control" />
          </div>
        </form>
      </div>
    );
  }
}
