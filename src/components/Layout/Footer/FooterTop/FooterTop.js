import React from "react";
import FooterLinks from "../FooterLinks/FooterLinks";

const FooterTop = () => {
  return (
    <>
      <div className="footer__top-list">
        <h3 className="footer__top-list-header">About Acme</h3>
        <ul className="footer__top-list-items">
          <li>About us</li>
          <li>Why choose acme</li>
          <li>Our manifesto</li>
          <li>Our values</li>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer__top-list">
        <h3 className="footer__top-list-header">Buying acme</h3>
        <ul className="footer__top-list-items">
          <li>Buyer safety</li>
          <li>Delivery</li>
          <li>Acme return policy</li>
        </ul>
      </div>
      <div className="footer__top-list">
        <h3 className="footer__top-list-header">Payment</h3>
        <ul className="footer__top-list-items">
          <li>Verve</li>
          <li>Visa</li>
          <li>Mastercard</li>
        </ul>
      </div>
      <FooterLinks />
    </>
  );
};

export default FooterTop;
