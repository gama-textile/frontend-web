import React, { Component } from "react";

/* import css catalog */
import "./Catalog.css";

/* import components */
// import Card from "./Card";
import Card from "../../components/Card/Card";

export default class Catalog extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <h3 className="text-center">PRODUK KATALOG</h3>
        <hr />
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
