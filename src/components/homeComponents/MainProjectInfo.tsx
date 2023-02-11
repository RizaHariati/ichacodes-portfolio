import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ProjectType } from "../../context/types.d";

type Props = {
  project: ProjectType;
  logo: IGatsbyImageData;
  visibility: boolean;
};

const MainProjectInfo = ({ project, logo, visibility }: Props) => {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div
        className={
          visibility
            ? "slide-title-container  animate-mainImageX"
            : "slide-title-container"
        }
      >
        <h2
          className={
            visibility
              ? "text-right w-full mb-4 border-b-4 border-b-textLit"
              : "text-right w-full mb-4 sm:border-b-4 sm:border-b-textLit"
          }
        >
          {project.title}
        </h2>
        <div className="slide-logo ">
          <GatsbyImage
            image={logo!}
            className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 "
            objectFit="fill"
            objectPosition="center"
            alt={project.title}
          />
        </div>
      </div>
      <div className={visibility ? "flex flex-col w-full" : "hidden "}>
        <div>
          <div className="project-info">
            <div className="project-description">
              {project.description.map(
                (projectItem: string, projectIndex: number) => {
                  return <p key={projectIndex}>{projectItem}</p>;
                }
              )}
            </div>

            <p>
              <span className="border border-accent rounded-sm px-1 w-48 mr-2">
                Main Program&nbsp;
              </span>
              : {project.mainProgram}
            </p>
            <p>
              <span className="border border-accent rounded-sm px-1 w-48 mr-2">
                Dependencies&nbsp;
              </span>
              &nbsp;:&nbsp;
              {project.dependencies.toString()}
            </p>
          </div>
        </div>
        <a
          href={project.url}
          className={`standard-btn p-1 my-2 ${
            project.title.toLowerCase() === "sudahnonton" ||
            project.title.toLowerCase() === "azriclone"
              ? "ml-auto"
              : "mr-auto"
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
