import React, { useState, useEffect } from "react";
import Img from "react-image";
import Spinner2 from "../Spinner/Spinner2";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [displayedReview, setDisplayedReview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://acme-project-930ec.firebaseio.com/reviews.json"
        );
        setReviews(response.data);
        setDisplayedReview(response.data.review1);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const showCustomerReviewHandler = reviewId => {
    if (reviews !== null) {
      const newReviews = { ...reviews };
      const displayedReview = Object.keys(newReviews).find(id => {
        return id === reviewId;
      });

      setDisplayedReview(newReviews[displayedReview]);
    }
  };

  if (loading === true || reviews === null) {
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
  } else if (displayedReview) {
    let reviewImages = Object.keys(reviews).map(productKey => {
      let details = reviews[productKey];
      return (
        <Img
          className="reviews__customer-image"
          src={details.customerImage}
          alt="customer thumbnail"
          key={productKey}
          onClick={() => showCustomerReviewHandler(productKey)}
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
};

export default Reviews;
