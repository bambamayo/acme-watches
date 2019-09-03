import React from "react";
import classes from "./Footer.module.css";

import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <FooterTop />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
