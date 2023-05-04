import { graphql, useStaticQuery, navigate } from "gatsby";
import React, { useContext, useReducer, useState, useCallback } from "react";
import { appReducer } from "../reducer/AppReducer";
import { AppContext } from "./AppContext";
import { initialState } from "./initialstate";
import { useEffect } from "react";
import { projects } from "../data/data";
import { ImageType, ProjectType, PortfolioType, AllImageType } from "./types.d";
import { getImage } from "gatsby-plugin-image";

import { TextHeightType } from "../components/homeComponents/Home";
import { getHeightCSS } from "../utils/getHeightCSS";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const result = graphql`
  query MyQuery {
    allImageSharp {
      nodes {
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          quality: 72
        )
        original {
          src
        }
      }
    }
  }
`;

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [textHeight, settextHeight] = useState<TextHeightType>({
    height: 700,
    project: "project-description-medium",
    mainInfo: "main-info-text ",
    mainImage: "image-visible",
  });
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(result);

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      const heightNew = getHeightCSS(window.innerHeight);
      settextHeight(heightNew);
    }
  }, []);

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
            if (image.original.src.includes("_monitor")) {
              portfolioImages[slug] = {
                ...portfolioImages[slug],
                monitor: getImage(image.gatsbyImageData),
              };
            } else if (image.original.src.includes("screenPhone")) {
              portfolioImages[slug] = {
                ...portfolioImages[slug],
                screenPhone: getImage(image.gatsbyImageData),
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
            }
          } else if (image.original.src.includes("profileIcon")) {
            allImages["iconImage"] = getImage(image.gatsbyImageData);
          } else if (image.original.src.includes("icon192")) {
            allImages["iconLink"] = getImage(image.gatsbyImageData);
          } else if (image.original.src.includes("profilePicSmall")) {
            allImages["profilePicSmall"] = getImage(image.gatsbyImageData);
          } else if (image.original.src.includes("magnifying")) {
            allImages["magnifying"] = getImage(image.gatsbyImageData);
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

  const setScrollingUp = () => {
    dispatch({
      type: "SET_SCROLL_UP",
    });
  };
  const setScrollingDown = () => {
    dispatch({
      type: "SET_SCROLL_DOWN",
    });
  };

  const setCloseModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  const setOpenModal = (value: string) => {
    dispatch({
      type: "OPEN_MODAL",
      payload: value,
    });
  };
  const setOldIndex = (indexNumber: number) => {
    dispatch({ type: "SET_OLD_INDEX", payload: indexNumber });
  };

  const handleScroll = (
    e: React.UIEvent<HTMLDivElement, UIEvent>,
    indexPage: number
  ) => {
    e.preventDefault();
    const childHeight =
      e.currentTarget.firstElementChild?.firstElementChild?.lastElementChild
        ?.clientHeight!;
    const scrollHeight = e.currentTarget.scrollTop;

    const windowHeight = e.currentTarget.clientHeight;
    const scrollTotal = scrollHeight + windowHeight;

    if (scrollTotal <= state.scrollPosition) {
      setScrollingUp();
      if (scrollTotal === windowHeight) {
        if (indexPage === 0) {
          navigate(`/`);
          setOldIndex(-1);
        } else if (indexPage > 0) {
          navigate(`/projects/${projects[indexPage - 1].slug}`);
          setOldIndex(indexPage);
        }
      }
    } else {
      if (scrollTotal >= childHeight - 10 && indexPage < projects.length - 1) {
        setScrollingDown();
        navigate(`/projects/${projects[indexPage + 1].slug}`);
        setOldIndex(indexPage);
      }
    }
    dispatch({
      type: "SET_SCROLL_POSITION",
      payload: scrollTotal,
    });
  };
  const value = {
    state,
    dispatch,
    setCloseModal,
    setOpenModal,
    textHeight,
    handleScroll,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
