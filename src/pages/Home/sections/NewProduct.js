import React from "react";

import Card from "../../../components/moleculs/Card";

export default function NewProduct() {
  return (
    <div id="home-newproduct" className="container mt-5">
      <h1 className="text-center">New Products</h1>

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
