import React, { Component } from "react";

export default class ImageViewer extends Component {
  render() {
    return (
      <div className="row image-viewer card">
        <div className="col-md-9">
          <img
            className="img-fluid"
            style={{ marginTop: "10px", marginBottom: "10px", width: "90%" }}
            src="https://via.placeholder.com/500x500.png"
            alt="tes"
          />
        </div>
        {/* <div className="col-md-3 image-viewer-imagelist">
          <img
            className="img-fluid image-viewer-item"
            src="https://via.placeholder.com/500x500.png"
            alt="tes"
          />
          <img
            className="img-fluid image-viewer-item"
            src="https://via.placeholder.com/500x500.png"
            alt="tes"
          />
          <img
            className="img-fluid image-viewer-item"
            src="https://via.placeholder.com/500x500.png"
            alt="tes"
          />
          <img
            className="img-fluid image-viewer-item"
            src="https://via.placeholder.com/500x500.png"
            alt="tes"
          />
        </div> */}
      </div>

      //   <div className="row image-viewer">
      //     <div class="card">
      //       <div className="col-md-9">
      //         <img
      //           src="https://via.placeholder.com/500x500.png"
      //           className="card-img-top text-center"
      //           style={{ width: "80%", margin: "10px" }}
      //           alt="produk"
      //         />
      //       </div>
      //     </div>
      //   </div>
    );
  }
}
