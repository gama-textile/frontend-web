import React, { Component } from "react";

import CartItem from "./CartItem";
import CartItemFooter from "./CartItemFooter";

class Cart extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <td>Item(s)</td>
                <td>Price</td>
                <td>Length</td>
                <td>Subtotal/item</td>
              </tr>
            </thead>
            <tbody>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItemFooter />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
