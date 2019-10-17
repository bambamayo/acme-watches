import React from "react";
import Img from "react-image";
import { ProductConsumer } from "../../context";
import Spinner2 from "../Spinner/Spinner2";

const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="section-header">What our customers are saying about us</h2>
      <div className="reviews__images-container">
        <ProductConsumer>
          {consumer => {
            let reviewImages = Object.keys(consumer.reviews).map(productKey => {
              let details = consumer.reviews[productKey];
              if (consumer.customerReview === null) {
                return (
                  <Img
                    style={{
                      opacity:
                        consumer.defaultReview.customerImage ===
                        details.customerImage
                          ? "1"
                          : "0.5"
                    }}
                    onClick={() =>
                      consumer.showCustomerReviewHandler(productKey)
                    }
                    className="reviews__customer-image"
                    src={details.customerImage}
                    alt="customer thumbnail"
                    key={productKey}
                    loader={<Spinner2 />}
                  />
                );
              } else {
                return (
                  <Img
                    style={{
                      opacity: consumer.customerReview === productKey ? 1 : 0.5
                    }}
                    onClick={() =>
                      consumer.showCustomerReviewHandler(productKey)
                    }
                    className="reviews__customer-image"
                    src={details.customerImage}
                    alt="customer thumbnail"
                    key={productKey}
                    loader={<Spinner2 />}
                  />
                );
              }
            });
            return reviewImages;
          }}
        </ProductConsumer>
      </div>
      <div className="review__message">
        <ProductConsumer>
          {consumer => {
            if (consumer.customerReview === null) {
              return (
                <div
                  className="review__message-container"
                  style={{ zIndex: "3" }}
                >
                  <h3>{consumer.defaultReview.customerName}</h3>
                  <p>{consumer.defaultReview.review}</p>
                  <p>{`${consumer.defaultReview.location.city}, ${consumer.defaultReview.location.country}`}</p>
                </div>
              );
            } else {
              return (
                <div className="review__message-container">
                  <h3>
                    {consumer.reviews[consumer.customerReview].customerName}
                  </h3>
                  <p>{consumer.reviews[consumer.customerReview].review}</p>
                  <p>{`${consumer.reviews[consumer.customerReview].location.city}, ${consumer.reviews[consumer.customerReview].location.country}`}</p>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </div>
    </section>
  );
};

export default Reviews;
