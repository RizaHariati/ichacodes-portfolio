import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Modal from "../modalComponents/Modal";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
