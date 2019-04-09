import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Masuk
              </h5>
              <Link
                // type="button"
                // className="close"
                // data-dismiss="modal"
                // aria-label="Close"
                className="nav-link__gama"
                data-toggle="modal"
                to="#"
                data-target="#exampleModal"
              >
                {/* <span aria-hidden="true">&times;</span> */}
                Daftar
              </Link>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="pasword"
                    className="form-control"
                    placeholder="pasword"
                  />
                </div>
                <div
                  className="form-group text-right"
                  style={{ margin: "0px" }}
                >
                  <label className="col-form-label">
                    <b>Lupa Password</b>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
