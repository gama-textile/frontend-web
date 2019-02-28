import React from "react";

import Card from "../../../components/moleculs/Card";

export default function Favorites() {
  return (
    <div id="home-favorites" className="container mt-5">
      <h1 className="text-center">Favorites</h1>

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
