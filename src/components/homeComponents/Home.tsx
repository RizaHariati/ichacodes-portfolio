import React, { useState, useCallback, useRef } from "react";
import { useGlobalContext } from "../../context/AppProvider";
import { projects } from "../../data/data";
import { useInView } from "react-intersection-observer";
import MainProfileImage from "./MainProfileImage";
import MainProfileInfo from "./MainProfileInfo";
import MainProjectInfo from "./MainProjectInfo";
import { useEffect } from "react";
import { getHeightCSS } from "../../utils/getHeightCSS";
import MainImageInfo from "./MainImageInfo";
import { navigate } from "gatsby";

type Props = {};
export type TextHeightType = {
  height: number;
  project: string;
  mainInfo: string;
  mainImage: string;
};
const optionsMain = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.8,
};
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.15,
};

const Home = (props: Props) => {
  const [textHeight, settextHeight] = useState<TextHeightType>({
    height: 700,
    project: "project-description-medium",
    mainInfo: "main-info-text ",
    mainImage: "image-visible",
  });
  const {
    setScrollingDown,
    setScrollingUp,
    state: { portfolioImages },
  } = useGlobalContext();
  const ref: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
  const { ref: mainRef, inView: isMainVisible } = useInView(optionsMain);
  const { ref: myRef, inView: isVisible } = useInView(options);
  const { ref: myRef2, inView: isVisible2 } = useInView(options);
  const { ref: myRef3, inView: isVisible3 } = useInView(options);
  const { ref: myRef4, inView: isVisible4 } = useInView(options);

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      e.preventDefault();
      const scrollWindow = e.currentTarget.scrollTop;
      if (scrollWindow >= 10) {
        setScrollingUp();
      } else if (scrollWindow < 10) {
        setScrollingDown();
      }
    },
    []
  );

  useEffect(() => {
    const heightNew = getHeightCSS(window.innerHeight);
    settextHeight(heightNew);
  }, [window.innerHeight]);

  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    return (
      <div
        ref={ref}
        style={{ scrollBehavior: "smooth" }}
        className="main-page-container"
        onScroll={(e) => {
          handleScroll(e);
        }}
      >
        <div className="welcome-container" ref={mainRef}>
          <MainProfileImage />
          <MainProfileInfo textHeight={textHeight} />
        </div>
        {/* --------------------------- project 1 -------------------------- */}
        <div
          className={
            isVisible && !isMainVisible
              ? "project-container h-screen 2xl:h-5/6 "
              : "project-container h-96"
          }
        >
          <div className="pb-line-cont-main">
            <h2 className="hidden sm:block animate-pulse">My projects</h2>
            <LeftLine />
          </div>
          <div className="project-content" ref={myRef}>
            <div className="project-content-inside">
              <div className="project-info-outer overflow-hidden">
                <MainImageInfo
                  visibility={isVisible && !isMainVisible}
                  imageCSS={textHeight.mainImage}
                  imageName="bayarplanner_monitor"
                  evenOdd="odd"
                />

                <MainProjectInfo
                  textHeight={textHeight}
                  project={projects[0]}
                  logo={portfolioImages["bayarplanner"].logo!}
                  visibility={isVisible && !isMainVisible}
                  evenOdd="odd"
                />
              </div>
            </div>
          </div>
          <StraightLine />
        </div>
        {/* --------------------------- project 2-------------------------- */}
        <div
          className={
            isVisible2
              ? "project-container h-screen 2xl:h-4/6 "
              : "project-container "
          }
        >
          <StraightLine />
          <div className="project-content" ref={myRef2}>
            <div className="project-content-inside">
              <div className="project-info-outer">
                <MainImageInfo
                  visibility={isVisible2}
                  imageCSS={textHeight.mainImage}
                  imageName="sudahnonton_monitor"
                  evenOdd="even"
                />

                <MainProjectInfo
                  textHeight={textHeight}
                  project={projects[1]}
                  logo={portfolioImages["sudahnonton"].logo!}
                  visibility={isVisible2}
                  evenOdd="even"
                />
              </div>
            </div>
          </div>
          <StraightLine />
        </div>
        {/* --------------------------- project 3-------------------------- */}
        <div
          className={
            isVisible3
              ? "project-container h-screen 2xl:h-4/6 "
              : "project-container "
          }
        >
          <StraightLine />
          <div className="project-content" ref={myRef3}>
            <div className="project-content-inside ">
              <div className="project-info-outer">
                <MainImageInfo
                  visibility={isVisible3}
                  imageCSS={textHeight.mainImage}
                  imageName="rs-uripsumoharjo_monitor"
                  evenOdd="odd"
                />

                <MainProjectInfo
                  textHeight={textHeight}
                  project={projects[2]}
                  logo={portfolioImages["rs-uripsumoharjo"].logo!}
                  visibility={isVisible3}
                  evenOdd="odd"
                />
              </div>
            </div>
          </div>
          <StraightLine />
        </div>
        {/* --------------------------- project 4-------------------------- */}
        <div
          className={
            isVisible4
              ? "project-container h-screen 2xl:h-4/6 "
              : "project-container "
          }
        >
          <StraightLine />
          <div className="project-content" ref={myRef4}>
            <div className="project-content-inside">
              <div className="project-info-outer">
                <MainImageInfo
                  visibility={isVisible4}
                  imageCSS={textHeight.mainImage}
                  imageName="azriclone_monitor"
                  evenOdd="even"
                />

                <MainProjectInfo
                  textHeight={textHeight}
                  project={projects[3]}
                  logo={portfolioImages["azriclone"].logo!}
                  visibility={isVisible4}
                  evenOdd="even"
                />
              </div>
            </div>
          </div>
          <RightLine />
        </div>

        <div className="h-20  2xl:h-60 w-full "></div>
      </div>
    );
  }
};

export default Home;

const StraightLine = (props: Props) => {
  return (
    <div className="pb-line-cont">
      <div className="pb-line"></div>
    </div>
  );
};

const LeftLine = (props: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="w-full h-full">
        <h2 className=" flex justify-center items-center animate-pulse h-full sm:hidden">
          My projects
        </h2>
      </div>
      <div className="w-full h-full rounded-tr-lg border-t-4 border-r-4 border-textLit"></div>
    </div>
  );
};

const RightLine = (props: Props) => {
  return (
    <div className="pb-line-cont-main  ">
      <div className=" col-start-2 sm:col-start-3 col-span-1 h-full w-full z-20 ">
        <div className="h-1/2 w-full  rounded-bl-lg border-b-4 border-l-4 border-textLit"></div>
        <div className="block sm:hidden text-right text-sm mt-2">
          copyright Ichacodes &copy;{new Date().getFullYear()}
        </div>
      </div>
      <div className="hidden sm:block text-right text-sm mt-2">
        copyright Ichacodes &copy;{new Date().getFullYear()}
      </div>
    </div>
  );
};
