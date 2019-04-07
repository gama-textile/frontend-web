import React, { Component } from "react";

/* import pages */
import AccountTransactionItem from "./AccountTransactionItem";

class AccountTransactionCanceled extends Component {
  render() {
    return (
      <div
        className="tab-pane fade"
        id="canceled"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
        style={{ margin: "0px" }}
      >
        <div className="account-address">
          <div className="text-right" style={{ color: "red" }}>
            <p>Waiting for Payment</p>
          </div>
          <AccountTransactionItem />
        </div>
      </div>
    );
  }
}

export default AccountTransactionCanceled;
