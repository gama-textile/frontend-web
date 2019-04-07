import React, { Component } from "react";

/* import compnents */
import PlusMinus from "../../components/PlusMinus/PlusMinus";

class ProductDetailInteract extends Component {
  state = {
    productInboundId: this.props.catalogProduct.id,
    customerId: 1,
    note: "",
    length_per_meter: 1
  };
  hanldeQuantityValue = qty => {
    this.setState({ length_per_meter: qty });
  };

  render() {
    const product = {
      name: null,
      price: null
    };

    if (this.props.catalogProduct.Product) {
      product.name = this.props.catalogProduct.Product.name;
      product.price = this.props.catalogProduct.price;
    }
    return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.name} - </h5>
            <p className="card-text">Rp. {product.price}</p>
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

export default ProductDetailInteract;
