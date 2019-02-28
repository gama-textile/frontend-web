import React, { Component } from "react";

import Navbar from "../../components/organism/Navbar";
import Banner from "./sections/Banner";
import NewProduct from "./sections/NewProduct";
import BestSeller from "./sections/BestSeller";
import Favorites from "./sections/Favorites";
import OurProduct from "./sections/OurProduct";
import Footer from "../../components/organism/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Banner />

        <NewProduct />

        <BestSeller />

        <Favorites />

        <OurProduct />

        <Footer />
      </div>
    );
  }
}

export default Home;
