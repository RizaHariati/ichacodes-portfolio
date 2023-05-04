import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
import { PortfolioImageType, ProjectType } from "../../context/types.d";

type Props = {
  project: ProjectType;
  portfolioImage: PortfolioImageType;
  evenOdd: "even" | "odd";
};

const MainProjectInfo = ({ project, portfolioImage, evenOdd }: Props) => {
  const {
    textHeight,
    state: { oldIndexNumber },
  } = useGlobalContext();

  return (
    <div
      className={
        (oldIndexNumber ? oldIndexNumber : project.index) <= project.index
          ? "slide-container animate-projectExit"
          : "slide-container animate-projectEnter"
      }
    >
      <div
        className={`flex flex-row gap-2 sm:gap-4 w-full ${
          evenOdd === "odd" ? "sm:pr-8 md:pr-14" : "sm:pl-8 md:pl-14"
        }`}
      >
        <h2
          className={
            evenOdd === "odd"
              ? "main-title-text order-3 text-left"
              : "main-title-text"
          }
        >
          {project.title}
        </h2>
        <div className="slide-logo ">
          <GatsbyImage
            image={portfolioImage.logo!}
            alt={project.title}
            objectFit="cover"
            className="h-full "
          />
        </div>
      </div>
      <div className="project-info-container h-fit">
        <div className={textHeight.project}>
          {project.description.map(
            (projectItem: string, projectIndex: number) => {
              return <p key={projectIndex}>{projectItem}</p>;
            }
          )}
        </div>
        <div className="info-detail">
          <p className="box-text">Main Program</p>
          <p className=" text-textLit leading-4"> {project.mainProgram}</p>
        </div>
        <div className="info-detail">
          <p className=" box-text">Dependencies</p>
          <p className=" text-textLit leading-4 ">
            {project.dependencies.toString()}
          </p>
        </div>

        <a
          href={project.url}
          className={`standard-btn p-1 mb-2 ${
            evenOdd === "odd" ? "mr-auto" : "ml-auto"
          }`}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          Visit website
        </a>
      </div>
    </div>
  );
};

export default MainProjectInfo;
