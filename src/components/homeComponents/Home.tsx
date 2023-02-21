import React, { useState, useCallback, useRef } from "react";
import { useGlobalContext } from "../../context/AppProvider";
import { projects } from "../../data/data";
import { IntersectionOptions } from "react-intersection-observer";
import MainProfileImage from "./MainProfileImage";
import MainProfileInfo from "./MainProfileInfo";
import { useEffect } from "react";
import { getHeightCSS } from "../../utils/getHeightCSS";
import MainProjectItem, {
  LeftLine,
  RightLine,
  StraightLine,
} from "./MainProjectItem";
import { ProjectType } from "../../context/types.d";

type Props = {};
type VisibilityKeyType = { [key: string]: { visibility: boolean } };

export type TextHeightType = {
  height: number;
  project: string;
  mainInfo: string;
  mainImage: string;
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
  const [visibilities, setVisibilities] = useState<VisibilityKeyType>({
    welcome: { visibility: true },
    bayarplanner: { visibility: false },
    sudahnonton: { visibility: false },
    "rs-uripsumoharjo": { visibility: false },
    azriclone: { visibility: false },
  });

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
    let observerOptions: IntersectionOptions = {
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = function (entries: IntersectionObserverEntry[]) {
      entries.forEach((item: IntersectionObserverEntry) => {
        let newVisibility: VisibilityKeyType = visibilities;

        if (item.isIntersecting) {
          newVisibility[item.target.id] = { visibility: true };
        } else {
          newVisibility[item.target.id] = { visibility: false };
        }

        setVisibilities({ ...newVisibility });
      });
    };
    var observer = new IntersectionObserver(observerCallback, observerOptions);
    Array.from(ref.current!.children).forEach((item) => {
      observer.observe(item);

      // return observer.unobserve(item);
    });
  }, []);

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
        style={{ scrollBehavior: "smooth" }}
        ref={ref}
        className="main-page-container"
        onScroll={(e) => {
          handleScroll(e);
        }}
      >
        <div className="welcome-container" id="welcome">
          <MainProfileImage />
          <MainProfileInfo textHeight={textHeight} />
        </div>
        {/* --------------------------- project 1 -------------------------- */}
        {projects.map((item: ProjectType, index: number) => {
          const { slug, id } = item;
          if (index === 0) {
            return (
              <div
                id={slug}
                key={id}
                className={
                  visibilities[slug].visibility &&
                  !visibilities["welcome"].visibility
                    ? "project-container-visible 2xl:h-5/6 "
                    : "project-container "
                }
              >
                <div className="pb-line-cont-main">
                  <h2 className="hidden sm:block animate-pulse">My projects</h2>
                  <LeftLine />
                </div>
                <div className="project-content">
                  <MainProjectItem
                    visibility={
                      visibilities[slug].visibility &&
                      !visibilities["welcome"].visibility
                    }
                    imageCSS={textHeight.mainImage}
                    imageName={`${slug}_monitor`}
                    evenOdd={index % 2 === 0 ? "odd" : "even"}
                    textHeight={textHeight}
                    project={item}
                    logo={portfolioImages[slug].logo!}
                  />
                </div>
                <StraightLine />
              </div>
            );
          } else if (index == 3) {
            return (
              <div
                id={slug}
                key={id}
                className={
                  visibilities[slug].visibility
                    ? "project-container-visible 2xl:h-5/6 "
                    : "project-container "
                }
              >
                <StraightLine />
                <div className="project-content">
                  <MainProjectItem
                    visibility={visibilities[slug].visibility}
                    imageCSS={textHeight.mainImage}
                    imageName={`${slug}_monitor`}
                    evenOdd={index % 2 === 0 ? "odd" : "even"}
                    textHeight={textHeight}
                    project={item}
                    logo={portfolioImages[slug].logo!}
                  />
                </div>
                <RightLine />
              </div>
            );
          } else {
            return (
              <div
                id={slug}
                key={id}
                className={
                  visibilities[slug].visibility
                    ? "project-container-visible "
                    : "project-container "
                }
              >
                <StraightLine />
                <div className="project-content">
                  <MainProjectItem
                    visibility={visibilities[slug].visibility}
                    imageCSS={textHeight.mainImage}
                    imageName={`${slug}_monitor`}
                    evenOdd={index % 2 === 0 ? "odd" : "even"}
                    textHeight={textHeight}
                    project={item}
                    logo={portfolioImages[slug].logo!}
                  />
                </div>
                <StraightLine />
              </div>
            );
          }
        })}

        <div className="h-10 sm:w-20 md:h-32 lg:h-40 2xl:h-52 w-full "></div>
      </div>
    );
  }
};

export default Home;
