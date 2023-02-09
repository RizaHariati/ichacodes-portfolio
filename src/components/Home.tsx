import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/AppProvider";
import { ProjectType } from "../context/types.d";
import { aboutData, projects } from "../data/data";
import SlideInfo from "./homeComponents/SlideInfo";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const Home = (props: Props) => {
  const {
    state: { portfolioImages },
  } = useGlobalContext();
  // const myRef: any = useRef(null);
  const { ref: myRef, inView: isVisible } = useInView({
    root: null,
    rootMargin: "0px 0px -50% 0px",
    threshold: 0.1,
  });

  const { ref: myRef2, inView: isVisible2 } = useInView({
    root: null,
    rootMargin: "0px 0px -50% 0px",
    threshold: 0.2,
  });
  const { ref: myRef3, inView: isVisible3 } = useInView({
    root: null,
    rootMargin: "0px 0px -50% 0px",
    threshold: 0.1,
  });
  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    return (
      <div className="main-page-container">
        <div className="welcome-container">
          <div className="h-fit md:h-full w-fit md:w-full col-span-1 md:col-span-2">
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
          <div className="main-page-text">
            <h2 className="text-right">Hello, I'm Riza Hariati </h2>{" "}
            <h2 className="text-right">(依扎 / Icha)</h2>
            <h3>
              Whether it's for personal purpose or for small business, I would
              love to build interesting reliable websites and apps that reflect
              your goals and personality.
            </h3>
            <h3>It will be my pleasure to create them for you.</h3>
          </div>
        </div>
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
