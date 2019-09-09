import React, { Component } from "react";
import watches from "./watches";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [...watches],
    cartNumber: 0,
    show: false,
    productInModal: null,
    totalPrice: 0
  };

  showModalHandler = productId => {
    const watches = [...this.state.products];
    const clickedWatch = watches.find(watch => {
      return watch.id === productId;
    });

    this.setState({
      show: true,
      productInModal: clickedWatch
    });
  };

  closeModalHandler = () => {
    this.setState({
      show: false,
      productInModal: null
    });
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
        products: watches,
        cartNumber
      });
    }
  };

  increaseCartCountHandler = id => {
    const watches = [...this.state.products];
    const watchInCart = watches.find(watch => {
      return watch.id === id;
    });
    let newCount = watchInCart.count + 1;
    watchInCart.count = newCount;
    this.setState({
      products: watches
    });
  };

  decreaseCartCountHandler = id => {
    const watches = [...this.state.products];
    let cartNumber = this.state.cartNumber;
    const watchInCart = watches.find(watch => {
      return watch.id === id;
    });
    let count = watchInCart.count;
    if (count > 0) {
      count = count - 1;
      watchInCart.count = count;
      this.setState(() => {
        return { products: watches };
      });
    }
    if (count < 1) {
      watchInCart.inCart = false;
      cartNumber -= 1;
      this.setState(() => {
        return { products: watches, cartNumber };
      });
    }
  };

  clearItemsInCartHandler = () => {
    const watches = [...this.state.products];
    const modifiedProducts = watches.map(product => {
      product.inCart = false;
      product.count = 0;
      return {
        ...product
      };
    });
    this.setState({
      products: modifiedProducts,
      cartNumber: 0
    });
  };

  deleteIndividualItemHandler = id => {
    const watches = [...this.state.products];
    let cartNumber = this.state.cartNumber;
    const deletedWatch = watches.find(product => product.id === id);
    deletedWatch.inCart = false;
    deletedWatch.count = 0;
    let newCartNumber = watches.filter(product => product.inCart === true);
    cartNumber = newCartNumber.length;
    this.setState({
      products: watches,
      cartNumber
    });
  };

  // searchInputChangeHandler = e => {
  //   this.setState({ searchInputVal: e.target.value });
  //   let searchedWatch = this.state.products.filter(product => {
  //     return product.name
  //       .toLowerCase()
  //       .includes(this.state.searchInputVal.toLowerCase());
  //   });
  //   return searchedWatch;
  //   // this.setState({
  //   //   products: searchedWatch
  //   // });
  // };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCartHandler: this.addToCartHandler,
          showModalHandler: this.showModalHandler,
          closeModalHandler: this.closeModalHandler,
          increaseCartCountHandler: this.increaseCartCountHandler,
          decreaseCartCountHandler: this.decreaseCartCountHandler,
          clearItemsInCartHandler: this.clearItemsInCartHandler,
          deleteIndividualItemHandler: this.deleteIndividualItemHandler
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
