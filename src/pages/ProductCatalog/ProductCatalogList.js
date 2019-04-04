import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card/Card";

// import "./ProductCatalogList.css";

class ProductCatalogList extends Component {
  __handleCatalogProductDetail = id => {
    const { history } = this.props;
    history.push(`/katalog-produk/details/1`);
  };

  render() {
    return (
      <div className="productcatalog-list">
        {this.props.catalogProducts.map((catalogProduct, index) => {
          return (
            <Card
              key={index}
              catalogProduct={catalogProduct}
              handleClick={this.__handleCatalogProductDetai}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(ProductCatalogList);
