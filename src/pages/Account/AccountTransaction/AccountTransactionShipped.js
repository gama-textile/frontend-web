import React, { Component } from "react";

/*import pages */
import AccountTransactionItem from "./AccountTransactionItem";

class AccountTransactionShipped extends Component {
  render() {
    return (
      <div
        className="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
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

export default AccountTransactionShipped;
