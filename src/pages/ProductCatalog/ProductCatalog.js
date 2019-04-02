import React, { Component } from "react";
/* import css catalog */
import "./ProductCatalog.css";

/* import pages */
import CatalogProductList from "./ProductCatalogList";

/* import redux */
import { connect } from "react-redux";
import { getCatalogProducts } from "../../actions/catalogProducts";

class ProductCatalog extends Component {
  componentDidMount() {
    this.props.getCatalogProducts();
  }
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <h3 className="text-center">PRODUK KATALOG</h3>
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
