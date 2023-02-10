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

type Props = {};
const options = {
  root: null,
  rootMargin: "0% 0px 0% 0px",
  threshold: 0.5,
};
const Home = (props: Props) => {
  const {
    state: { portfolioImages },
  } = useGlobalContext();
  // const myRef: any = useRef(null);
  const { ref: mainRef, inView: ismainVisible } = useInView({
    root: null,
    rootMargin: "0% 0px 0% 0px",
    threshold: 0.5,
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
          <div className="main-page-image-container">
            <div className="main-page-image">
              <StaticImage
                src="../../src/images/profile_pic.jpg"
                alt="background"
                layout="constrained"
                placeholder="dominantColor"
                loading="lazy"
                objectFit="cover"
                className="h-full object-cover "
              />
            </div>
          </div>
          <div className="main-page-text animate-mainImageX">
            <h2 className="text-right">Hello, I'm Riza Hariati </h2>{" "}
            <h2 className="text-right text-accent">(依扎 / Icha)</h2>
            <h3 className="leading-6 sm:leading-8">
              Whether it's for personal purpose or for small business, it will
              be my pleasure to create interesting reliable websites and apps
              that reflect your goals and personality.
            </h3>
          </div>
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
            <div className="flex flex-col h-full w-full">
              <div className="w-full h-full">
                <h2 className=" flex justify-center items-center animate-pulse h-full sm:hidden">
                  My projects
                </h2>
              </div>
              <div className="w-full h-full rounded-tr-lg border-t-4 border-r-4 border-textLit"></div>
            </div>
          </div>
          <div className="project-content-closed">
            <div className="project-content-inside px-2 md:gap-20">
              <div className="flex flex-col sm:flex-row w-full h-full justify-start items-start">
                <div
                  className={
                    isVisible && !ismainVisible
                      ? "h-48 sm:h-80 2xl:h-96 sm:w-full transition-all"
                      : " w-full h-48  transition-all"
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
                <div className="h-3/5 sm:h-full w-full bg-slate-300 bg-opacity-20 p-3 mt-auto "></div>
              </div>
            </div>
          </div>
          <div className="pb-line-cont">
            <div className="pb-line "></div>
          </div>
        </div>
        {/* --------------------------- project 2-------------------------- */}
        <div
          className={
            isVisible2 && !isVisible
              ? "project-container h-5/6 2xl:h-4/6 "
              : "project-container "
          }
        >
          <div className="pb-line-cont">
            <div className="pb-line "></div>
          </div>
          <div className="project-content-closed">
            <div className="project-content-inside">
              <div className="flex flex-col sm:flex-row w-full h-full justify-start items-start">
                <div className="h-3/5 sm:h-full w-full bg-slate-300 bg-opacity-20 order-2 "></div>
                <div
                  className={
                    isVisible2 && !isVisible
                      ? "h-48 sm:h-80 2xl:h-96 sm:w-full transition-all  order-1 sm:order-3"
                      : " w-full h-48  transition-all  order-1 sm:order-3"
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
          <div className="pb-line-cont">
            <div className="pb-line"></div>
          </div>
        </div>{" "}
        {/* --------------------------- project 3-------------------------- */}
        <div
          className={
            isVisible3 && !isVisible2
              ? "project-container h-5/6 2xl:h-4/6 "
              : "project-container "
          }
        >
          <div className="pb-line-cont">
            <div className="pb-line "></div>
          </div>
          <div className="project-content-closed">
            <div className="project-content-inside">
              <div className="flex flex-col sm:flex-row w-full h-full justify-start items-start">
                <div
                  className={
                    isVisible3 && !isVisible2
                      ? "h-48 sm:h-80 2xl:h-96 sm:w-full transition-all"
                      : " w-full h-48  transition-all"
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
                <div className="h-3/5 sm:h-full w-full bg-slate-300 bg-opacity-20  "></div>
              </div>
            </div>
          </div>
          <div className="pb-line-cont">
            <div className="pb-line"></div>
          </div>
        </div>
        {/* --------------------------- project 4-------------------------- */}
        <div
          className={
            isVisible4 && !isVisible3
              ? "project-container h-5/6 2xl:h-4/6 "
              : "project-container "
          }
        >
          <div className="pb-line-cont">
            <div className="pb-line "></div>
          </div>
          <div className="project-content-closed">
            <div className="project-content-inside">
              <div className="flex flex-col sm:flex-row w-full h-full justify-start items-start">
                <div className="h-3/5 sm:h-full w-full bg-slate-300 bg-opacity-20  order-2"></div>
                <div
                  className={
                    isVisible4 && !isVisible3
                      ? "h-48 sm:h-80 2xl:h-96 sm:w-full transition-all order-1  sm:order-3"
                      : " w-full h-48  transition-all order-1 sm:order-3"
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
          <div className="pb-line-cont"></div>
        </div>
        <div className="h-96 w-full"></div>
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
