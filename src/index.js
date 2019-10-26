import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  faShoppingCart,
  faSearch,
  faLongArrowAltDown,
  faTrashAlt,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle
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
import ScrollToTop from "./containers/ScrollToTop";

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTrashAlt,
  faShoppingCart,
  faSearch,
  faLongArrowAltDown,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle
);

const app = (
  <ProductProvider>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </ProductProvider>
);

ReactDOM.render(app, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
