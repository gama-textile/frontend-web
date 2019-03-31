import React, { Component } from "react";

/* import css new product */
import "./BestSeller.css";

/* import components */
import Card from "../../../../components/Card/Card";

class BestSeller extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-4">
            <h3 className="text-center text-custom">
              PENJUALAN <b>TERBAIK</b>
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
        <br />
        <hr />
      </div>
    );
  }
}

export default BestSeller;
