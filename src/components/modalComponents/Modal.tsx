import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Layout from "../layout/Layout";

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
  const {
    setCloseModal,
    state: {
      portfolioImages,
      openModal: { status, value },
    },
  } = useGlobalContext();
  const [findClass, setfindClass] = useState("medium");

  useEffect(() => {
    const height = window.innerHeight;
    if (height < 600) {
      setfindClass("short");
    } else if (height >= 600 && height < 750) {
      setfindClass("medium");
    } else {
      setfindClass("tall");
    }
  }, [window.innerHeight]);

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
            <div className={classModal[findClass].classSmall}>
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
            <div className={classModal[findClass].classBig}>
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
