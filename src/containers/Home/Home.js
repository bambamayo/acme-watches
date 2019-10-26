import React, { Component } from "react";
import HeaderHero from "../../components/Hero/HeaderHero/HeaderHero";
import Reviews from "../../components/Reviews/Reviews";
import About from "../../components/About/About";

import HomeMoment from "../../components/HomeMoment/HomeMoment";

class Home extends Component {
  render() {
    return (
      <>
        <HeaderHero />
        <About />
        <HomeMoment />
        <Reviews />
      </>
    );
  }
}

export default Home;
