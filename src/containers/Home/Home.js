import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";

import HeaderHero from "../../components/Hero/HeaderHero/HeaderHero";

import ShopsHome from "../../components/ShopsHome/ShopsHome";
import HomeDeals from "../../components/ShopsHome/HomeDeals/HomeDeals";
import ShopMen from "../../components/ShopsHome/ShopMen/ShopMen";
import ShopWomen from "../../components/ShopsHome/ShopWomen/ShopWomen";
import Reviews from "../../components/Reviews/Reviews";
import watches from "../../watches";

class Home extends Component {
  state = {
    products: watches,
    cartNumber: 0
  };

  addToCartHandler = productId => {
    //Get watches and cart number from state
    const watches = [...this.state.products];
    let cartNumber = this.state.cartNumber;
    //Get the watch that was clicked from watches
    const clickedWatch = watches.find(watch => {
      return watch.id === productId;
    });
    //Determine if it is available
    if (clickedWatch.inCart) return;
    else {
      cartNumber = cartNumber + 1;
      clickedWatch.count += 1;
      clickedWatch.inCart = true;
      //Update cartNumber
      this.setState({
        cartNumber
      });
    }
  };

  render() {
    return (
      <>
        <HeaderHero />
        <ShopsHome shopHeader="Deals of the day">
          <HomeDeals
            watches={this.state.products}
            addToCart={this.addToCartHandler}
          />
        </ShopsHome>
        <ShopsHome shopHeader="Shop men">
          <ShopMen
            watches={this.state.products}
            addToCart={this.addToCartHandler}
            cartNumber={this.state.cartNumber}
          />
        </ShopsHome>
        <ShopsHome shopHeader="Shop women">
          <ShopWomen
            watches={this.state.products}
            cartNumber={this.state.cartNumber}
            addToCart={this.addToCartHandler}
          />
        </ShopsHome>
        <Reviews />
      </>
    );
  }
}

export default Home;
