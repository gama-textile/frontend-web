import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* import components */
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

/* import pages */
import Home from "../pages/Home";
import ProductCatalog from "../pages/ProductCatalog/ProductCatalog";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

const AppRouter = () => (
  <Router>
    <Fragment>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/katalog-produk" exact component={ProductCatalog} />
          <Route
            path="/katalog-produk/product-detail/:id"
            exact
            component={ProductDetail}
          />
        </Switch>
        <Footer />
      </div>
    </Fragment>
  </Router>
);

export default AppRouter;
