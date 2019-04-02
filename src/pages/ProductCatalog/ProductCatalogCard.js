import React from "react";

// import "./Card.css";

export default function Card({ catalogProducts }) {
  if (catalogProducts == null) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className="g-card mt-2">
      <div className="g-card-imagewrapper">
        <img className="img-fluid" src="img/logo.png" alt="Tulle" />
        <div className="g-card-actionwrapper">
          <a className="material-icons g-card-action" href="/">
            favorite_border
          </a>
          <a className="material-icons g-card-action" href="/">
            add_shopping_cart
          </a>
        </div>
      </div>

      <div className="g-card-body">
        <p className="product-title">oke</p>
        <p className="product-price">{catalogProducts.price}</p>
      </div>
    </div>
  );
}
