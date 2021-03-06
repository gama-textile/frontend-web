import React from "react";

import "./Card.css";
export default function Card({ catalogProduct, handleClick }) {
  if (catalogProduct == null) {
    return (
      <div>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    // <div className="g-card mt-2" onClick={() => handleClick(catalogProduct.id)}>
    //   <div className="g-card-imagewrapper">
    //     <img className="img-fluid" src="img/logo.png" alt="Tulle" />
    //     <div className="g-card-actionwrapper">
    //       <a className="material-icons g-card-action">favorite_border</a>
    //       <a className="material-icons g-card-action">add_shopping_cart</a>
    //     </div>
    //   </div>

    //   <div className="g-card-body">
    //     <p className="product-title">
    //       {catalogProduct.Product.name} - {catalogProduct.Product.id}
    //     </p>
    //     <p className="product-price">{catalogProduct.price}</p>
    //   </div>
    // </div>
    <div
      onClick={() => handleClick(catalogProduct.id)}
      className="card gama__card mt-2"
      style={{ width: "17rem", margin: "6px" }}
    >
      <div className="gama__card__imagewrapper">
        <img
          className="img-fluid"
          style={{ width: "95%", height: "100%", margin: "9px" }}
          src={catalogProduct.Product.imageUrl}
          // src={
          //   "https://cf.shopee.co.id/file/98c92b4b2d800dc10af37158706a71ac_tn"
          // }
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
          {catalogProduct.Product.name} - {catalogProduct.Product.id}
        </p>
        <p className="product__price">Rp. {catalogProduct.price}</p>
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
