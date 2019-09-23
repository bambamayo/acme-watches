import React from "react";
import Img from "react-image";
import Spinner from "../Spinner/Spinner";

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
          <Img
            className="about__image about__image--one"
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fproduct-13.jpg?alt=media&token=4037646b-21a7-4ad9-8633-c92cf9fa93fd"
            alt="about product one"
            loader={<Spinner />}
          />
          <Img
            className="about__image about__image--two"
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fproduct-3.jpg?alt=media&token=a3ab1986-95b7-476a-9637-02301d8147c6"
            alt="about product two"
            loader={<Spinner />}
          />
          {/* <img
            className="about__image about__image--two"
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fproduct-3.jpg?alt=media&token=a3ab1986-95b7-476a-9637-02301d8147c6"
            alt="about product two"
          /> */}
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fproduct-9.jpg?alt=media&token=171fba72-0f67-450a-9b0c-ce1f377ca394"
            alt="about product three"
            className="about__image about__image--three"
            loader={<Spinner />}
          />
          {/* <img
            className="about__image about__image--three"
            src="https://firebasestorage.googleapis.com/v0/b/acme-project-930ec.appspot.com/o/other-images%2Fproduct-9.jpg?alt=media&token=171fba72-0f67-450a-9b0c-ce1f377ca394"
            alt="about product three"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
