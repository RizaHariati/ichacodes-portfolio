import path from "path";
import { projects } from "./src/data/data";

export const createPages = ({ actions }: any) => {
  const { createPage } = actions;
  createPage({
    path: `/projects`,
    component: path.resolve("./src/pages/projects.tsx"),
    context: { project: projects[0] },
  });

  projects.map((project) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve("./src/pages/projects.tsx"),
      context: { project },
    });
  });
};
