import React, { Component } from "react";
import Img from "react-image";
import Spinner2 from "../Spinner/Spinner2";
import axios from "axios";

class Reviews extends Component {
  state = {
    reviews: null,
    loading: false,
    error: null,
    displayedReview: null
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });
    try {
      const response = await axios.get(
        "https://acme-project-930ec.firebaseio.com/reviews.json"
      );
      this.setState({
        reviews: response.data,
        loading: false,
        displayedReview: response.data.review1
      });
    } catch (error) {
      this.setState({
        error: error.response.data.error,
        loading: false
      });
    }
  }

  showCustomerReviewHandler = reviewId => {
    if (this.state.reviews !== null) {
      const reviews = { ...this.state.reviews };
      const displayedReview = Object.keys(reviews).find(id => {
        return id === reviewId;
      });
    
      this.setState({
        displayedReview: { ...reviews[displayedReview] }
      });
    }
  };

  render() {
    let { displayedReview, reviews, loading } = this.state;
    if (loading || reviews === null) {
      return (
        <section className="reviews">
          <h2 className="section-header">
            What our customers are saying about us
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "2rem"
            }}
          >
            Loading reviews.....
          </p>
        </section>
      );
    } else {
      let reviewImages = Object.keys(reviews).map(productKey => {
        let details = reviews[productKey];

        return (
          <Img
            className="reviews__customer-image"
            src={details.customerImage}
            alt="customer thumbnail"
            key={productKey}
            onClick={() => this.showCustomerReviewHandler(productKey)}
            style={
              displayedReview.customerName === reviews[productKey].customerName
                ? { opacity: "1" }
                : { opacity: "0.5" }
            }
            loader={<Spinner2 />}
          />
        );
      });
      return (
        <section className="reviews">
          <h2 className="section-header">
            What our customers are saying about us
          </h2>
          <div className="reviews__images-container">{reviewImages}</div>
          <div className="review__message">
            <div className="review__message-container">
              <h3>{displayedReview.customerName}</h3>
              <p>{displayedReview.review}</p>
              <p>{`${displayedReview.location.state}, ${displayedReview.location.country}`}</p>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Reviews;
