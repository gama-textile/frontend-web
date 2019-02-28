import React from "react";

import Card from "../../../components/moleculs/Card";

export default function OurProduct() {
  return (
    <div id="home-ourproduct" className="container mt-5">
      <h1 className="text-center">Our products</h1>

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
