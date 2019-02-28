import React from "react";

import Card from "../../../components/moleculs/Card";

export default function BestSeller() {
  return (
    <div id="home-bestseller" className="container mt-5">
      <h1 className="text-center">Best Seller</h1>

      <div className="row">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    </div>
  );
}
