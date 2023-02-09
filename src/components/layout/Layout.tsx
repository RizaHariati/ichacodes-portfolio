import { StaticImage } from "gatsby-plugin-image";
import React from "react";
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

//  <div className="absolute top-0 left-0  h-screen overflow-hidden resize-y -z-10">
//    <StaticImage
//      src="../../images/background_dark.jpg"
//      alt="background"
//      layout="constrained"
//      placeholder="dominantColor"
//      className=" h-screen overflow-hidden resize-y "
//    />
//  </div>;
