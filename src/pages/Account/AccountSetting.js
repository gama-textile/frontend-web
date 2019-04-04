import React, { Component } from "react";

import "./AccountSetting.css";

class AccountSetting extends Component {
  render() {
    return (
      <div className="account-setting">
        <form class="form-inline">
          <div className="left">
            <div className="form-group">
              <label for="displayName">Display Name</label>
              <input
                type="text"
                id="displayName"
                className="form-control mx-sm-3"
              />
            </div>
            <div className="form-group">
              <label for="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                className="form-control mx-sm-3"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="text" id="email" className="form-control mx-sm-3" />
            </div>

            <div className="form-group">
              <label for="oldPassword">Old Password</label>
              <input
                type="password"
                id="oldPassword"
                className="form-control mx-sm-3"
              />
            </div>
            <div className="form-group">
              <label for="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                className="form-control mx-sm-3"
              />
            </div>
            <div className="form-group">
              <label for="confirmPassword">Confirm Password</label>
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

              <button className="btn btn-primary">Change Picture</button>
            </div>
            <div className="btn-container">
              <button className="btn btn-default">Cancel</button>
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AccountSetting;
