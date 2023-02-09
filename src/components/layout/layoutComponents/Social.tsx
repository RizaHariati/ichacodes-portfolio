import { StaticImage } from "gatsby-plugin-image";
import React from "react";
type Props = {};

const Social = (props: Props) => {
  return (
    <div className="social-container">
      <a
        href="https://www.linkedin.com/in/riza-hariati-2021/"
        className="group main-btn w-8 sm:w-10 pl-0"
      >
        <div className="icon-btn ">
          <StaticImage
            src="../../../images/icons/LinkedIn.svg"
            alt="LinkedIn"
            objectFit="cover"
            objectPosition="center"
            placeholder="dominantColor"
          />
        </div>
      </a>
      <a
        href="https://github.com/RizaHariati"
        className="group main-btn w-8 sm:w-10 pl-0"
      >
        <div className="icon-btn">
          <StaticImage
            src="../../../images/icons/Github.svg"
            alt="Github"
            objectFit="cover"
            objectPosition="center"
            placeholder="dominantColor"
          />
        </div>
      </a>
    </div>
  );
};

export default Social;
