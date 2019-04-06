import React, { Component } from "react";
/* import css catalog */
import "./ProductCatalog.css";

/* import components */
import Breadcum from "../../components/Breadcum/Breadcum";
/* import pages */
import CatalogProductList from "./ProductCatalogList";

/* import redux */
import { connect } from "react-redux";
import { getCatalogProducts } from "../../actions/catalogProducts";

class ProductCatalog extends Component {
  state = {
    breadcumPath: [
      {
        name: "Produk Katalog",
        url: "/product-catalog"
      }
    ]
  };

  componentDidMount() {
    this.props.getCatalogProducts();
  }
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <div className="container-fluid mt-2">
          <Breadcum breadcumPath={this.state.breadcumPath} />
        </div>
        <hr />
        <div className="row">
          <CatalogProductList catalogProducts={this.props.catalogProducts} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  catalogProducts: state.catalogProductsReducers.catalogProducts
});

export default connect(
  mapStateToProps,
  { getCatalogProducts }
)(ProductCatalog);
