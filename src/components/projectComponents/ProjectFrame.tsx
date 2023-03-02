import React from "react";
import { projects } from "../../data/data";
import {
  LeftLine2,
  RightLine,
  StraightLine,
} from "../homeComponents/MainProjectItem";

type Props = {
  children: React.ReactNode;
  indexNumber: number;
};

const ProjectFrame = ({ children, indexNumber }: Props) => {
  if (indexNumber === 0) {
    return (
      <div className="bg-fillDrk">
        <div className="pb-line-cont-main">
          <h2 className="hidden sm:block animate-pulse">My projects</h2>
          <LeftLine2 />
        </div>
        {children}
        <StraightLine />
      </div>
    );
  } else if (indexNumber === projects.length - 1) {
    return (
      <div className="bg-fillDrk">
        <StraightLine />
        {children}
        <RightLine />
      </div>
    );
  } else {
    return (
      <div className="bg-fillDrk">
        <StraightLine />
        {children}
        <StraightLine />
      </div>
    );
  }
};

export default ProjectFrame;
