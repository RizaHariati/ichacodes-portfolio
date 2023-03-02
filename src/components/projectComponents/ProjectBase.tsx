import React from "react";
import { ProjectType } from "../../context/types.d";
import Modal from "../modalComponents/Modal";

type Props = {
  children: React.ReactNode;
};

const ProjectBase = ({ children }: Props) => {
  return (
    <div className="project-layout">
      <Modal />

      {children}
    </div>
  );
};

export default ProjectBase;
