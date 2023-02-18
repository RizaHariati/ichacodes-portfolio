import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { ProjectType } from "../../context/types.d";
import { TextHeightType } from "./Home";
import MainImageInfo from "./MainImageInfo";
import MainProjectInfo from "./MainProjectInfo";

type Props = {
  visibility: boolean;
  imageCSS: string;
  imageName: string;
  project: ProjectType;
  logo: IGatsbyImageData;
  textHeight: TextHeightType;
  evenOdd: "even" | "odd";
};

const MainProjectItem = ({
  visibility,
  imageCSS,
  imageName,
  evenOdd,
  project,
  logo,
  textHeight,
}: Props) => {
  return (
    <div className="project-content-inside">
      <div className="project-info-outer overflow-hidden">
        <MainImageInfo
          visibility={visibility}
          imageCSS={imageCSS}
          imageName={imageName}
          evenOdd={evenOdd}
        />

        <MainProjectInfo
          textHeight={textHeight}
          project={project}
          logo={logo}
          visibility={visibility}
          evenOdd={evenOdd}
        />
      </div>
    </div>
  );
};

export default MainProjectItem;

type LineProps = {};
export const StraightLine = (props: LineProps) => {
  return (
    <div className="pb-line-cont">
      <div className="pb-line"></div>
    </div>
  );
};

export const LeftLine = (props: LineProps) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="w-full h-full">
        <h2 className=" flex justify-center items-center animate-pulse h-full sm:hidden">
          My projects
        </h2>
      </div>
      <div className="w-full h-full rounded-tr-lg border-t-4 border-r-4 border-textLit"></div>
    </div>
  );
};

export const RightLine = (props: LineProps) => {
  return (
    <div className="pb-line-cont-main  ">
      <div className=" col-start-2 sm:col-start-3 col-span-1 h-full w-full z-20 ">
        <div className="h-1/2 w-full  rounded-bl-lg border-b-4 border-l-4 border-textLit"></div>
        <div className="block sm:hidden text-right text-sm mt-2">
          copyright Ichacodes &copy;{new Date().getFullYear()}
        </div>
      </div>
      <div className="hidden sm:block text-right text-sm mt-2">
        copyright Ichacodes &copy;{new Date().getFullYear()}
      </div>
    </div>
  );
};
