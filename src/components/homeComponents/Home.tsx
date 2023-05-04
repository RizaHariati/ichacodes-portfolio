import React, { useState, useCallback, useRef, useEffect } from "react";
import { useGlobalContext } from "../../context/AppProvider";
import { projects } from "../../data/data";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import MainProfileImage from "./MainProfileImage";
import MainProfileInfo from "./MainProfileInfo";

import { Link, navigate } from "gatsby";
import { LeftLine1 } from "./MainProjectItem";

type Props = {};
type VisibilityKeyType = { [key: string]: { visibility: boolean } };

export type TextHeightType = {
  height: number;
  project: string;
  mainInfo: string;
  mainImage: string;
};

const Home = (props: Props) => {
  const {
    textHeight,
    state: { portfolioImages },
  } = useGlobalContext();

  let observerOptions: IntersectionOptions = {
    rootMargin: "0px",
    threshold: 0.25,
  };
  const { ref, inView: visible } = useInView(observerOptions);

  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    return (
      <div
        style={{ scrollBehavior: "smooth" }}
        className="main-page-container"
        onScroll={(e) => {
          if (visible) {
            navigate("/projects/bayarplanner/");
          }
        }}
      >
        <div className="welcome-container" id="welcome">
          <MainProfileImage />
          <MainProfileInfo textHeight={textHeight} />
        </div>
        {/* --------------------------- project 1 -------------------------- */}
        <div className=" w-full max-w-6xl  mx-auto" ref={ref}>
          <div className="pb-line-cont-main ">
            <h2 className="hidden sm:block animate-pulse mb-auto">
              My projects
            </h2>
            <LeftLine1 />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
