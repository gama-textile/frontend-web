import React, { Fragment } from "react";

export default function CartItemFooter(props) {
  return (
    <Fragment>
      <tr>
        <td />
        <td />
        <td>
          <p className="text-left">Subtotal</p>
        </td>
        <td>
          <p>Rp. 120.000.00,-</p>
        </td>
      </tr>
      <tr>
        <td />
        <td />
        <td>
          <p className="text-left">Earned Point(s)</p>
        </td>
        <td>
          <p>6</p>
        </td>
      </tr>
      <tr>
        <td />
        <td />
        <td />
        <td>
          <button className="btn btn-danger">Process to Checkout</button>
        </td>
      </tr>
    </Fragment>
  );
}
