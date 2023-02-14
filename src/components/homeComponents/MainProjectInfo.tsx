import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ProjectType } from "../../context/types.d";
import { TextHeightType } from "../Home";

type Props = {
  project: ProjectType;
  logo: IGatsbyImageData;
  visibility: boolean;
  textHeight: TextHeightType;
};

const MainProjectInfo = ({ project, logo, visibility, textHeight }: Props) => {
  return (
    <div
      className={
        visibility
          ? `slide-container  ${
              project.title.toLowerCase() === "sudahnonton" ||
              project.title.toLowerCase() === "azriclone"
                ? "sm:animate-mainImageX sm:order-1"
                : "sm:animate-mainImageXMin"
            }`
          : "slide-container"
      }
    >
      <div className="flex flex-row gap-2">
        <h2
          className={
            visibility
              ? "text-right w-full  border-b-4 border-b-textLit"
              : "text-right w-full sm:border-b-4 sm:border-b-textLit"
          }
        >
          {project.title}
        </h2>
        <div className="slide-logo ">
          <GatsbyImage image={logo!} alt={project.title} />
        </div>
      </div>
      <div
        className={
          visibility
            ? "project-info-container h-fit"
            : "project-info-container h-0"
        }
      >
        <div className={textHeight.project}>
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
