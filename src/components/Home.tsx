import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { useGlobalContext } from "../context/AppProvider";
import { projects } from "../data/data";
import { useInView } from "react-intersection-observer";
import MainProfileImage from "./homeComponents/MainProfileImage";
import MainProfileInfo from "./homeComponents/MainProfileInfo";
import MainProjectInfo from "./homeComponents/MainProjectInfo";
import { useEffect } from "react";

type Props = {};
export type TextHeightType = {
  height: number;
  project: string;
  mainInfo: string;
  mainImage: string;
};
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.1,
};
const Home = (props: Props) => {
  const [textHeight, settextHeight] = useState<TextHeightType>({
    height: 700,
    project: "project-description-medium",
    mainInfo: "main-info-text ",
    mainImage: "image-visible",
  });
  const {
    state: { portfolioImages },
  } = useGlobalContext();
  // const myRef: any = useRef(null);
  const {
    ref: mainRef,
    inView: ismainVisible,
    entry: entryMain,
  } = useInView({
    root: null,
    rootMargin: "0px 0px 0% 0px",
    threshold: 0.3,
  });
  const { ref: myRef, inView: isVisible, entry } = useInView(options);
  const { ref: myRef2, inView: isVisible2, entry: entry2 } = useInView(options);
  const { ref: myRef3, inView: isVisible3, entry: entry3 } = useInView(options);
  const { ref: myRef4, inView: isVisible4, entry: entry4 } = useInView(options);

  const checkHeight = (entry: IntersectionObserverEntry | undefined) => {
    const entryheight = entry?.rootBounds?.height || 700;

    if (entryheight !== textHeight.height) {
      if (entryheight < 460) {
        return settextHeight({
          height: entryheight,
          project: "project-description-supershort",
          mainInfo: "main-info-text leading-5",
          mainImage: "image-visible",
        });
      }
      if (entryheight >= 460 && entryheight < 550) {
        return settextHeight({
          height: entryheight,
          project: "project-description-short ",
          mainInfo: "main-info-text leading-6 ",
          mainImage: "image-visible",
        });
      } else if (entryheight >= 550 && entryheight < 750) {
        return settextHeight({
          height: entryheight,
          project: "project-description-medium ",
          mainInfo: "main-info-text leading-6 pb-10 md:text-xl ",
          mainImage: "image-visible sm:h-72",
        });
      } else if (entryheight >= 750) {
        return settextHeight({
          height: entryheight,
          project: "project-description-high ",
          mainInfo:
            "main-info-text leading-7 pb-20 text-xl md:text-2xl leading-8 ",
          mainImage: "image-visible h-72",
        });
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    if (ismainVisible) {
      return checkHeight(entryMain);
    }
    if (isVisible) {
      return checkHeight(entry);
    }
    if (isVisible2) {
      return checkHeight(entry2);
    }
    if (isVisible3) {
      return checkHeight(entry3);
    }
    if (isVisible4) {
      return checkHeight(entry4);
    }
  }, [isVisible, isVisible2, isVisible3, isVisible4, ismainVisible]);

  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    return (
      <div className="main-page-container">
        <div className="welcome-container" ref={mainRef}>
          <MainProfileImage />
          <MainProfileInfo textHeight={textHeight} />
        </div>
        {/* --------------------------- project 1 -------------------------- */}
        <div
          className={
            isVisible && !ismainVisible
              ? "project-container h-screen 2xl:h-5/6 "
              : "project-container h-96"
          }
        >
          <div className="pb-line-cont-main">
            <h2 className="hidden sm:block animate-pulse">My projects</h2>
            <LeftLine />
          </div>
          <div className="project-content">
            <div className="project-content-inside">
              <div className="project-info-outer">
                <div
                  className={
                    isVisible && !ismainVisible
                      ? textHeight.mainImage
                      : "image-invisible"
                  }
                  ref={myRef}
                >
                  <StaticImage
                    src="../../src/images/bayarplanner_monitor.jpg"
                    alt="bayarplanner_monitor"
                    layout="constrained"
                    placeholder="dominantColor"
                    loading="lazy"
                    objectFit="contain"
                    className="h-full"
                  />
                </div>

                <MainProjectInfo
                  textHeight={textHeight}
                  project={projects[0]}
                  logo={portfolioImages["bayarplanner"].logo!}
                  visibility={isVisible && !ismainVisible}
                />
              </div>
            </div>
          </div>
          <StraightLine />
        </div>
        {/* --------------------------- project 2-------------------------- */}
        <div
          className={
            isVisible2 && !isVisible
              ? "project-container h-screen 2xl:h-4/6 "
              : "project-container "
          }
        >
          <StraightLine />
          <div className="project-content">
            <div className="project-content-inside">
              <div className="project-info-outer">
                <div
                  className={
                    isVisible2 && !isVisible
                      ? "image-visible sm:order-3"
                      : "image-invisible sm:order-3 "
                  }
                  ref={myRef2}
                >
                  <StaticImage
                    src="../../src/images/sudahnonton_monitor.jpg"
                    alt="sudahnonton_monitor"
                    layout="constrained"
                    placeholder="dominantColor"
                    loading="lazy"
                    objectFit="contain"
                    className="h-full"
                  />
                </div>
                <MainProjectInfo
                  textHeight={textHeight}
                  project={projects[1]}
                  logo={portfolioImages["sudahnonton"].logo!}
                  visibility={isVisible2 && !isVisible}
                />
              </div>
            </div>
          </div>
          <StraightLine />
        </div>
        {/* --------------------------- project 3-------------------------- */}
        <div
          className={
            isVisible3 && !isVisible2
              ? "project-container h-screen 2xl:h-4/6 "
              : "project-container "
          }
        >
          <StraightLine />
          <div className="project-content">
            <div className="project-content-inside ">
              <div className="project-info-outer">
                <div
                  className={
                    isVisible3 && !isVisible2
                      ? "image-visible"
                      : "image-invisible "
                  }
                  ref={myRef3}
                >
                  <StaticImage
                    src="../../src/images/rs-uripsumoharjo_monitor.jpg"
                    alt="rs-uripsumoharjo_monitor"
                    layout="constrained"
                    placeholder="dominantColor"
                    loading="lazy"
                    objectFit="contain"
                    className="h-full"
                  />
                </div>

                <MainProjectInfo
                  textHeight={textHeight}
                  project={projects[2]}
                  logo={portfolioImages["rs-uripsumoharjo"].logo!}
                  visibility={isVisible3 && !isVisible2}
                />
              </div>
            </div>
          </div>
          <StraightLine />
        </div>
        {/* --------------------------- project 4-------------------------- */}
        <div
          className={
            isVisible4 && !isVisible3
              ? "project-container h-screen 2xl:h-4/6 "
              : "project-container "
          }
        >
          <StraightLine />
          <div className="project-content">
            <div className="project-content-inside">
              <div className="project-info-outer">
                <div
                  className={
                    isVisible4 && !isVisible3
                      ? "image-visible sm:order-3"
                      : "image-invisible sm:order-3 "
                  }
                  ref={myRef4}
                >
                  <StaticImage
                    src="../../src/images/azriclone_monitor.jpg"
                    alt="azriclone_monitor"
                    layout="constrained"
                    placeholder="dominantColor"
                    loading="lazy"
                    objectFit="contain"
                    className="h-full"
                  />
                </div>
                <MainProjectInfo
                  textHeight={textHeight}
                  project={projects[3]}
                  logo={portfolioImages["azriclone"].logo!}
                  visibility={isVisible4 && !isVisible3}
                />
              </div>
            </div>
          </div>
          <RightLine />
        </div>

        <div className="h-20 sm:h-40 md:h-44 2xl:h-full w-full "></div>
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
