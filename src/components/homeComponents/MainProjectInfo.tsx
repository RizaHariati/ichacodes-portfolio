import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ProjectType } from "../../context/types.d";
import { TextHeightType } from "./Home";

type Props = {
  project: ProjectType;
  logo: IGatsbyImageData;
  visibility: boolean;
  textHeight: TextHeightType;
  evenOdd: "even" | "odd";
};

const MainProjectInfo = ({
  project,
  logo,
  visibility,
  textHeight,
  evenOdd,
}: Props) => {
  return (
    <div
      className={
        visibility
          ? `slide-container animate-mainImage  ${
              evenOdd === "odd"
                ? " sm:animate-mainImageYMin"
                : " sm:animate-mainImageYMin order-3"
            }`
          : "slide-container  max-w-full"
      }
    >
      <div
        className={`flex flex-row gap-2 sm:gap-4 w-full ${
          !visibility
            ? evenOdd === "odd"
              ? "sm:pr-8 md:pr-14"
              : "sm:pl-8 md:pl-14"
            : "pl-3 pr-3  sm:pl-4 sm:pr-4 "
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
            image={logo!}
            alt={project.title}
            objectFit="cover"
            className="h-full "
          />
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
        <div className="info-detail">
          <p className="box-text">Main Program</p>
          <p className=" text-textDrk"> {project.mainProgram}</p>
        </div>
        <div className="info-detail">
          <p className=" box-text">Dependencies</p>
          <p className=" text-textDrk">{project.dependencies.toString()}</p>
        </div>

        <a
          href={project.url}
          className={`standard-btn p-1 my-2 ${
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
