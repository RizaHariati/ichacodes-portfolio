import path from "path";
import { projects } from "./src/data/data";

export const createPages = ({ actions }: any) => {
  const { createPage } = actions;
  projects.map((project) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve("./src/pages/projects.tsx"),
      context: { project },
    });
  });
};
