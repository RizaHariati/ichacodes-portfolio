import { GatsbyImage } from "gatsby-plugin-image";

import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
type Props = {
  visibility: boolean;
  imageCSS: string;
  imageName: string;
  evenOdd: "even" | "odd";
};

const MainImageInfo = ({ visibility, imageCSS, imageName, evenOdd }: Props) => {
  const {
    setOpenModal,
    state: { portfolioImages, allImages },
  } = useGlobalContext();
  const imageVisible = evenOdd === "odd" ? `${imageCSS} sm:order-3 ` : imageCSS;
  const imageInvisible =
    evenOdd === "odd" ? `image-invisible sm:order-3 ` : "image-invisible";
  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    return (
      <div className={visibility ? imageVisible : imageInvisible}>
        <GatsbyImage
          image={portfolioImages[imageName.slice(0, -8)].monitor!}
          alt={imageName}
          loading="lazy"
          className="w-full"
        />
        <button
          className={
            visibility
              ? "magnifying-btn"
              : "absolute opacity-0 bottom-10 right-16 transition-all"
          }
          onClick={() => setOpenModal(imageName.slice(0, -8))}
        >
          <GatsbyImage
            image={allImages["magnifying"]!}
            alt={imageName}
            loading="lazy"
            className="w-full"
          />
        </button>
      </div>
    );
  }
};

export default MainImageInfo;
