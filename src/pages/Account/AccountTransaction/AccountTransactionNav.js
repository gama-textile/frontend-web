import React, { Component } from "react";

/* import pages */
import AccountTransactionPendding from "./AccountTransactionPendding";
import AccountTransactionPacked from "./AccountTransactionPacked";
import AccountTransactionShipped from "./AccountTransactionShipped";
import AccountTransactionComplated from "./AccountTransactionComplated";
import AccountTransactionCanceled from "./AccountTransactionCanceled";

class AccountTransactionNav extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ul className="nav nav-pills mb-5 row" id="pills-tab" role="tablist">
          {/* pendding */}

          <li className="nav-item col-sm-3 text-center">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Pendding
            </a>
          </li>

          {/* Packed */}
          <li className="nav-item col-sm-2 text-center">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              packed
            </a>
          </li>
          {/* Shipped */}
          <li className="nav-item col-sm-2 text-center">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Shipped
            </a>
          </li>
          {/* Complated */}
          <li className="nav-item col-sm-3 text-center">
            <a
              className="nav-link"
              id="complated"
              data-toggle="pill"
              href="#complated"
              role="tab"
              aria-controls="complated"
              aria-selected="false"
            >
              Complated
            </a>
          </li>
          {/* Canceled */}
          <li className="nav-item col-sm-2 text-center">
            <a
              className="nav-link"
              id="Canceled"
              data-toggle="pill"
              href="#Canceled"
              role="tab"
              aria-controls="Canceled"
              aria-selected="false"
            >
              Canceled
            </a>
          </li>
        </ul>
        <div
          className="tab-content"
          id="pills-tabContent"
          style={{ margin: "0px" }}
        >
          <AccountTransactionPendding />
          <AccountTransactionPacked />
          <AccountTransactionShipped />
          <AccountTransactionComplated />
          <AccountTransactionCanceled />
        </div>
      </div>
    );
  }
}

export default AccountTransactionNav;
