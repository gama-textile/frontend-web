import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

/* import components */
import Breadcum from "../../components/Breadcum/Breadcum";

/* import pages */
import AccountSideNav from "./AccountSideNav";
import AccountSetting from "./AccountSetting";
import AccountAddress from "./AccountAddress/AccountAddress";
import AccountTransaction from "./AccountTransaction/AccountTransaction";
/* import redux */
import { connect } from "react-redux";
import { getCustomerData } from "../../actions/customers";

export class Account extends Component {
  state = {
    breadcumPath: [
      {
        name: "Account",
        url: "/account"
      },
      {
        name: "My Account",
        url: "/account/address"
      }
    ]
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCustomerData(id);
    console.log(this.props.match.url);
  }

  render() {
    return (
      <Fragment>
        <div
          className="container-fluid"
          style={{ marginTop: "15px", marginLeft: "40px" }}
        >
          <Breadcum breadcumPath={this.state.breadcumPath} />
        </div>
        <div className="container" style={{ marginTop: "15px" }}>
          <div className="row">
            <div className="col-md-3">
              <AccountSideNav customer={this.props.customer} />
            </div>
            <div className="col-md-9">
              <Switch>
                <Route
                  exact
                  path={`${this.props.match.url}`}
                  component={AccountSetting}
                />
                <Route
                  exact
                  path={`${this.props.match.url}/address`}
                  component={AccountAddress}
                />
                <Route
                  exact
                  path={`${this.props.match.url}/transaction`}
                  component={AccountTransaction}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customerReducers.customers
});

export default connect(
  mapStateToProps,
  {
    getCustomerData
  }
)(Account);
