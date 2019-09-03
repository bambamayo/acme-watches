import React from "react";
import UnorderedList from "../../../UnorderedList/UnorderedList";
import List from "../../../UnorderedList/List/List";
import Icon from "../../../UI/Icon/Icon";
import classes from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <UnorderedList classname={classes.footerLinks}>
      <List>
        <a href="/">
          <Icon type={["fab", "facebook-f"]} />
        </a>
      </List>
      <List>
        <a href="/">
          {" "}
          <Icon type={["fab", "twitter"]} />
        </a>
      </List>
      <List>
        <a href="/">
          {" "}
          <Icon type={["fab", "instagram"]} />
        </a>
      </List>
      <List>
        <a href="/">
          <Icon type={["fab", "linkedin"]} />
        </a>
      </List>
      <List>
        <a href="/">
          <Icon type={["fab", "youtube"]} />
        </a>
      </List>
    </UnorderedList>
  );
};

export default FooterLinks;
