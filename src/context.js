import React, { Component } from "react";

import reviews from "./reviews";
import { defaultReview } from "./reviews";
import axios from "axios";
import { AuthConsumer } from "./authContext";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: null,
    cartNumber: 0,
    show: false,
    error: false,
    productInModal: null,
    // totalPrice: 0,
    reviews: { ...reviews },
    customerReview: null,
    defaultReview: defaultReview
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

  showCustomerReviewHandler = reviewId => {
    const reviews = { ...this.state.reviews };
    const customerReview = Object.keys(reviews).find(id => {
      return id === reviewId;
    });

    this.setState({
      customerReview
    });
  };

  showModalHandler = productId => {
    const products = { ...this.state.products };
    const clickedWatch = Object.keys(products).find(productKey => {
      return productKey === productId;
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

  onClickModalHandler = () => {
    this.setState({
      show: true
    });
  };

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
      products[clickedWatch].count += 1;
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

  render() {
    return (
      <AuthConsumer>
        {consumer => {
          return (
            <ProductContext.Provider
              value={{
                ...consumer,
                ...this.state,
                addToCartHandler: this.addToCartHandler,
                showModalHandler: this.showModalHandler,
                closeModalHandler: this.closeModalHandler,
                increaseCartCountHandler: this.increaseCartCountHandler,
                decreaseCartCountHandler: this.decreaseCartCountHandler,
                clearItemsInCartHandler: this.clearItemsInCartHandler,
                deleteIndividualItemHandler: this.deleteIndividualItemHandler,
                onClickModalHandler: this.onClickModalHandler,
                showCustomerReviewHandler: this.showCustomerReviewHandler
              }}
            >
              {this.props.children}
            </ProductContext.Provider>
          );
        }}
      </AuthConsumer>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
