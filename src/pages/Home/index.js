import React, { Component } from "react";

/* import css home */
import "./Home.css";

/* import components */
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
// import NewProduct from "./sections/NewProduct/NewProduct";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Carousel />
      </div>
    );
  }
}

export default Home;
