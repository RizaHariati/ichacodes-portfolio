import React from "react";
import MainImageInfo from "../homeComponents/MainImageInfo";
import MainProjectInfo from "../homeComponents/MainProjectInfo";
import { LongStraightLine } from "../homeComponents/MainProjectItem";
import { PortfolioImageType, ProjectType } from "../../context/types.d";
import { projects } from "../../data/data";
import { ShortStraightLine } from "../homeComponents/MainProjectItem";

type Props = {
  project: ProjectType;
  portfolioImage: PortfolioImageType;
};

const ProjectContent = ({ project, portfolioImage }: Props) => {
  const evenOdd = project.index % 2 === 0 ? "odd" : "even";
  return (
    <>
      <ShortStraightLine />
      <div className="project-content z-20">
        <MainImageInfo
          imageName={project.slug}
          evenOdd={evenOdd}
          portfolioImage={portfolioImage}
        />
        <MainProjectInfo
          evenOdd={evenOdd}
          portfolioImage={portfolioImage}
          project={project}
        />
      </div>
      {project.index !== projects.length - 1 && <LongStraightLine />}
    </>
  );
};

export default ProjectContent;
