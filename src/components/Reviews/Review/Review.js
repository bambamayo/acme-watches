import React from "react";
import classes from "./Review.module.css";
import Text from "../../UI/Text/Text";
import Image from "../../ProductContainer/Image/Image";

const Review = props => {
  return (
    <div className={classes.reviewContainer}>
      <Text classname={classes.name}>{props.customerName}</Text>
      <Image classname={classes.image} alt="" Src={props.customerImage} />
      <Text classname={classes.review}>{props.customerReview}</Text>
      <Text classname={classes.location}>{props.location}</Text>
    </div>
  );
};

export default Review;
