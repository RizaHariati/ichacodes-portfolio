import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/AppProvider";
import { ProjectType } from "../context/types.d";
import { aboutData, projects } from "../data/data";
import SlideInfo from "./homeComponents/SlideInfo";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import MainProfileImage from "./homeComponents/MainProfileImage";
import MainProfileInfo from "./homeComponents/MainProfileInfo";

type Props = {};
const options = {
  root: null,
  rootMargin: "0% 0px 0% 0px",
  threshold: 0.2,
};
const Home = (props: Props) => {
  const {
    state: { portfolioImages },
  } = useGlobalContext();
  // const myRef: any = useRef(null);
  const { ref: mainRef, inView: ismainVisible } = useInView({
    root: null,
    rootMargin: "0% 0px 0% 0px",
    threshold: 0.2,
  });
  const { ref: myRef, inView: isVisible } = useInView(options);
  const { ref: myRef2, inView: isVisible2 } = useInView(options);
  const { ref: myRef3, inView: isVisible3 } = useInView(options);
  const { ref: myRef4, inView: isVisible4 } = useInView(options);
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
          <MainProfileInfo />
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
            <h2 className="hidden sm:block">My projects</h2>
            <LeftLine />
          </div>
          <div className="project-content">
            <div className="project-content-inside">
              <div className="flex flex-col sm:flex-row w-full h-full justify-start items-start">
                <div
                  className={
                    isVisible && !ismainVisible
                      ? "image-visible"
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
                <div className="project-info-container "></div>
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
              <div className="flex flex-col sm:flex-row w-full h-full justify-start items-start">
                <div className="project-info-container"></div>
                <div
                  className={
                    isVisible2 && !isVisible
                      ? "image-visible order-1 sm:order-3"
                      : "image-invisible order-1 sm:order-3"
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
              <div className="flex flex-col sm:flex-row w-full h-full justify-start items-start">
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
                <div className="project-info-container"></div>
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
              <div className="flex flex-col sm:flex-row w-full h-full justify-start items-start">
                <div className="project-info-container"></div>
                <div
                  className={
                    isVisible4 && !isVisible3
                      ? "image-visible  order-1  sm:order-3"
                      : "image-invisible order-1 sm:order-3"
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
              </div>
            </div>
          </div>
        </div>
        <RightLine />
        <div className="h-96 w-full "></div>
      </div>
    );
  }
};

export default Home;

// <div className="main-tagline">
//         <h2 className="tagline">
//           Connecting your Business goals to your website design and
//           application
//         </h2>
//       </div>
//       <div className="slides-container">
//         {projects.map((project: ProjectType) => {
//           const { id, title, description, slug, mainProgram, url } = project;
//           const image = portfolioImages[slug];
//           return (
//             <div className=" slides" key={id}>
//               <div className="slides-content group">
//                 <div className="slide-website hidden sm:block ">
//                   <GatsbyImage
//                     image={image.long!}
//                     objectFit="fill"
//                     className=" h-52 2xl:h-72"
//                     objectPosition="center"
//                     alt={title}
//                     loading="eager"
//                   />
//                 </div>
//                 <div className="slide-website block sm:hidden ">
//                   <GatsbyImage
//                     image={image.short!}
//                     objectFit="fill"
//                     className=" h-52 2xl:h-72 "
//                     objectPosition="center"
//                     alt={title}
//                   />
//                 </div>
//                 <SlideInfo
//                   imageData={image.subphone!}
//                   title={title}
//                   description={description}
//                   mainProgram={mainProgram}
//                   url={url}
//                   slug={slug}
//                 />
//               </div>
//               <div className=" slide-title-container">
//                 <div className="slide-logo  ">
//                   <GatsbyImage
//                     image={image.logo!}
//                     className="w-5 h-5 2xl:w-8 2xl:h-8 "
//                     objectFit="fill"
//                     objectPosition="center"
//                     alt={title}
//                   />
//                 </div>
//                 <h5 className="font-semibold text-base 2xl:text-2xl">
//                   {title}
//                 </h5>
//               </div>
//             </div>
//           );
//         })}
//       </div>

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
    <div className="pb-line-cont-main ">
      <div className=" col-start-2 md:col-start-3 col-span-1 h-full w-full z-20 ">
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
