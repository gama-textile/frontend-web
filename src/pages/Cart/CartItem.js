import React, { Component } from "react";
import PlusMinus from "../../components/PlusMinus/PlusMinus";

export default class CartItem extends Component {
  render() {
    // var color = "";
    // var price = "";
    // var meter = "";
    // var name = "";
    // var width = "";
    // var imageUrl = "";

    // const { note, length_per_meter } = this.props.cart;
    // const ProductInbound = this.props.cart.ProductInbound;
    // const Product = this.props.cart.ProductInbound.Product;

    // if (ProductInbound) {
    //   color = ProductInbound.color;
    //   price = ProductInbound.price;
    //   meter = ProductInbound.meter;
    // }

    // if (Product) {
    //   width = Product.width;
    //   name = Product.name;
    //   imageUrl = Product.imageUrl;
    // }

    return (
      <tr>
        <td className="displayInline">
          <input className="items" type="checkbox" />
          <img
            className="items"
            src="https://via.placeholder.com/150"
            alt="Product"
          />
          <div className="items">
            <h3>Kain</h3>
            <p>Color : pink</p>
            <p>Remove</p>
            {/* <h3>{name ? name : ""}</h3>
            <p>Color : {color ? color : ""}</p>
            <p>Remove</p> */}
          </div>
        </td>
        <td>
          <p>Rp. 120.000.00,-</p>
          {/* <p>Rp. {price ? price : ""}</p> */}
        </td>
        <td>
          <PlusMinus />
        </td>
        <td>
          <p>Rp. 120.000.00,-</p>
        </td>
      </tr>
    );
  }
}
