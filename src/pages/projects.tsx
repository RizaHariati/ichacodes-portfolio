import React, { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "../context/AppProvider";
import { SEO } from "../components/seo/seo";
import "../styles/projectpage.css";
import ProjectBase from "../components/projectComponents/ProjectBase";
import ProjectFrame from "../components/projectComponents/ProjectFrame";

import { projects } from "../data/data";
import ProjectContent from "../components/projectComponents/ProjectContent";

const Projects = ({ pageContext: { project } }: any) => {
  // page context didapat dari gatsby-none

  const {
    handleScroll,
    state: { scrollingUp, portfolioImages, oldIndexNumber },
  } = useGlobalContext();
  const ref: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
  useEffect(() => {
    if (!scrollingUp) {
    }
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 600);
  }, []);

  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    return (
      <div
        className="h-screen w-full overflow-y-scroll scroll-auto"
        onScroll={(e) => {
          handleScroll(e, project.index);
        }}
      >
        {/* --------- don't delete this. This is for the scrolling --------- */}
        <div
          className={
            (oldIndexNumber ? oldIndexNumber : project.index) <= project.index
              ? "project-base-container animate-projectExit  "
              : "project-base-container animate-projectEnter "
          }
        >
          <ProjectBase>
            <ProjectFrame indexNumber={project.index}>
              <div
                className={
                  project.index !== projects.length - 1
                    ? "project-container z-20"
                    : "project-container-short  z-20"
                }
                ref={ref}
              >
                <ProjectContent
                  project={project}
                  portfolioImage={portfolioImages[project.slug]}
                />
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
