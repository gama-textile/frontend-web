import React, { Component } from "react";

/* import css home */
import "./Home.css";

/* import components */
// import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
// import Footer from "../../components/Footer/Footer";

/* import sections */
import Shopping from "./sections/Shopping/Shopping";
import NewProduct from "./sections/NewProduct/NewProduct";
import BestSeller from "./sections/BestSeller/BestSeller";
import MostFavorite from "./sections/MostFavorite/MostFavorite";
import OurCollection from "./sections/OurCollection/OurCollection";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="banner__gradient">
          <Carousel />
          <div className="bottom-arrow" />
        </div>
        <br />
        <br />
        <Shopping />
        <br />
        <NewProduct />
        <br />
        <BestSeller />
        <br />
        <MostFavorite />
        <br />
        <OurCollection />
        {/* <Footer /> */}
        <div className="chat-button">
          <a href="/">
            <i className="material-icons chat-icon">chat</i>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
