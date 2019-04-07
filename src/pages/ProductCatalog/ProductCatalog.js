import React, { Component } from "react";

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
        name: "Katalog",
        url: "/product-catalog"
      },
      {
        name: "List Produk",
        url: "/product-catalog"
      }
    ]
  };

  componentDidMount() {
    this.props.getCatalogProducts();
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

        <div
          style={{ marginTop: "10px", marginLeft: "40px", marginRight: "20px" }}
        >
          <CatalogProductList catalogProducts={this.props.catalogProducts} />
        </div>

        {/* nanti di delete ini hanya buat nyoba */}
        <div
          style={{ marginTop: "10px", marginLeft: "40px", marginRight: "20px" }}
        >
          <CatalogProductList catalogProducts={this.props.catalogProducts} />
        </div>
        <div
          style={{ marginTop: "10px", marginLeft: "40px", marginRight: "20px" }}
        >
          <CatalogProductList catalogProducts={this.props.catalogProducts} />
        </div>
        <div
          style={{ marginTop: "10px", marginLeft: "40px", marginRight: "20px" }}
        >
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
