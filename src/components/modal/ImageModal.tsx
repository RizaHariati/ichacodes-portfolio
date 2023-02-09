import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShowModalType } from "../../context/types.d";
import { GatsbyImage } from "gatsby-plugin-image";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  showModal: ShowModalType;
  setShowModal: React.Dispatch<React.SetStateAction<ShowModalType>>;
};

const ImageModal = ({ showModal, setShowModal }: Props) => {
  return (
    <div
      className={showModal ? "modal-base-show" : "modal-base-show opacity-0 "}
    >
      <div className="modal-content">
        <div className="modal-container">
          <div className="modal-image-website ">
            <GatsbyImage
              image={showModal.value[0]}
              objectFit="fill"
              className="h-full"
              objectPosition="center"
              alt="image short"
              loading="eager"
            />
          </div>
          <div className="modal-image-phone ">
            <GatsbyImage
              image={showModal.value[1]}
              objectFit="fill"
              className="h-full "
              objectPosition="center"
              alt="image short"
              loading="eager"
            />
          </div>
          <button
            className="close-btn"
            onClick={() =>
              setShowModal({
                status: false,
                type: "",
                value: [],
              })
            }
          >
            <FontAwesomeIcon icon={faTimesCircle} className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
