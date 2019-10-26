import React, { Component } from "react";
import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: null,
    cartNumber: 0,
    show: false,
    error: false,
    product: ""
  };

  componentDidMount() {
    axios.get("https://acme-project-930ec.firebaseio.com/products.json").then(
      response => {
        this.setState({
          products: response.data
        });
      },
      error => {
        this.setState({
          error: true
        });
      }
    );
  }

  addToCartHandler = productId => {
    //Get watches and cart number from state
    const products = { ...this.state.products };
    let cartNumber = this.state.cartNumber;
    //Get the watch that was clicked from watches
    const clickedWatch = Object.keys(products).find(productKey => {
      return productKey === productId;
    });
    //Determine if it is available
    if (products[clickedWatch].inCart) return;
    else {
      cartNumber = cartNumber + 1;

      products[clickedWatch].inCart = true;
      //Update cartNumber
      this.setState({
        products,
        cartNumber
      });
    }
  };

  increaseCartCountHandler = productId => {
    const products = { ...this.state.products };
    const watchInCart = Object.keys(products).find(productKey => {
      return productKey === productId;
    });
    let newCount = products[watchInCart].count + 1;
    products[watchInCart].count = newCount;
    this.setState({
      products
    });
  };

  decreaseCartCountHandler = productId => {
    const products = { ...this.state.products };
    const watchInCart = Object.keys(products).find(productKey => {
      return productKey === productId;
    });
    let count = products[watchInCart].count;
    if (count > 0) {
      count = count - 1;

      products[watchInCart].count = count;
      this.setState(() => {
        return { products };
      });
    }
  };

  clearItemsInCartHandler = () => {
    const products = { ...this.state.products };
    const modifiedProducts = Object.keys(products).map(productKey => {
      products[productKey].inCart = false;
      products[productKey].count = 0;
      return {
        ...products[productKey]
      };
    });
    this.setState({
      products: modifiedProducts,
      cartNumber: 0
    });
  };

  deleteIndividualItemHandler = productId => {
    const products = { ...this.state.products };
    let cartNumber = this.state.cartNumber;
    const deletedWatch = Object.keys(products).find(
      productKey => productKey === productId
    );
    products[deletedWatch].inCart = false;
    products[deletedWatch].count = 0;
    let newCartNumber = Object.keys(products).filter(
      productKey => products[productKey].inCart === true
    );
    cartNumber = newCartNumber.length;
    this.setState({
      products,
      cartNumber
    });
  };

  onProductClickedHandler = productId => {
    const products = { ...this.state.products };
    const clickedProduct = Object.keys(products).find(
      productKey => productKey === productId
    );

    this.setState({
      product: products[clickedProduct].name
    });

    return products[clickedProduct].name;
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCartHandler: this.addToCartHandler,
          increaseCartCountHandler: this.increaseCartCountHandler,
          decreaseCartCountHandler: this.decreaseCartCountHandler,
          clearItemsInCartHandler: this.clearItemsInCartHandler,
          deleteIndividualItemHandler: this.deleteIndividualItemHandler,
          onProductClickedHandler: this.onProductClickedHandler
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
