import React from "react";
import type { GatsbyBrowser } from "gatsby";
import "./src/styles/index.css";
import "./src/styles/mainpage.css";
import WrapRootElement from "./src/styles/wrap-root-element";

const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};

export { wrapRootElement };
