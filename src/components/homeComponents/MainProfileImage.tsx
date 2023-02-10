import React from "react";
import { StaticImage } from "gatsby-plugin-image";

type Props = {};

const MainProfileImage = (props: Props) => {
  return (
    <div className="main-page-image-container">
      <div className="main-page-image">
        <StaticImage
          src="../../../src/images/profile_pic.jpg"
          alt="background"
          layout="constrained"
          placeholder="dominantColor"
          loading="lazy"
          objectFit="cover"
          className="h-full object-cover "
        />
      </div>
    </div>
  );
};

export default MainProfileImage;
