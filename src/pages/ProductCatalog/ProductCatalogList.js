import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card/Card";

/* import css catalog */
import "./ProductCatalog.css";

class ProductCatalogList extends Component {
  __handleCatalogProductDetail = id => {
    const { history } = this.props;
    history.push(`/product-catalog/details/${id}`);
  };

  render() {
    return (
      <div className="productcatalog-list">
        {this.props.catalogProducts.map((catalogProduct, index) => {
          return (
            <Card
              key={index}
              catalogProduct={catalogProduct}
              handleClick={this.__handleCatalogProductDetail}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(ProductCatalogList);
