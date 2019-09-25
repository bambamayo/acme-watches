import React from "react";

const About = () => {
  return (
    <section className="about">
      <h2 className="section-header">About Acme</h2>
      <div className="about__container">
        <div className="about__text-container">
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
            src="https://res.cloudinary.com/home-of-websites/image/upload/v1569326355/product-13_wbyzrg.jpg"
            alt="about product one"
          />
          <img
            className="about__image about__image--two"
            src="https://res.cloudinary.com/home-of-websites/image/upload/v1569326355/product-9_qrtviw.jpg"
            alt="about product two"
          />
          <img
            src="https://res.cloudinary.com/home-of-websites/image/upload/v1569326355/product-3_tctfeq.jpg"
            alt="about product three"
            className="about__image about__image--three"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
