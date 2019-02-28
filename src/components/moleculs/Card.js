import React from "react";

export default function Card() {
  return (
    <div className="card" style={{ width: "100%", height: "auto" }}>
      <img
        className="card-img-top"
        src="https://via.placeholder.com/200x200.png"
        alt="Card cap"
      />

      <div className="card-body">
        <h5 className="card-title">Te tew</h5>
        <p className="card-text">Price : Rp. 5000</p>
      </div>
      <div className="card-action">
        <button className="btn btn-default">
          <i className="fas fa-cart-plus" />
        </button>
        <button className="btn btn-default">
          <i className="fas fa-heart" />
        </button>
      </div>
    </div>
  );
}
