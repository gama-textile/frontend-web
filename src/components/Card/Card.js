import React, { Component } from "react";

/* import css cart */
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="col-md-3 card__gama">
        <img
          src="products/gambar_1.jpg"
          className="card-img-top"
          alt="Product"
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
