import React from "react";

import { Header } from "../header";
import { Footer } from "../footer";

import "../../sass/basics.scss";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { Layout };
