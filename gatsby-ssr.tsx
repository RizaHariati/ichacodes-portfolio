import React from "react";
import type { GatsbySSR } from "gatsby";
import "./src/styles/index.css";
import "./src/styles/mainpage.css";
import "./src/styles/modal.css";
import WrapRootElement from "./src/styles/wrap-root-element";

const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};

export { wrapRootElement };
