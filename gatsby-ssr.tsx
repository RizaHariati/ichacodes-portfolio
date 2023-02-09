import React from "react";
import { AppProvider } from "../gatsby-portfolio/src/context/AppContext";
import type { GatsbySSR } from "gatsby";
import "./src/styles/index.css";
import WrapRootElement from "./src/styles/wrap-root-element";

const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};

export { wrapRootElement };
