import { GatsbyImage } from "gatsby-plugin-image";

import React from "react";
import { useGlobalContext } from "../../context/AppProvider";
import { PortfolioImageType } from "../../context/types.d";

type Props = {
  portfolioImage: PortfolioImageType;
  imageName: string;
  evenOdd: "even" | "odd";
};

const MainImageInfo = ({ portfolioImage, imageName, evenOdd }: Props) => {
  const {
    textHeight: { mainImage },
  } = useGlobalContext();

  const {
    setOpenModal,
    state: { allImages },
  } = useGlobalContext();
  const imageVisible =
    evenOdd === "odd"
      ? `${mainImage} sm:order-3 origin-right animate-quickPulse`
      : `${mainImage} origin-left animate-quickPulse`;

  if (!allImages || (allImages && Object.keys(allImages).length < 1)) {
    return <div></div>;
  } else {
    return (
      <div className={imageVisible}>
        <GatsbyImage
          image={portfolioImage.monitor!}
          alt={imageName}
          loading="eager"
          className="w-full"
        />
        <button
          className="magnifying-btn animate-pulse"
          onClick={() => setOpenModal(imageName)}
        >
          <GatsbyImage
            image={allImages["magnifying"]!}
            alt={imageName}
            loading="lazy"
            className="h-full"
          />
        </button>
      </div>
    );
  }
};

export default MainImageInfo;
