import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Modal = (props: Props) => {
  const {
    setCloseModal,
    state: {
      portfolioImages,
      openModal: { status, value },
    },
  } = useGlobalContext();

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
                window.innerHeight > 750
                  ? "small-modal-container2"
                  : "small-modal-container"
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
        </div>
      </div>
    );
  }
};

export default Modal;
