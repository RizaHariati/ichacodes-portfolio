import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Link } from "gatsby";

type Props = {
  imageData: any;
  title: string;
  description: string[];
  mainProgram: string;
  url: string;
  slug: string;
};

const SlideInfo = ({
  imageData,
  title,
  description,
  mainProgram,
  url,
  slug,
}: Props) => {
  return (
    <div className="slide-base ">
      <div className="slide-phone">
        <GatsbyImage
          image={imageData}
          objectFit="fill"
          className=" h-52  2xl:h-72 "
          objectPosition="center"
          alt={title}
        />
      </div>

      <div className="slide-info">
        <h5 className="font-semibold">{title}</h5>
        <p className="slide-description shadow-black">
          {description[0].slice(0, 200)}
        </p>
        <p className="font-medium">Main Program : {mainProgram}</p>
        <div className="w-full flex gap-2 mt-1">
          <Link to={`/projects/${slug}`} className="standard-btn">
            <FontAwesomeIcon icon={faInfoCircle} />
            More...
          </Link>
          <a
            href={url}
            className="standard-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideInfo;
