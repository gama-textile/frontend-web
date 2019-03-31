import React, { Component } from "react";

class Shopping extends Component {
  render() {
    return (
      <div className="container text-center text-custom">
        <div className="row">
          <div className="col-md-12">
            <h3>- WHY SHOPPING IN GAMA TEXTILE? -</h3>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" alt="gambar" src="icon/diamond.png" />
            <h4>PREMIUM QUALITY</h4>
            <p>Well the best quality of textiles with</p>
            <p>the cheapest price</p>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" alt="gambar" src="icon/ruler.png" />
            <h4>BEST SERVICE</h4>
            <p>Well the best quality of textiles with</p>
            <p>the cheapest price</p>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" alt="gambar" src="icon/box.png" />
            <h4>SAFE PACKING</h4>
            <p>Well the best quality of textiles with</p>
            <p>the cheapest price</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Shopping;
