import React from "react";
import { Link } from "react-router-dom";
import menCallToAction from "../../assets/images/man-calltoaction.jpg";
import womenCallToAction from "../../assets/images/woman-calltoaction.jpg";

const HomeMoment = () => {
  return (
    <section className="moment p-t-8 p-b-8">
      <article className="moment__container">
        <Link to="/shop/men" className="moment__link">
          <img
            className="moment__imageLink"
            src={menCallToAction}
            alt="men shop call to action"
          />
        </Link>
        <div className="moment__details m-t-2">
          <p className="moment__details-pri t-c">For the gentlemen</p>
          <Link
            to="/shop/men"
            className="d-i-b t-c moment__details-sec m-t-1 m-lr-a"
          >
            Shop men
          </Link>
        </div>
      </article>

      <article className="moment__container">
        <Link to="/shop/women" className="moment__link">
          <img
            className="moment__imageLink"
            src={womenCallToAction}
            alt="men shop call to action"
          />
        </Link>
        <div className="moment__details m-t-2">
          <p className="t-c moment__details-pri">For the classy ladies</p>
          <Link
            to="/shop/women"
            className="d-i-b t-c moment__details-sec m-t-1 m-lr-a"
          >
            Shop women
          </Link>
        </div>
      </article>
    </section>
  );
};

export default HomeMoment;
