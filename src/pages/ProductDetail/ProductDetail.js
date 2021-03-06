import React, { Component } from "react";

/* import css product detail */
import "./ProductDetail.css";

/* import components */
import Breadcum from "../../components/Breadcum/Breadcum";

/* import pages */
import ImageViewer from "./ImageViewer";
import ProductDetailInteract from "./ProductDetailInteract";
import ProductDetailFooter from "./ProductDetailFooter";

/* redux */
import { connect } from "react-redux";
import { getSingleCatalogProduct } from "../../actions/catalogProducts";
class ProductDetail extends Component {
  state = {
    breadcumPath: [
      {
        name: "Katalog",
        url: "/product-catalog"
      },
      {
        name: "List Produk",
        url: "/product-catalog"
      },
      {
        name: "Produk Detail"
        // url: `/product-catalog/details/${id}`
      }
    ]
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleCatalogProduct(id);
  }

  render() {
    return (
      <div>
        <div
          className="container-fluid"
          style={{ marginTop: "15px", marginLeft: "40px" }}
        >
          <Breadcum breadcumPath={this.state.breadcumPath} />
        </div>

        <div className="container" style={{ marginTop: "15px" }}>
          <div className="row">
            <div className="col-md-7">
              <ImageViewer />
            </div>
            <div className="col-md-5">
              <ProductDetailInteract
                catalogProduct={this.props.catalogProduct}
              />
            </div>
          </div>
          <br />
          <div>
            <ProductDetailFooter />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catalogProduct: state.catalogProductsReducers.catalogProduct
});

export default connect(
  mapStateToProps,
  {
    getSingleCatalogProduct
  }
)(ProductDetail);
