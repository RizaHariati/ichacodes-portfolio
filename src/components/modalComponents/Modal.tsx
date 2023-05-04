import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const classModal: { [key: string]: { classSmall: string; classBig: string } } =
  {
    short: {
      classSmall: "small-modal-container",
      classBig: "big-modal-container3 ",
    },
    medium: {
      classSmall: "small-modal-container",
      classBig: "big-modal-container",
    },
    tall: {
      classSmall: "small-modal-container2",
      classBig: "big-modal-container2 ",
    },
  };
const Modal = (props: Props) => {
  const isBrowser = typeof window !== "undefined";
  const {
    setCloseModal,
    state: {
      portfolioImages,
      openModal: { status, value },
    },
  } = useGlobalContext();

  const getWindowInnerHeart = (height: number) => {
    if (height < 600) {
      return "short";
    } else if (height >= 600 && height < 750) {
      return "medium";
    } else {
      return "tall";
    }
  };

  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    return (
      <div className={status ? "modal-base  " : "modal-base hidden "}>
        <div className="modal-base-inside">
          {status && value && (
            <div
              className={
                classModal[
                  getWindowInnerHeart(
                    typeof window !== "undefined" ? window.innerHeight : 700
                  )
                ].classSmall
              }
            >
              <div className="small-modal-img animate-newPulse">
                <GatsbyImage
                  image={portfolioImages[value].mainphone!}
                  alt={value}
                  loading="lazy"
                  objectFit="cover"
                  className="h-full"
                />
              </div>
              <button
                className="modal-close-btn"
                onClick={() => {
                  setCloseModal();
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          )}
          {status && value && (
            <div
              className={
                classModal[
                  getWindowInnerHeart(
                    typeof window !== "undefined" ? window.innerHeight : 700
                  )
                ].classBig
              }
            >
              <div className="big-modal-img ">
                <GatsbyImage
                  image={portfolioImages[value].screenPhone!}
                  alt={value}
                  loading="lazy"
                  objectFit="contain"
                  className="h-full"
                />
              </div>
              <button
                className="big-close-btn"
                onClick={() => {
                  setCloseModal();
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Modal;
