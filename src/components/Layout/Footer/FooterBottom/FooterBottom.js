import React from "react";

const FooterBottom = () => {
  return (
    <div className="footer__bottom t-c m-b-1">
      <p>&copy; acme watches {new Date().getFullYear()}</p>
      <p>
        All pictures on this website are gotten from{" "}
        <a href="https://pexels.com">Pexels</a>
      </p>
    </div>
  );
};

export default FooterBottom;
