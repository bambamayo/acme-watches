import React from "react";

import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <FooterTop />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
