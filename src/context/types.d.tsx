import { IGatsbyImageData } from "gatsby-plugin-image";

export type ProjectType = {
  id: string;
  url: string;
  title: string;
  slug: string;
  description: string[];
  mainProgram: string;
  dependencies: string;
};

export type ImageType = {
  gatsbyImageData: any;
  original: { src: string };
};

export type PortfolioImageType = {
  long?: IGatsbyImageData;
  short?: IGatsbyImageData;
  mainphone?: IGatsbyImageData;
  logo?: IGatsbyImageData;
  subphone?: IGatsbyImageData;
  subpage?: IGatsbyImageData;
};
export type AllImageType = {
  iconImage?: IGatsbyImageData;
  iconLink?: IGatsbyImageData;
  profilePicSmall?: IGatsbyImageData;
};

export type PortfolioType = {
  [key: string]: PortfolioImageType;
};

export type ShowModalType = {
  status: boolean;
  type: string;
  value: IGatsbyImageData[];
};
