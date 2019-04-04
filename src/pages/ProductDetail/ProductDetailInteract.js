import React, { Component } from "react";

/* import compnents */
import PlusMinus from "../../components/PlusMinus/PlusMinus";

export default class ProductDetailInteract extends Component {
  hanldeQuantityValue = qty => {
    this.setState({ length_per_meter: qty });
  };

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Nama Produk dan - Code</h5>
            <p className="card-text">Rp. 1.000.000</p>
            <hr />
            <p>Order Quantity</p>
            <div style={{ width: "50%" }}>
              <PlusMinus onChangeValue={this.hanldeQuantityValue} />
            </div>
            <p>Stok : 10 meter</p>
            <p>Color : Lavender</p>
            <a href="/" className="btn btn-primary">
              Add to Wishlist
            </a>
            <a href="/" className="btn btn-primary" style={{ margin: "10px" }}>
              Add to Wishlist
            </a>
          </div>
        </div>
      </div>
    );
  }
}
