import React, { Component } from "react";

/* import css new product */
import "./OurCollection.css";

/* import components */
import Card from "../../../../components/Card/Card";

class OurCollection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-4">
            <h3 className="text-center text-custom">
              <b>KOLEKSI</b> KAMI
            </h3>
          </div>
          <div className="col-md-4 text-right">
            <br />
            <a href="/">Lihat semua...</a>
          </div>
        </div>
        <div className="row product__list">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default OurCollection;
