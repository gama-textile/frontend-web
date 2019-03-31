import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* import components */
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

/* import pages */
import HomePage from "../pages/Home";
import CatalogPage from "../pages/Catalog/Catalog";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/katalog" component={CatalogPage} />
      </Switch>
    </div>
    <Footer />
  </Router>
);

export default AppRouter;
