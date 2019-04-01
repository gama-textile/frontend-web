import React, { Component, Fragment } from "react";

/* import css product detail */
import "./ProductDetail.css";

import ImageViewer from "./ImageViewer";
import ProductDetailInteract from "./ProductDetailInteract";
import ProductDetailFooter from "./ProductDetailFooter";
export default class ProductDetail extends Component {
  render() {
    return (
      <Fragment>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <ImageViewer />
            </div>
            <div className="col-md-5">
              <ProductDetailInteract />
            </div>
          </div>
          <br />
          <div>
            <ProductDetailFooter />
          </div>
        </div>
      </Fragment>
      //   <div className="container">
      //     <br />
      //     <br />
      //     <br />
      //     <div className="row">
      //       <div className="col-md-7">
      //         <div className="card">
      //           <img src="..." className="card-img-top" alt="..." />
      //           <div className="card-body">
      //             <h5 className="card-title">Card title</h5>
      //             <p className="card-text">
      //               Some quick example text to build on the card title and make up
      //               the bulk of the card's content.
      //             </p>
      //             <a href="/" className="btn btn-primary">
      //               Go somewhere
      //             </a>
      //           </div>
      //         </div>
      //       </div>

      //       <div className="col-md-5">
      //         <div className="card">
      //           <div className="card-body">
      //             <h5 className="card-title">Card title</h5>
      //             <p className="card-text">
      //               Some quick example text to build on the card title and make up
      //               the bulk of the card's content.
      //             </p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}
