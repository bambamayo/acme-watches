import React from "react";
import classes from "./Reviews.module.css";
import TextHeader from "../UI/Text/TextHeader/TextHeader";
import Review from "./Review/Review";
import cusImage from "../../assets/images/hero_use.jpg";

const Reviews = () => {
  return (
    <section className={classes.reviews}>
      <TextHeader>We leave our customers satisfied</TextHeader>
      <div className={classes.reviewsList}>
        <Review
          customerName="uzor okoli"
          customerImage={cusImage}
          customerReview="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore maxime quae voluptatibus quia iusto quo culpa nam ad beatae deleniti, illum adipisci vel recusandae cumque architecto odit repellat."
          location="Lagos state, Nigeria"
        />
        <Review
          customerName="hassan uzari"
          customerImage={cusImage}
          customerReview="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro doloribus nesciunt dolores laboriosam corporis sed quo minima! Porro necessitatibus vero exercitationem dicta aspernatur, pariatur suscipit ipsum aliquid, culpa quidem dolor"
          location="Oyo state, Nigeria"
        />
        <Review
          customerName="seyi ajanokun"
          customerImage={cusImage}
          customerReview="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dicta esse est voluptas. Tempora esse velit, nostrum porro, recusandae dolorum ipsa repellendus neque veritatis unde expedita natus necessitatibus voluptas mollitia!"
          location="Anambra state, Nigeria"
        />
      </div>
    </section>
  );
};

export default Reviews;
