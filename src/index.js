import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  faShoppingCart,
  faSearch,
  faLongArrowAltDown,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import App from "./containers/App";
import { ProductProvider } from "./context";
import "./sass/main.scss";
library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTrashAlt,
  faShoppingCart,
  faSearch,
  faLongArrowAltDown
);

const app = (
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>
);

ReactDOM.render(app, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
