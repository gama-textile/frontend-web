import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

/* import components */
import Breadcum from "../../components/Breadcum/Breadcum";
/* import pages */
import AccountSideNav from "./AccountSideNav";
import AccountSetting from "./AccountSetting";
import AccountAddress from "./AccountAddress/AccountAddress";
/* import redux */
import { connect } from "react-redux";

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
  render() {
    return (
      <Fragment>
        <br />
        <br />
        <br />
        <div className="container-fluid mt-2">
          <Breadcum breadcumPath={this.state.breadcumPath} />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <AccountSideNav />
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
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
