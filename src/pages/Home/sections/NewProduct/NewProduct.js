import React, { Component } from "react";

/* import css new product */
import "./NewProduct.css";

/* import components */
import Card from "../../../../components/Card/Card";

class NewProduct extends Component {
  render() {
    return (
      <div className="container text-center text-custom">
        <h1>
          <b>New</b> Product
        </h1>

        <div className="row product__list">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <hr />
      </div>
    );
  }
}

export default NewProduct;
