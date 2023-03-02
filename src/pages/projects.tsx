import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/AppProvider";
import { SEO } from "../components/seo/seo";
import "../styles/projectpage.css";
import ProjectBase from "../components/projectComponents/ProjectBase";
import ProjectFrame from "../components/projectComponents/ProjectFrame";
import MainImageInfo from "../components/homeComponents/MainImageInfo";
import MainProjectInfo from "../components/homeComponents/MainProjectInfo";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { StraightLine } from "../components/homeComponents/MainProjectItem";
import { projects } from "../data/data";

const Projects = ({ pageContext: { project } }: any) => {
  // page context didapat dari gatsby-none

  const {
    textHeight,
    handleScroll,
    state: { portfolioImages },
  } = useGlobalContext();
  let observerOptions: IntersectionOptions = {
    rootMargin: "0px",
    threshold: 1,
  };
  const ref: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ inline: "end", behavior: "smooth" });
  }, []);

  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    const evenOdd = project.index % 2 === 0 ? "odd" : "even";
    return (
      <div
        className="h-screen w-full overflow-y-scroll scroll-auto"
        onScroll={(e) => {
          handleScroll(e, project.index);
        }}
      >
        {/* --------- don't delete this. This is for the scrolling --------- */}
        <div className="h-fit w-full ">
          <ProjectBase>
            <ProjectFrame indexNumber={project.index}>
              <div
                className={
                  project.index !== projects.length - 1
                    ? "project-container"
                    : "project-container-short"
                }
                ref={ref}
              >
                <StraightLine />
                <div className="project-content">
                  <MainImageInfo
                    imageName={project.slug}
                    evenOdd={evenOdd}
                    portfolioImage={portfolioImages[project.slug]}
                  />
                  <MainProjectInfo
                    evenOdd={evenOdd}
                    portfolioImage={portfolioImages[project.slug]}
                    project={project}
                  />
                </div>
                {project.index !== projects.length - 1 && <StraightLine />}
              </div>
            </ProjectFrame>
          </ProjectBase>
        </div>
      </div>
    );
  }
};

export default Projects;

export const Head = ({ pageContext: { project } }: any) => {
  return (
    <SEO
      title={project?.title || "BayarPlanner"}
      description={
        project?.description[0] ||
        "BayarPlanner is a website that schedules and records daily financial transactions, also calculates data to create simple invoices"
      }
    >
      <link id="icon" rel="icon" href="/src/images/icon.png" />
    </SEO>
  );
};
