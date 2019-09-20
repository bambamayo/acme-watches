import React from "react";
import Icon from "../../../UI/Icon/Icon";

const FooterLinks = () => {
  return (
    <ul className="footer__links">
      <li>
        <a href="/">
          <Icon type={["fab", "facebook-f"]} />
        </a>
      </li>
      <li>
        <a href="/">
          {" "}
          <Icon type={["fab", "twitter"]} />
        </a>
      </li>
      <li>
        <a href="/">
          {" "}
          <Icon type={["fab", "instagram"]} />
        </a>
      </li>
      <li>
        <a href="/">
          <Icon type={["fab", "linkedin"]} />
        </a>
      </li>
      <li>
        <a href="/">
          <Icon type={["fab", "youtube"]} />
        </a>
      </li>
    </ul>
  );
};

export default FooterLinks;
