import { graphql, useStaticQuery } from "gatsby";
import React, { useContext, useReducer } from "react";
import { appReducer } from "../reducer/AppReducer";
import { AppContext } from "./AppContext";
import { initialState } from "./initialstate";
import { useEffect } from "react";
import { projects } from "../data/data";
import { ImageType, ProjectType, PortfolioType, AllImageType } from "./types.d";
import { getImage } from "gatsby-plugin-image";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const result = graphql`
  query MyQuery {
    allImageSharp {
      nodes {
        gatsbyImageData(height: 400, placeholder: DOMINANT_COLOR)
        original {
          src
        }
      }
    }
  }
`;

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(result);

  useEffect(() => {
    if (
      !state.allImages ||
      (state.allImages && Object.keys(state.allImages).length < 1)
    ) {
      let portfolioImages: PortfolioType = {};
      let allImages: AllImageType = {};
      projects.map((project: ProjectType) => {
        const { slug } = project;

        nodes.map((image: ImageType) => {
          if (image.original.src.includes(slug)) {
            if (image.original.src.includes("long")) {
              portfolioImages[slug] = {
                ...portfolioImages[slug],
                long: getImage(image.gatsbyImageData),
              };
            } else if (image.original.src.includes("short")) {
              portfolioImages[slug] = {
                ...portfolioImages[slug],
                short: getImage(image.gatsbyImageData),
              };
            } else if (image.original.src.includes("mainphone")) {
              portfolioImages[slug] = {
                ...portfolioImages[slug],
                mainphone: getImage(image.gatsbyImageData),
              };
            } else if (image.original.src.includes("logo")) {
              portfolioImages[slug] = {
                ...portfolioImages[slug],
                logo: getImage(image.gatsbyImageData),
              };
            } else if (image.original.src.includes("subphone")) {
              portfolioImages[slug] = {
                ...portfolioImages[slug],
                subphone: getImage(image.gatsbyImageData),
              };
            } else if (image.original.src.includes("subpage")) {
              portfolioImages[slug] = {
                ...portfolioImages[slug],
                subpage: getImage(image.gatsbyImageData),
              };
            }
          } else if (image.original.src.includes("profileIcon")) {
            allImages["iconImage"] = getImage(image.gatsbyImageData);
          } else if (image.original.src.includes("icon192")) {
            allImages["iconLink"] = getImage(image.gatsbyImageData);
          } else if (image.original.src.includes("profilePicSmall")) {
            allImages["profilePicSmall"] = getImage(image.gatsbyImageData);
          }
          return "";
        });
      });

     
        dispatch({
          type: "SET_ALL_IMAGES",
          payload: { allImages, portfolioImages },
        });
   
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    state,
    dispatch,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
