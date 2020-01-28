import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = React.createContext();

const ProductContextProvider = props => {
  const [products, setProducts] = useState(null);
  const [cartNumber, setCartNumber] = useState(0);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://acme-project-930ec.firebaseio.com/products.json"
        );

        setProducts(response.data);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  const addToCartHandler = productId => {
    // Get products and cart number respective states
    const newProducts = { ...products };
    let newCartNumber = cartNumber;
    // Get the product that user clicked
    const clickedWatch = Object.keys(newProducts).find(productKey => {
      return productKey === productId;
    });
    // Check if it is already in cart
    if (newProducts[clickedWatch].inCart) return;
    else {
      newCartNumber = newCartNumber + 1;
      newProducts[clickedWatch].inCart = true;
      newProducts[clickedWatch].count += 1;
    }

    setProducts(newProducts);
    setCartNumber(newCartNumber);
  };

  const increaseCartCountHandler = productId => {
    // Get products state
    const newProducts = { ...products };
    // Get clicked watch in cart
    const clickedWatchInCart = Object.keys(newProducts).find(productKey => {
      return productKey === productId;
    });
    // Increase count of clicked watch
    let newCount = newProducts[clickedWatchInCart].count + 1;
    newProducts[clickedWatchInCart].count = newCount;
    // Set new products
    setProducts(newProducts);
  };

  const decreaseCartCountHandler = productId => {
    // Get products state
    const newProducts = { ...products };
    // Get clicked watch in cart
    const clickedWatchInCart = Object.keys(newProducts).find(productKey => {
      return productKey === productId;
    });
    // Decrease count of clicked watch
    let count = newProducts[clickedWatchInCart].count;
    if (count > 0) {
      count = count - 1;
      newProducts[clickedWatchInCart].count = count;
      // Set new products
      setProducts(newProducts);
    }
  };

  const clearItemsInCartHandler = () => {
    // Get products state
    const newProducts = { ...products };
    // Loop through products and for each product make count = 0, inCart = false
    const modifiedProducts = Object.keys(newProducts).map(productKey => {
      newProducts[productKey].inCart = false;
      newProducts[productKey].count = 0;
      return {
        ...newProducts[productKey]
      };
    });
    // Change products and cartNumber states
    setProducts(modifiedProducts);
    setCartNumber(0);
  };

  const deleteIndividualItemHandler = productId => {
    // Get products state
    const newProducts = { ...products };
    // Get cartNumber state
    let newCartNumber = cartNumber;
    // Get clickedWatch
    const deletedWatch = Object.keys(newProducts).find(
      productKey => productKey === productId
    );
    // Make clickedWatch count = 0, and inCart = false
    newProducts[deletedWatch].inCart = false;
    newProducts[deletedWatch].count = 0;
    // Get products still in cart
    let productsStillInCart = Object.keys(products).filter(
      productKey => products[productKey].inCart === true
    );
    // Make cartNumber equal to length of productsStillInCart
    newCartNumber = productsStillInCart.length;
    // Set products and cartNumber states
    setProducts(newProducts);
    setCartNumber(newCartNumber);
  };

  const totalSumOfProductsInCart = () => {
    // Get products
    const newProducts = { ...products };
    let totalSum = Object.keys(newProducts)
      .filter(productKey => {
        return newProducts[productKey].count > 0;
      })
      .map(productKey => {
        let details = newProducts[productKey];
        return details.count * details.price;
      })
      .reduce((prev, current) => {
        return prev + current;
      }, 0);
    return totalSum;
  };

  const onProductClickedHandler = productId => {
    // Get products
    const newProducts = { ...products };
    // Get clicked product
    const clickedProduct = Object.keys(newProducts).find(
      productKey => productKey === productId
    );
    // Update product clicked state
      setProduct(newProducts[clickedProduct].name)
    return products[clickedProduct].name;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cartNumber,
        error,
        product,
        addToCartHandler: addToCartHandler,
        increaseCartCountHandler: increaseCartCountHandler,
        decreaseCartCountHandler: decreaseCartCountHandler,
        clearItemsInCartHandler: clearItemsInCartHandler,
        deleteIndividualItemHandler: deleteIndividualItemHandler,
        totalSumOfProductsInCart: totalSumOfProductsInCart,
        onProductClickedHandler: onProductClickedHandler
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
