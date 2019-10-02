import React from "react";
import { Link } from "react-router-dom";
import Img from "react-image";
import Spinner from "../Spinner/Spinner";
import { withRouter } from "react-router-dom";

const HomeMoment = props => {
  return (
    <section className="moment p-t-8 p-b-8">
      <article className="moment__container">
        <Link to="/shop/men" className="moment__link">
          <img
            className="moment__imageLink"
            src="https://res.cloudinary.com/home-of-websites/image/upload/v1569347014/allef-vinicius-GDX6icODpJo-unsplash_yhsrxk.jpg"
            alt="men shop call to action"
          />
        </Link>
        <div className="moment__details">
          <p className="moment__details-pri t-c">For the gentlemen</p>
          <button
            className="d-i-b t-c moment__details-sec m-t-1 m-lr-a"
            onClick={() => props.history.push("/shop/men")}
          >
            Shop men
          </button>
        </div>
      </article>

      <article className="moment__container">
        <Link to="/shop/women" className="moment__link">
          <Img
            className="moment__imageLink"
            src="https://res.cloudinary.com/home-of-websites/image/upload/v1569346979/joseph-kellner-mw6D1MerL-U-unsplash_uh7l6v.jpg"
            loader={<Spinner />}
          />
        </Link>
        <div className="moment__details">
          <p className="t-c moment__details-pri">For the classy ladies</p>
          <button
            className="d-i-b t-c moment__details-sec m-t-1 m-lr-a"
            onClick={() => props.history.push("/shop/women")}
          >
            Shop women
          </button>
        </div>
      </article>
    </section>
  );
};

export default withRouter(HomeMoment);
