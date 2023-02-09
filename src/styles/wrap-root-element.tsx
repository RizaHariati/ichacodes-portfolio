import * as React from "react";
import { AppProvider } from "../context/AppProvider";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const WrapRootElement = ({ children }: Props) => (
  <AppProvider>{children}</AppProvider>
);

export default WrapRootElement;
