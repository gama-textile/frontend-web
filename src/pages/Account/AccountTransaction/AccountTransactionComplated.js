import React, { Component } from "react";

/* imoprt pages */
import AccountTransactionItem from "./AccountTransactionItem";

class AccountTransactionComplated extends Component {
  render() {
    return (
      <div
        className="tab-pane fade"
        id="complated"
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

export default AccountTransactionComplated;
