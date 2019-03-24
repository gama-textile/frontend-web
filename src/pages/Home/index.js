import React, { Component } from "react";

/* import css home */
import "./Home.css";

/* import components */
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="banner-gradient">
          <Carousel />
          <div className="bottom-arrow" />
        </div>
      </div>
    );
  }
}

export default Home;
