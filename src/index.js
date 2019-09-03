import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  faUser,
  faUserPlus,
  faShoppingCart,
  faSearch,
  faLongArrowAltDown,
  faMinus,
  faPlus,
  faArrowRight
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

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faUser,
  faUserPlus,
  faShoppingCart,
  faSearch,
  faLongArrowAltDown,
  faMinus,
  faPlus,
  faArrowRight
);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
