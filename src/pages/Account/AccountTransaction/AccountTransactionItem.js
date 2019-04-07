import React, { Component } from "react";

class AccountTransactionItem extends Component {
  render() {
    //data ini nanti dilopping berdasarkan banyak barang yang dibeli
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <td className="displayInline">
                <img
                  className="items"
                  src="https://via.placeholder.com/150"
                  alt="Product"
                />
                <div className="items">
                  <h3>Kain</h3>
                  <p>1 meter</p>
                </div>
              </td>
              <td className="text-right">
                <p>Rp. 120.000.00,-</p>
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <b>Total Payment</b>
              </td>
              <td className="text-right">
                <p>Rp. 1.200.000,-</p>
              </td>
            </tr>
          </thead>
        </table>
        <div className="text-right">
          <button className="btn btn-outline-danger" style={{ margin: "5px" }}>
            Batal Order
          </button>

          <button className="btn btn-danger">Show Order Detail</button>
        </div>
      </div>
    );
  }
}

export default AccountTransactionItem;
