import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/Card/Card";

// import "./ProductCatalogList.css";

class ProductCatalogList extends Component {
  render() {
    return (
      <div className="productcatalog-list">
        {this.props.catalogProducts.map((catalogProducts, index) => {
          return <Card key={index} catalogProducts={catalogProducts} />;
        })}
      </div>
    );
  }
}

export default withRouter(ProductCatalogList);
