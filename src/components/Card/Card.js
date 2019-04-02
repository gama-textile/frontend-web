import React from "react";

import "./Card.css";
export default function Card({ catalogProducts }) {
  if (catalogProducts == null) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div
      className="card gama__card mt-2 center"
      style={{ width: "17rem", margin: "6px" }}
    >
      <div className="gama__card__imagewrapper">
        <img
          className="img-fluid"
          style={{ width: "95%", height: "100%", margin: "9px" }}
          src="products/gambar_1.jpg"
          alt="Tulle"
        />
        <div className="gama__card__actionwrapper">
          <a className="material-icons gama__card__action" href="/">
            favorite_border
          </a>
          <a className="material-icons gama__card__action" href="/">
            add_shopping_cart
          </a>
        </div>
      </div>

      <div className="gama__card__body card-body">
        <p className="product__title card-text">
          {catalogProducts.Product.name} - {catalogProducts.Product.id}
        </p>
        <p className="product__price">Rp. {catalogProducts.price}</p>
      </div>
    </div>
  );
}

// import React, { Component } from "react";

// /* import css cart */
// import "./Card.css";

// class Card extends Component {
//   render() {
//     return (
//       <div className="col-md-3 card__gama">
//         <img
//           src="products/gambar_1.jpg"
//           className="card-img-top"
//           alt="Product"
//         />
//         <div className="card-body">
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;
