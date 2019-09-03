import React from "react";
import Text from "../../../UI/Text/Text";
import classes from "./FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <div className={classes.footerBottom}>
      <Text>&copy; acme watches {new Date().getFullYear()}</Text>
      <Text>
        All pictures on this website are gotten from{" "}
        <a href="https://pexels.com">Pexels</a>
      </Text>
    </div>
  );
};

export default FooterBottom;
