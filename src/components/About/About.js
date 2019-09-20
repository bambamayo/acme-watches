import React from "react";
import imageOne from "../../assets/images/product-3.jpg";
import imageTwo from "../../assets/images/product-9.jpg";
import imageThree from "../../assets/images/product-13.jpg";

const About = () => {
  return (
    <section className="about">
      <h2 className="section-header">About Acme</h2>
      <div className="about__container m-t-3 m-b-3 m-lr-a">
        <div className="about__text-container ">
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            magni consectetur, hic rerum doloribus quam. Dicta consequatur
            voluptatum et error atque tenetur. Praesentium, vitae nulla incidunt
            libero aspernatur eos laboriosam.
          </p>
          <p className="about__text">
            Pariatur, odio dolor!Labore eius aliquid minima veniam atque, est
            repellendus molestias, illum minus deserunt corrupti numquam eos
            quae. Veniam, dolorem molestiae quasi et optio, quam aspernatur
            saepe rem quos ipsa ut facere.
          </p>
        </div>
        <div className="about__images">
          <img
            className="about__image about__image--one"
            src={imageOne}
            alt="acme watch product"
          />
          <img
            className="about__image about__image--two"
            src={imageTwo}
            alt="acme watch product"
          />
          <img
            className="about__image about__image--three"
            src={imageThree}
            alt="acme watch product"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
