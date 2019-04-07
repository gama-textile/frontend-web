import React, { Fragment } from "react";
import "./AccountAddressItem.css";

export default function AccountAddressItem(props) {
  const { name, phoneNumber } = props.address;
  const { postalcode } = props.address.PostalCode;

  return (
    <Fragment>
      <tr className="firstrow">
        <td>Name</td>
        <td>{name}</td>
        <td className="text-right">
          <button
            className="btn btn-outline-danger"
            type="button"
            style={{ margin: "5px" }}
          >
            Delete
          </button>
          <button
            className="btn btn-outline-danger"
            type="button"
            style={{ margin: "5px" }}
          >
            Edit
          </button>
        </td>
      </tr>
      <tr>
        <td>Phone Number</td>
        <td>{phoneNumber}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>
          Jl Cendana
          <br />
          Tanjung Seneng - Bandar Lampung City
          <br />
          Lampung
          <br />
          {postalcode}
        </td>
      </tr>
    </Fragment>
  );
}
