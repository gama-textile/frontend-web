import React, { Component } from "react";
import "./AccountAddress.css";

// Redux
import { connect } from "react-redux";
import { getCustomerAddress } from "../../../actions/address";

import AccountAddressItem from "./AccountAddressItem";

class AccountAddress extends Component {
  componentDidMount() {
    this.props.getCustomerAddress(1);
  }

  render() {
    return (
      <div className="account-address">
        <div className="header">
          <p>My Address</p>
          <button className="btn btn-primary">+ Add New Address</button>
        </div>
        <div className="body mt-3">
          <table>
            <tbody>
              {this.props.addresses.map(address => {
                return <AccountAddressItem address={address} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addresses: state.addressReducers.addresses
});

export default connect(
  mapStateToProps,
  {
    getCustomerAddress
  }
)(AccountAddress);
