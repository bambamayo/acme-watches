import React from "react";
import { Link } from "react-router-dom";
import Img from "react-image";
import Spinner from "../Spinner/Spinner";

const HomeMoment = () => {
  return (
    <section className="moment p-t-8 p-b-8">
      <article className="moment__container">
        <Link to="/shop/men" className="moment__link">
          <Img
            className="moment__imageLink"
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fman-calltoaction.jpg?alt=media&token=a7cd66f6-78af-48c3-962f-91ae02deef00"
            alt="men shop call to action"
            loader={<Spinner />}
          />
          {/* <img
            className="moment__imageLink"
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fman-calltoaction.jpg?alt=media&token=a7cd66f6-78af-48c3-962f-91ae02deef00"
            alt="men shop call to action"
          /> */}
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
          <Img
            className="moment__imageLink"
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fwoman-calltoaction.jpg?alt=media&token=1dafa532-14e7-4448-a58d-0755889c2086"
            alt="men shop call to action"
            loader={<Spinner />}
          />
          {/* <img
            className="moment__imageLink"
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fwoman-calltoaction.jpg?alt=media&token=1dafa532-14e7-4448-a58d-0755889c2086"
            alt="men shop call to action"
          /> */}
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
