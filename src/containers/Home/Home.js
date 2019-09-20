import React, { Component } from "react";
import HeaderHero from "../../components/Hero/HeaderHero/HeaderHero";
import Reviews from "../../components/Reviews/Reviews";
import Modal from "../../components/UI/Modal/Modal";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import About from "../../components/About/About";

import HomeMoment from "../../components/HomeMoment/HomeMoment";

class Home extends Component {
  render() {
    return (
      <>
        <Modal>
          <ProductDetails />
        </Modal>
        <HeaderHero />
        <About />
        <HomeMoment />
        <Reviews />
      </>
    );
  }
}

export default Home;
