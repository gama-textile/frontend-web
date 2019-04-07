import React, { Component } from "react";

import "./AccountSetting.css";

class AccountSetting extends Component {
  render() {
    return (
      <div className="account-setting">
        <form className="form-inline">
          <div className="left">
            <div className="form-group row">
              <label htmlFor="displayName" className="col-sm-4 col-form-label">
                Display Name
              </label>
              <input
                type="text"
                id="displayName"
                className="form-control mx-sm-3"
              />
            </div>

            <div className="form-group row">
              <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">
                Phone Number
              </label>

              <input
                type="text"
                id="phoneNumber"
                className="form-control mx-sm-3"
              />
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-sm-4 col-form-label">
                Email
              </label>
              <input type="text" id="email" className="form-control mx-sm-3" />
            </div>

            <div className="form-group row">
              <label htmlFor="oldPassword" className="col-sm-4 col-form-label">
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                className="form-control mx-sm-3"
              />
            </div>
            <div className="form-group row">
              <label htmlFor="newPassword" className="col-sm-4 col-form-label">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="form-control mx-sm-3"
              />
            </div>
            <div className="form-group row">
              <label
                htmlFor="confirmPassword"
                className="col-sm-4 col-form-label"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control mx-sm-3"
              />
            </div>
          </div>

          <div className="right">
            <div className="profil-picture-container">
              <img
                className="rounded-circle img-fluid"
                alt="gambar"
                src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              />

              <button className="btn btn-outline-danger">Change Picture</button>
            </div>
            <div className="btn-container">
              <button
                className="btn btn-outline-danger"
                type="button"
                style={{ margin: "5px" }}
              >
                Cancel
              </button>

              <button
                className="btn btn-danger"
                type="button"
                style={{ margin: "5px" }}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AccountSetting;
