import React, { Component } from "react";

/*import pages */
import AccountTransactionItem from "./AccountTransactionItem";

class AccountTransactionPendding extends Component {
  render() {
    return (
      <div
        className="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
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

export default AccountTransactionPendding;
