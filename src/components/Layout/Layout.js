import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = props => (
  <>
    <Header cartNumber={props.cartNumber} />
    <main>{props.children}</main>
    <Footer />
  </>
);

export default Layout;
