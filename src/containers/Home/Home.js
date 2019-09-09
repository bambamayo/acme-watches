import React, { Component } from "react";
import HeaderHero from "../../components/Hero/HeaderHero/HeaderHero";
import ShopsHome from "../../components/ShopsHome/ShopsHome";
import HomeDeals from "../../components/ShopsHome/HomeDeals/HomeDeals";
import ShopMen from "../../components/ShopsHome/ShopMen/ShopMen";
import ShopWomen from "../../components/ShopsHome/ShopWomen/ShopWomen";
import Reviews from "../../components/Reviews/Reviews";
import Modal from "../../components/UI/Modal/Modal";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

class Home extends Component {
  render() {
    return (
      <>
        <Modal>
          <ProductDetails />
        </Modal>
        <HeaderHero />
        <ShopsHome shopHeader="Deals of the day">
          <HomeDeals />
        </ShopsHome>
        <ShopsHome shopHeader="Shop men">
          <ShopMen />
        </ShopsHome>
        <ShopsHome shopHeader="Shop women">
          <ShopWomen />
        </ShopsHome>
        <Reviews />
      </>
    );
  }
}

export default Home;
