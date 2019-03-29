import React, { Component } from "react";

/* import css cart */
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="g-card col-lg-3">
        <div className="g-card-imagewrapper">
          <img className="img-fluid" src="img/logo.png" alt="Tulle" />
          <div className="g-card-actionwrapper">
            <a className="material-icons g-card-action">favorite_border</a>
            <a className="material-icons g-card-action">add_shopping_cart</a>
          </div>
        </div>

        <div className="g-card-body">
          <p className="product-title">name oke - kode 001</p>
          <p className="product-price">Rp. 1.000.000</p>
        </div>
      </div>
    );
  }
}

export default Card;
